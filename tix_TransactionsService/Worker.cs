using Microsoft.Extensions.Options;
using System.Data;
using TronNet.Protocol;
using TronNet;
using Google.Protobuf.WellKnownTypes;
using Google.Protobuf.Collections;
using TronNet.ABI.FunctionEncoding;
using TronNet.ABI.Model;
using TronNet.Contracts;
using TronNet.ABI;
using System.Numerics;
using Google.Protobuf;
using static TronNet.Crypto.HashExtension;
using System.Runtime.CompilerServices;
using Newtonsoft.Json;
using System.Text;
using Google.Type;

namespace tix_TransactionsService
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly IConfiguration _configuration;

        private readonly ITronClient _tronClient;
        private readonly IGrpcChannelClient channelClient;
        private readonly IWalletClient _walletClient;
        private readonly IOptions<TronNetOptions> _options;
        private readonly ITransactionClient _transactionClient;
        static readonly string txnreceipt = "IF (NOT EXISTS(SELECT 1 FROM [Explorer_BLOCKS].[dbo].[txnsreceipts] WITH (NOLOCK) WHERE [hash] = '{2}' AND [blocknumber]={0})) BEGIN  INSERT INTO [dbo].[txnsreceipts] ([blocknumber],[blocktime],[hash],[from],[to],[contract],[value],[status],[transferTxn],[internalTxn],[Active],[txnGAS],[createdtime],[methodid]) VALUES ('{0}', '{1}', '{2}', '{3}', '{4}' , '{5}', '{6}','{7}','{8}','{9}','{10}','{11}','{12}',{13}); END;";

        static string getblocknumber = "SELECT top 1 ISNULL(blocknumber,0) FROM [Explorer_BLOCKS].[dbo].[Blocks_ForTxn] WITH (NOLOCK) order by blocknumber";

        readonly string deleteblock = " DELETE FROM [Explorer_BLOCKS].[dbo].[Blocks_ForTxn] WHERE [blocknumber] = {0}; ";

        static readonly string deleteInternalTxn = " DELETE FROM [Explorer_BLOCKS].[dbo].[TxnsInternal] Where [blocknumber] = {0};  ";

        static readonly string InternalTxn = " DELETE FROM [Explorer_BLOCKS].[dbo].[TxnsInternal] Where [blocknumber] = {0}; INSERT INTO [dbo].[TxnsInternal] ([blocknumber],[blocktime],[hash],[from],[to],[value],[token],[tokenid],[rejected],[methodid],[notes],[Active],[createdtime]) VALUES ({0}, {1}, '{2}', '{3}', '{4}' , {5}, '{6}','{7}','{8}',{9},'{10}',{11},'{12}'); ";

        static readonly string sp_AddOrUpdateInternalTxn = "EXEC [dbo].[sp_AddOrUpdateInternalTxn] '{0}', '{1}'; ";

        static readonly string sp_AddOrUpdateContract = "EXEC [dbo].[sp_AddOrUpdateContract] '{0}'; ";
        
        static bool _lock = false;
        static DataUtility du;
        public Worker(ILogger<Worker> logger, IConfiguration configuration, ITronClient tronClient, IOptions<TronNetOptions> options, IGrpcChannelClient channelClient, IWalletClient walletClient, ITransactionClient transactionClient)
        {

            _configuration = configuration;
            _logger = logger;
            _walletClient = walletClient;
            _options = options;
            _tronClient = tronClient;
            _transactionClient = transactionClient;
            du = new DataUtility((string)_configuration["ConnectionString"]);
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            if (!_lock)
                while (!stoppingToken.IsCancellationRequested)
                {
                    _lock = true;
                    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                    await _runTxnInvoker();
                    await Task.Delay(1000, stoppingToken);
                    _lock = false;
                }
        }

        private async Task PrintException(Exception ex)
        {
            if (ex != null)
            {
                string path = AppDomain.CurrentDomain.BaseDirectory + "\\Logs";
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }
                foreach (var f in Directory.GetFiles(path, "*.txt"))
                {
                    DateTime fileCreatedDate = File.GetCreationTime(f);
                    if ((DateTime.Now - fileCreatedDate).TotalDays > 5)
                        File.Delete(f);
                }
                string filepath = AppDomain.CurrentDomain.BaseDirectory + "\\Logs\\ServiceLog_" + DateTime.Now.Date.ToShortDateString().Replace('/', '_') + ".txt";
                if (!File.Exists(filepath))
                {
                    using (StreamWriter sw = File.CreateText(filepath))
                    {
                        sw.WriteLine(ex.Message);
                        sw.WriteLine(ex.StackTrace);
                    }
                }
                else
                {
                    using (StreamWriter sw = File.AppendText(filepath))
                    {
                        sw.WriteLine(ex.Message);
                        sw.WriteLine(ex.StackTrace);
                    }
                }
            }
        }
        //https://learn.microsoft.com/en-us/aspnet/core/signalr/dotnet-client?view=aspnetcore-8.0&tabs=visual-studio
        private async Task _runTxnInvoker()
        {
            var methodInfo = System.Reflection.MethodBase.GetCurrentMethod();
            var funName = methodInfo.DeclaringType.Name + "." + methodInfo.Name;
            try
            {
               // DataUtility du = new DataUtility((string)_configuration["ConnectionString"]);
                Int64 blocknumber = 0;


                var s = du.GetScalar(getblocknumber);
                blocknumber = Int64.Parse(s == null ? "0" : s.ToString());
                if (blocknumber == 0) return;

                var wallet = _walletClient.GetProtocol();
                var walletSolidity = _walletClient.GetSolidityProtocol();

                var txh = Task.Run(async () => await wallet.GetTransactionInfoByIdAsync(new BytesMessage
                {
                    Value = ByteString.CopyFrom("438526a2aa976e2d5e060d2b3f38c7d0ced7564c27dcae4612b208f49251a87f".HexToByteArray()),
                }, headers: _walletClient.GetHeaders())).Result;

                var res = Task.Run(async () => await wallet.GetBlockByNum2Async(new NumberMessage() { Num = blocknumber })).Result;
                var qry = "";

                qry = qry + string.Format(deleteInternalTxn, res.BlockHeader.RawData.Number);

                foreach (var txn in res.Transactions)
                {

                    var t = getTxnData(txn.Transaction.RawData.Contract, txn.Result.Result);
                    var json = System.Text.Json.JsonSerializer.Serialize(txn);
                   
                    //if (t.tokenAddress != null) decimals = GetDecimals(wallet, t.tokenAddress.ToByteArray());

                    //    t.tokenAmount = (t.tokenAmount.ToString().Length > decimals) ? 0 : t.tokenAmount;
                    List<string> internalTxnsList = new List<string>();
                   
                    Dictionary<string, string> addTrans = new Dictionary<string, string>();
                    var txnInfo = Task.Run(async () => await wallet.GetTransactionInfoByIdAsync(new BytesMessage
                    {
                        Value = txn.Txid,
                    }, headers: _walletClient.GetHeaders())).Result;
                    //var contract = txnInfo.ContractAddress.FromByteStringToHex().ToBase58Address();
                    
                    foreach (var it in txnInfo.InternalTransactions)
                    {
                        foreach (var v in it.CallValueInfo)
                        {
                            qry = qry + (string.Format(InternalTxn, res.BlockHeader.RawData.Number, res.BlockHeader.RawData.Timestamp, it.Hash.ToByteArray().ToSHA256Hash().ToHex(), it.CallerAddress.FromByteStringToHex().ToBase58Address(), it.TransferToAddress.FromByteStringToHex().ToBase58Address(), v.CallValue, "", string.IsNullOrEmpty(v.TokenId) ? "" : v.TokenId, it.Rejected, t.methodid, it.Note.ToString(), 1, res.BlockHeader.RawData.Timestamp.FromUnixTimeStampToUTCDateTime()));

                            InternalTransactionData internalTxn = new InternalTransactionData()
                            {

                                blocknumber = res.BlockHeader.RawData.Number,
                                blocktimestamp = res.BlockHeader.RawData.Timestamp,
                                hash = it.Hash.ToByteArray().ToSHA256Hash().ToHex(),
                                from = it.CallerAddress.FromByteStringToHex().ToBase58Address(),
                                to = it.TransferToAddress.FromByteStringToHex().ToBase58Address(),
                                amount = v.CallValue,
                                type = "Call",
                               
                                tokenid = v.TokenId,
                                rejected = it.Rejected,
                                methodid = t.methodid,
                                notes = it.Note.FromByteStringToHex()
                            };

                            internalTxnsList.Add(JsonConvert.SerializeObject(internalTxn, Formatting.Indented));

                            var add = internalTxn.from;
                            internalTxn.INOUT = "OUT";

                            if (addTrans.ContainsKey(add))
                                addTrans[add] = addTrans[add] + "," + JsonConvert.SerializeObject(internalTxn, Formatting.Indented);
                            else
                                addTrans.Add(add, JsonConvert.SerializeObject(internalTxn, Formatting.Indented));

                            add = internalTxn.to;
                            internalTxn.INOUT = "IN";

                            if (addTrans.ContainsKey(add))
                                addTrans[add] = addTrans[add] + "," + JsonConvert.SerializeObject(internalTxn, Formatting.Indented);
                            else
                                addTrans.Add(add, JsonConvert.SerializeObject(internalTxn, Formatting.Indented));

                        }
                    }

                    foreach (var key in addTrans.Keys)
                    {
                        qry = qry + (string.Format(sp_AddOrUpdateInternalTxn, key, addTrans[key]));
                    }

                    if (txnInfo.ContractAddress.Count() > 0)
                    {
                        t.contract = txnInfo.ContractAddress.FromByteStringToHex().ToBase58Address();
                        if (t.methodid == 30) //"CreateSmartContract"
                        {
                            t.newContract.address =  t.contract ;
                            t.newContract.blocknumber = res.BlockHeader.RawData.Number;
                            t.newContract.blocktime = res.BlockHeader.RawData.Timestamp;
                            t.newContract.UTCDate = res.BlockHeader.RawData.Timestamp.FromUnixTimeStampToUTCDateTime();
                            qry = qry + (string.Format(sp_AddOrUpdateContract, JsonConvert.SerializeObject(t.newContract, Formatting.Indented)));
                        }
                    }

                    t.hash = txn.Transaction.GetTxid();
                    t.resultCode = txn.Result.Code.ToString();
                    t.Type = txn.Transaction.RawData.Contract[0].Type.ToString();
                    t.blocknumber = res.BlockHeader.RawData.Number;
                    t.blocktime = res.BlockHeader.RawData.Timestamp;
                    t.UTCDate = res.BlockHeader.RawData.Timestamp.FromUnixTimeStampToUTCDateTime();
                    t.fee = txnInfo.Fee;
                    t.feeLimit = txn.Transaction.RawData.FeeLimit;
                    t.receipt = txnInfo.Receipt;

                    foreach (var item in t.transfers)
                    {
                        item.hash = t.hash;
                        item.blocknumber = t.blocknumber;
                        item.blocktime = t.blocktime;
                        item.result = t.result;
                        item.Type = t.Type;
                        item.contract = t.contract;
                        
                    }

                    var transfer = JsonConvert.SerializeObject(t.transfers, Formatting.Indented);


                    qry = qry + (string.Format(txnreceipt, res.BlockHeader.RawData.Number, res.BlockHeader.RawData.Timestamp, txn.Transaction.GetTxid(), t.from, t.to, t.contract, t.amount, txn.Result.Result, transfer, string.Join(',', internalTxnsList.ToArray()), 1, t.fee, res.BlockHeader.RawData.Timestamp.FromUnixTimeStampToUTCDateTime(), t.methodid));

                }


                qry = qry + string.Format(deleteblock, blocknumber);

                qry = "BEGIN TRANSACTION \"" + funName + "\" BEGIN TRY " + qry + " COMMIT TRANSACTION \"" + funName + "\" END TRY BEGIN CATCH ROLLBACK TRANSACTION \"" + funName + "\" END CATCH ";
                du.ExecuteSql(qry);

            }
            catch (Exception ex)
            {
                await PrintException(ex);
            }
        }

        private long GetDecimals(Wallet.WalletClient wallet, byte[] contractAddressBytes)
        {
            var trc20Decimals = new DecimalsFunction();

            var callEncoder = new FunctionCallEncoder();
            var functionABI = ABITypedRegistry.GetFunctionABI<DecimalsFunction>();

            var encodedHex = callEncoder.EncodeRequest(trc20Decimals, functionABI.Sha3Signature);

            var trigger = new TriggerSmartContract
            {
                ContractAddress = ByteString.CopyFrom(contractAddressBytes),
                Data = ByteString.CopyFrom(encodedHex.HexToByteArray()),
            };

            var txnExt = wallet.TriggerConstantContract(trigger, headers: _walletClient.GetHeaders());

            if (txnExt.Result.Result)
            {

                var result = txnExt.ConstantResult[0].ToByteArray().ToHex();

                return new FunctionCallDecoder().DecodeOutput<long>(result, new Parameter("uint8", "d"));
            }
            else return 0;
        }


        private TransactionData getTxnData(RepeatedField<Transaction.Types.Contract> c, bool result)
        {
            if (c.Count() > 1) throw new Exception("multiple c");

            var wallet = _walletClient.GetProtocol();
            //TransactionData txnData = new TransactionData();
            TxnTransferFunction txnTransfer = new TxnTransferFunction();

            BigInteger quotient;
            BigInteger remainder;
            txnTransfer.methodid = (int)c[0].Type;

            switch (c[0].Type)
            {
                case Transaction.Types.Contract.Types.ContractType.TransferContract:
                    var tc = c[0].Parameter.Unpack<TransferContract>();
                    try
                    {
                        txnTransfer.from = tc.OwnerAddress.FromByteStringToHex().ToBase58Address();
                        txnTransfer.to = tc.ToAddress.FromByteStringToHex().ToBase58Address();
                        txnTransfer.tokenamount = tc.Amount;
                        txnTransfer.tokendecimal = 6;

                        quotient = BigInteger.DivRem(txnTransfer.tokenamount, BigInteger.Pow(10, (int)txnTransfer.tokendecimal), out remainder);
                        txnTransfer.tokenamountInDecimal = decimal.Parse(decimal.Parse(quotient.ToString() + "." + remainder.ToString().PadLeft((int)txnTransfer.tokendecimal, '0')).ToString("G29"));

                    }
                    catch { }
                    return new TransactionData()
                    {
                        amount = txnTransfer.tokenamountInDecimal,
                        from = tc.OwnerAddress.FromByteStringToHex().ToBase58Address(),
                        to = tc.ToAddress.FromByteStringToHex().ToBase58Address(),
                        transfers = new List<TxnTransferFunction>() { txnTransfer },
                        methodid = txnTransfer.methodid
                    };

                case Transaction.Types.Contract.Types.ContractType.TriggerSmartContract:
                    var tsc = c[0].Parameter.Unpack<TriggerSmartContract>();

                    if (tsc.ContractAddress.Count() > 0)
                        txnTransfer.tokendecimal = GetDecimals(wallet, tsc.ContractAddress.ToByteArray());

                    try
                    {
                        var decodedData = tsc.Data.Length > 8 ? new FunctionCallDecoder().DecodeFunctionInput<TransferFunction>(tsc.Data.FromByteStringToHex()) : new TransferFunction();

                        if (decodedData.FromAddress != null)
                            txnTransfer.from = ByteString.CopyFrom(decodedData.FromAddress.Replace("0x", "26").HexToByteArray()).FromByteStringToHex().ToBase58Address();
                        if (decodedData.To != null)
                            txnTransfer.to = ByteString.CopyFrom(decodedData.To.Replace("0x", "26").HexToByteArray()).FromByteStringToHex().ToBase58Address();

                        if (string.IsNullOrEmpty(txnTransfer.from))
                        {
                            txnTransfer.from = tsc.OwnerAddress.FromByteStringToHex().ToBase58Address();
                        }

                        if (string.IsNullOrEmpty(txnTransfer.to))
                        {
                            txnTransfer.from = tsc.ContractAddress.FromByteStringToHex().ToBase58Address();
                        }

                        txnTransfer.tokenamount = decodedData.TokenAmount;
                    }
                    catch { }

                    quotient = BigInteger.DivRem(txnTransfer.tokenamount, BigInteger.Pow(10, (int)txnTransfer.tokendecimal), out remainder);
                    txnTransfer.tokenamountInDecimal = decimal.Parse(decimal.Parse(quotient.ToString() + "." + remainder.ToString().PadLeft((int)txnTransfer.tokendecimal, '0')).ToString("G29"));

                    return new TransactionData()
                    {
                        contract = tsc.ContractAddress.FromByteStringToHex().ToBase58Address(),
                        transfers = new List<TxnTransferFunction>() { txnTransfer },
                        from = tsc.OwnerAddress.FromByteStringToHex().ToBase58Address(),
                        to = tsc.ContractAddress.FromByteStringToHex().ToBase58Address(),
                        methodid = txnTransfer.methodid
                    };
                // return //new TransactionData() { tokenid = tsc.TokenId, from = tsc.OwnerAddress.FromByteStringToHex().ToBase58Address(), tokenAddress = ByteString.CopyFrom(decodedData.To == null ? ByteString.Empty.ToByteArray() :decodedData.To.Replace("0x", "26").HexToByteArray()), to = tsc.ContractAddress.FromByteStringToHex().ToBase58Address(), }; //  result ? decodedData.TokenAmount : 0 - will chk how to decode contract method
                case Transaction.Types.Contract.Types.ContractType.UnDelegateResourceContract:
                    var udrc = c[0].Parameter.Unpack<UnDelegateResourceContract>();
                    return new TransactionData() { from = udrc.OwnerAddress.FromByteStringToHex().ToBase58Address(), to = udrc.ReceiverAddress.FromByteStringToHex().ToBase58Address(), amount = udrc.Balance, methodid = txnTransfer.methodid };
                case Transaction.Types.Contract.Types.ContractType.DelegateResourceContract:
                    var drc = c[0].Parameter.Unpack<DelegateResourceContract>();
                    return new TransactionData() { from = drc.OwnerAddress.FromByteStringToHex().ToBase58Address(), to = drc.ReceiverAddress.FromByteStringToHex().ToBase58Address(), amount = drc.Balance, methodid = txnTransfer.methodid };
                case Transaction.Types.Contract.Types.ContractType.CreateSmartContract:
                    var csc = c[0].Parameter.Unpack<CreateSmartContract>();
                    var newcontract = new Contract()
                    {
                        address = csc.NewContract.ContractAddress.FromByteStringToHex().ToBase58Address(),
                        originaddress = csc.NewContract.OriginAddress.FromByteStringToHex().ToBase58Address(),
                        name = csc.NewContract.Name,
                        version = "1.0"
                    };

                    return new TransactionData() { from = csc.OwnerAddress.FromByteStringToHex().ToBase58Address(), to = csc.NewContract.OriginAddress.FromByteStringToHex().ToBase58Address(), amount = csc.CallTokenValue, methodid = txnTransfer.methodid, newContract= newcontract };
                case Transaction.Types.Contract.Types.ContractType.AccountPermissionUpdateContract:
                    var apuc = c[0].Parameter.Unpack<AccountPermissionUpdateContract>();
                    return new TransactionData() { from = apuc.OwnerAddress.FromByteStringToHex().ToBase58Address(), methodid = txnTransfer.methodid };
                case Transaction.Types.Contract.Types.ContractType.FreezeBalanceV2Contract:
                    var fbv2c = c[0].Parameter.Unpack<FreezeBalanceV2Contract>();
                    return new TransactionData() { from = fbv2c.OwnerAddress.FromByteStringToHex().ToBase58Address(), methodid = txnTransfer.methodid };



                default:
                    return new TransactionData() { methodid = txnTransfer.methodid };
                    //                    throw new Exception("ContractType not defined");

            }

        }

    }

    public class InternalTransactionData
    {
        public string hash { get; set; }
        public string from { get; set; }
        public string to { get; set; }
        public string type { get; set; }
        public string tokenid { get; set; }
        public decimal amount { get; set; }
        public bool rejected { get; set; }
        public string INOUT { get; set; }
        public Int64 methodid { get; set; }
        public string notes { get; set; }
        public long blocknumber { get; set; }
        public long blocktimestamp { get; set; }


    }


    public class Contract
    {
        public Contract()
        {
            token = new Token();
        }
        public string address { get; set; }
        public string originaddress { get; set; }
        public string name { get; set; }
        public string numberofCalls { get; set; }
        public decimal balance { get; set; }
        public string version { get; set; }
      
        public string license { get; set; }
        public Int64 blocknumber { get; set; }
        public Int64 blocktime { get; set; }
        public Token token { get; set; }
        public DateTime UTCDate { get; set; }
    }

    public class Token
    {

        public string name { get; set; }
        public string numberofCalls { get; set; }
        public Int64 tkndecimal { get; set; }
        public decimal supply { get; set; }
        public decimal cursupply { get; set; }
        public decimal marketcap { get; set; }
        public decimal curmarketcap { get; set; }
        public string version { get; set; }
        public string license { get; set; }

        public string setting { get; set; }
        public string runs { get; set; }
        public bool optimization { get; set; }
        public Int64 blocknumber { get; set; }
        public Int64 blocktime { get; set; }

    }

    public class TransactionData
    {
        public TransactionData()
        {

            newContract = new Contract();
            transfers = new List<TxnTransferFunction>();
            internalTxns = new List<InternalTransactionData>();

        }
        public Contract newContract { get; set; }

        public TransactionInfo? txnInfo { get; set; }
        public List<InternalTransactionData> internalTxns { get; set; }
        public List<TxnTransferFunction> transfers { get; set; }
        public string hash { get; set; }
        public string from { get; set; }
        public Int64 blocknumber { get; set; }
        public Int64 blocktime { get; set; }
        public Int64 fee { get; set; }
        public Int64 feeLimit { get; set; }
        public ResourceReceipt receipt { get; internal set; }
        public string to { get; set; }
        public string contract { get; set; }
        public string Type { get; set; }
        public decimal amount { get; set; }
        public Int64 methodid { get; set; }
        public bool result { get; set; }
        public string resultCode { get; set; }

        public DateTime UTCDate { get; set; }
    }

    public class TxnTransferFunction
    {
        public string hash { get; set; }
        public string token { get; set; }
        public BigInteger tokenamount { get; set; }
        public Int64 tokendecimal { get; set; }
        public decimal tokenamountInDecimal { get; set; }
        public string from { get; set; }
        public Int64 blocknumber { get; set; }
        public Int64 blocktime { get; set; }
        public string to { get; set; }
        public string contract { get; set; }
        public string Type { get; set; }

        public Int64 methodid { get; set; }
        public bool result { get; set; }
        public DateTime UTCDate { get; set; }


    }

    public record TronTestRecord(IServiceProvider ServiceProvider, ITronClient TronClient, IOptions<TronNetOptions> Options);
    public static class TronTestServiceExtension
    {
        public static IServiceProvider AddTronNet()
        {
            IServiceCollection services = new ServiceCollection();
            services.AddTronNet(x =>
            {
                x.Network = TronNetwork.MainNet;
                x.Channel = new GrpcChannelOption { Host = "grpc.shasta.trongrid.io", Port = 50051 };
                x.SolidityChannel = new GrpcChannelOption { Host = "grpc.shasta.trongrid.io", Port = 50052 };
                x.ApiKey = "";
            });
            services.AddLogging();
            return services.BuildServiceProvider();
        }

        public static TronTestRecord GetTestRecord()
        {
            var provider = TronTestServiceExtension.AddTronNet();
            var client = provider.GetService<ITronClient>();
            var options = provider.GetService<IOptions<TronNetOptions>>();

            return new TronTestRecord(provider, client, options);
        }
    }

    public static class DateTimeExtensions
    {
        //public static DateTime FromUnixTimeStampToDateTime(this string unixTimeStamp)
        //{

        //    return TimeZoneInfo.ConvertTimeFromUtc(DateTimeOffset.FromUnixTimeSeconds(long.Parse(unixTimeStamp)).UtcDateTime, TimeZoneInfo.Local);
        //}

        public static DateTime FromUnixTimeStampToUTCDateTime(this long unixTimeStamp)
        {

            return DateTimeOffset.FromUnixTimeMilliseconds(unixTimeStamp).UtcDateTime;
        }
    }
}