using Google.Protobuf;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Org.BouncyCastle.Utilities.Encoders;
using System.Data;
using System.Net;
using System.Security.Principal;
using System.Text;
using TronNet;
using TronNet.ABI.Util;
using TronNet.Crypto;
using TronNet.Protocol;
using static TronNet.Protocol.Wallet;

namespace tix_BlockService
{
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        private readonly IConfiguration _configuration;

        private readonly ITronClient _tronClient;
        private readonly IGrpcChannelClient channelClient;
        private readonly IWalletClient _walletClient;
        private readonly IOptions<TronNetOptions> _options;

        static string getblocknumber = "SELECT top 1 ISNULL(blocknumber,0) FROM block WITH (NOLOCK) order by blocknumber DESC ";

        static string getRequeuedBlockNumber = "SELECT top 10 blocknumber FROM [dbo].[block_requeue] WITH (NOLOCK) order by blocknumber ";

        static string deleteRequeuedBlockNumber = "DELETE FROM [dbo].[block_requeue] Where blocknumber={0}; ";

        static readonly string insertblock = "IF (NOT EXISTS(SELECT 1 FROM [dbo].[block] WITH (NOLOCK) WHERE [blocknumber] = '{1}')) BEGIN INSERT INTO [dbo].[block] ([blockhash],[blocknumber],[miner],[timestamp],[txncounts],[uncles],[gasused],[gaslimit],[basefee],[rewards],[burntfees],[data]) VALUES('{0}','{1}','{2}','{3}',{4},'{5}','{6}','{7}','{8}','{9}','{10}','{11}'); END; ";

        static readonly string sp_AddOrUpdateToken = "EXEC [dbo].[sp_AddOrUpdateToken] '{0}'; ";

        static bool _lock = false;

        //chnage added two more prop
        static string getTempBlockNumber = "SELECT MAX(blocknumber) FROM [dbo].[block_requeue_2May] WITH (NOLOCK); ";
        static string insertRequeuedBlockNumber = "INSERT INTO [dbo].[block_requeue] VALUES ({0}); ";
        static string updateTempBlockNumber = "UPDATE [dbo].[block_requeue_2May] SET blocknumber = {0}; ";


        public Worker(ILogger<Worker> logger, IConfiguration configuration, ITronClient tronClient, IOptions<TronNetOptions> options, IGrpcChannelClient channelClient, IWalletClient walletClient)
        {

            _configuration = configuration;
            _logger = logger;
            _walletClient = walletClient;
            _options = options;
            _tronClient = tronClient;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            if (!_lock)
                while (!stoppingToken.IsCancellationRequested)
                {
                    _lock = true;
                    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                    ////await _runOldBlock();
                    //await _runRequeueBlock();
                    //await _runBlockInvoker();
                    await _runTokenInvoker();
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
        private async Task _runOldBlock()
        {

            var methodInfo = System.Reflection.MethodBase.GetCurrentMethod();
            var funName = methodInfo.DeclaringType.Name + "." + methodInfo.Name;
            try
            {
                DataUtility du = new DataUtility((string)_configuration["ConnectionString"]);
                Int64 blocknumber = 0;
                Int64 blocklimit = 0;

                DataTable dt = du.GetDataTable(getTempBlockNumber);

                if (dt.Rows.Count > 0) blocknumber = Int64.Parse(dt.Rows[0].ItemArray[0].ToString());

                if (blocknumber == 0) return;

                var qry = " ";
                while (5373544 > blocknumber && blocklimit<100)
                {
                    blocknumber = blocknumber - 1;
                    qry = qry + string.Format(insertRequeuedBlockNumber, blocknumber);
                    blocklimit++;
                }
                qry = qry + string.Format(updateTempBlockNumber, blocknumber);
                qry = "BEGIN TRANSACTION \"" + funName + "\" BEGIN TRY " + qry + " COMMIT TRANSACTION \"" + funName + "\" END TRY BEGIN CATCH ROLLBACK TRANSACTION \"" + funName + "\" END CATCH ";
                du.ExecuteSql(qry);
            }
            catch (Exception ex)
            {
                await PrintException(ex);
            }

        }

        private async Task _runRequeueBlock()
        {

            var methodInfo = System.Reflection.MethodBase.GetCurrentMethod();
            var funName = methodInfo.DeclaringType.Name + "." + methodInfo.Name;
            try
            {
                DataUtility du = new DataUtility((string)_configuration["ConnectionString"]);
                Int64 blocknumber = 0;
                Int64 latestBlockNumber = 0;
                DataTable dt = du.GetDataTable(getRequeuedBlockNumber);
                var qry = " ";
                var wallet = _walletClient.GetProtocol();
                var soliditywallet = _walletClient.GetSolidityProtocol();

                if (dt.Rows.Count > 0)
                {
                    foreach (DataRow dr in dt.Rows)
                    {
                        blocknumber = Int64.Parse(dr.ItemArray[0].ToString());


                        var res1 = Task.Run(async () => await wallet.GetBlockByNum2Async(new NumberMessage() { Num = blocknumber })).Result;
                        var json = System.Text.Json.JsonSerializer.Serialize(res1);
                        json = "{}";

                        qry = qry + string.Format(insertblock, String.Join<byte>("", res1.Blockid), res1.BlockHeader.RawData.Number, res1.BlockHeader.RawData.WitnessAddress.FromByteStringToHex().ToBase58Address(), res1.BlockHeader.RawData.Timestamp, res1.Transactions.Count(), 222, "0", "0", 0, 0, 0, json);
                        qry = qry + string.Format(deleteRequeuedBlockNumber, res1.BlockHeader.RawData.Number);

                    }
                    qry = "BEGIN TRANSACTION \"" + funName + "\" BEGIN TRY " + qry + " COMMIT TRANSACTION \"" + funName + "\" END TRY BEGIN CATCH ROLLBACK TRANSACTION \"" + funName + "\" END CATCH ";
                    du.ExecuteSql(qry);
                }
            }
            catch (Exception ex)
            {
                await PrintException(ex);
            }
        }
        
        private async Task _runBlockInvoker()
        {

            var methodInfo = System.Reflection.MethodBase.GetCurrentMethod();
            var funName = methodInfo.DeclaringType.Name + "." + methodInfo.Name;
            try
            {
                DataUtility du = new DataUtility((string)_configuration["ConnectionString"]);
                Int64 blocknumber = 0;
                Int64 blocklimit = 0;
                Int64 latestBlockNumber = 0;

                var wallet = _walletClient.GetProtocol();
                var soliditywallet = _walletClient.GetSolidityProtocol();

                var s = du.GetScalar(getblocknumber);
                blocknumber = Int64.Parse(s == null ? "5373544" : s.ToString());

                //var testres = Task.Run(async () => await wallet.GetBlockByNum2Async(new NumberMessage() { Num = 41660438 })).Result;

                latestBlockNumber = Task.Run(async () => await wallet.GetNowBlockAsync(new EmptyMessage())).Result.BlockHeader.RawData.Number;
                var GetAccount = Task.Run(async () => await wallet.GetAccountResourceAsync(new Account() { Address = _walletClient.ParseAddress("TCRctCvEse9Y6E6i5DaTjkaSwyKRe6QQP8") })).Result;

                var listofWitness = Task.Run(async () => await wallet.ListWitnessesAsync(new EmptyMessage())).Result;
                var ListNodes = Task.Run(async () => await wallet.ListNodesAsync(new EmptyMessage())).Result;
                var GetAssetIssueList = Task.Run(async () => await wallet.GetAssetIssueListAsync(new EmptyMessage())).Result;
                var GetBlockByLimitNext2 = Task.Run(async () => await wallet.GetBlockByLimitNext2Async(new BlockLimit() { StartNum = latestBlockNumber - 10, EndNum = latestBlockNumber })).Result;
                var TotalTransactionAsync = Task.Run(async () => await wallet.TotalTransactionAsync(new EmptyMessage())).Result;

                var qry = " ";
                while (latestBlockNumber > blocknumber && blocklimit < 100)
                {
                    blocknumber = blocknumber + 1;
                    //var a = _walletClient.ParseAddress("41977f82c69011cf4a7db6f7339edcded85c614d45");
                    var res1 = Task.Run(async () => await wallet.GetBlockByNum2Async(new NumberMessage() { Num = blocknumber })).Result;
                    // var add = _walletClient.ParseAddressBytes(res1.BlockHeader.RawData.WitnessAddress.ToByteArray());

                    var json = System.Text.Json.JsonSerializer.Serialize(res1);
                    json = "{}";
                    //String.Join<byte>("", res.BlockHeader.RawData.ParentHash)

                    qry = qry + string.Format(insertblock, String.Join<byte>("", res1.Blockid), res1.BlockHeader.RawData.Number, res1.BlockHeader.RawData.WitnessAddress.FromByteStringToHex().ToBase58Address(), res1.BlockHeader.RawData.Timestamp, res1.Transactions.Count(), 222, "0", "0", 0, 0, 0, json);
                    qry = qry + string.Format(deleteRequeuedBlockNumber, res1.BlockHeader.RawData.Number);

                    blocklimit++;
                }

                qry = "BEGIN TRANSACTION \"" + funName + "\" BEGIN TRY " + qry + " COMMIT TRANSACTION \"" + funName + "\" END TRY BEGIN CATCH ROLLBACK TRANSACTION \"" + funName + "\" END CATCH ";
                du.ExecuteSql(qry);
            }
            catch (Exception ex)
            {
                await PrintException(ex);
            }

        }
        
        private async Task _runTokenInvoker()
        {

            var methodInfo = System.Reflection.MethodBase.GetCurrentMethod();
            var funName = methodInfo.DeclaringType.Name + "." + methodInfo.Name;
            try
            {
                DataUtility du = new DataUtility((string)_configuration["ConnectionString"]);
                var soliditywallet = _walletClient.GetSolidityProtocol();
                var pglist = new PaginatedMessage()
                {
                    Limit = 50, Offset = 2000
                };
                
                List<Token> tokenlist = new List<Token>(); 
                var paginatedIssue = Task.Run(async () => await soliditywallet.GetPaginatedAssetIssueListAsync(pglist)).Result;
                
                for (int i = 0; i < paginatedIssue.AssetIssue.Count(); i++)
                {
                    var t = paginatedIssue.AssetIssue[0];
                    tokenlist.Add(new Token()
                    {
                        Abbr = System.Text.Encoding.UTF8.GetString(t.Abbr.ToByteArray()),
                        Description = System.Text.Encoding.UTF8.GetString(t.Description.ToByteArray()),
                        EndTime = t.EndTime,
                        FreeAssetNetLimit = t.FreeAssetNetLimit,
                        FrozenSupply = t.FrozenSupply.Count() == 0 ? "0" : t.FrozenSupply.ToString(),
                        Id = t.Id,
                        IsNumber = t.IsNumber(),
                        Name = System.Text.Encoding.UTF8.GetString(t.Name.ToByteArray()),
                        Num = t.Num,
                        order = t.Order,
                        OwnerAddress = t.OwnerAddress.FromByteStringToHex().ToBase58Address(),
                        Precision = t.Precision,
                        PublicFreeAssetNetLimit = t.PublicFreeAssetNetLimit,
                        PublicFreeAssetNetUsage = t.PublicFreeAssetNetUsage,
                        PublicLatestFreeNetTime = t.PublicLatestFreeNetTime,
                        StartTime = t.StartTime,
                        TotalSupply = t.TotalSupply,
                        TrxNum = t.TrxNum,
                        Url = System.Text.Encoding.UTF8.GetString(t.Url.ToByteArray()),
                        VoteScore = t.VoteScore
                    });
                    if (i == 49)
                        i = tokenlist.Count();
                }

                if (tokenlist.Count() > 0)
                {
                    var qry = (string.Format(sp_AddOrUpdateToken, JsonConvert.SerializeObject(tokenlist, Formatting.Indented)));
                    qry = "BEGIN TRANSACTION \"" + funName + "\" BEGIN TRY " + qry + " COMMIT TRANSACTION \"" + funName + "\" END TRY BEGIN CATCH ROLLBACK TRANSACTION \"" + funName + "\" END CATCH ";
                    du.ExecuteSql(qry);
                }

            }
            catch (Exception ex)
            {
                await PrintException(ex);
            }

        }

    }

    public class Token
    {
        public int TrxNum { get; set; }
        public bool IsNumber { get; set; }
        public int Precision { get; set; }

        public string Abbr { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }

        public long StartTime { get; set; }
        public long EndTime { get; set; }
        public long TotalSupply { get; set; }
        public string Url { get; set; }

        public long FreeAssetNetLimit { get; set; }
        public long PublicFreeAssetNetLimit { get; set; }
        public long PublicFreeAssetNetUsage { get; set; }
        public long PublicLatestFreeNetTime { get; set; }

        public string FrozenSupply { get; set; }
        public string Id { get; set; }
        public string OwnerAddress { get; set; }

        public int Num { get; set; }
        public long order { get; set; }
        public int VoteScore { get; set; }



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
}