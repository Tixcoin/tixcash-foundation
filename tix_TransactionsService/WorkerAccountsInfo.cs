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
using System.Globalization;

namespace tix_TransactionsService
{
    public class WorkerAcctsInfo : BackgroundService
    {
        private readonly ILogger<WorkerAcctsInfo> _logger;
        private readonly IConfiguration _configuration;

        private readonly ITronClient _tronClient;
        private readonly IGrpcChannelClient channelClient;
        private readonly IWalletClient _walletClient;
        private readonly IOptions<TronNetOptions> _options;
        private readonly ITransactionClient _transactionClient;

        static string getAccounts = "SELECT TOP 20 [id],[acctId],[account],[txhBalance],[percentage],[txhPower],[txnCount],[age] FROM [Explorer_BLOCKS].[dbo].[Accounts] WITH (NOLOCK) Where  ISNULL(isEval,0)=0 order by acctId";

        //static string resetAccount = "UPDATE [Explorer_BLOCKS].[dbo].[Accounts] SET isEval=0; ";

        static string updateAccount = "UPDATE [Explorer_BLOCKS].[dbo].[Accounts] SET txhBalance={1},percentage={2},isEval=1  Where acctId = {0} AND  ISNULL(isEval,0)=0; ";

        static bool _lock = false;

        public WorkerAcctsInfo(ILogger<WorkerAcctsInfo> logger, IConfiguration configuration, ITronClient tronClient, IOptions<TronNetOptions> options, IGrpcChannelClient channelClient, IWalletClient walletClient, ITransactionClient transactionClient)
        {

            _configuration = configuration;
            _logger = logger;
            _walletClient = walletClient;
            _options = options;
            _tronClient = tronClient;
            _transactionClient = transactionClient;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            if (!_lock)
                while (!stoppingToken.IsCancellationRequested)
                {
                    _lock = true;
                    _logger.LogInformation("WorkerAccountsInfo running at: {time}", DateTimeOffset.Now);
                    await _runAcctInvoker();
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
                string filepath = AppDomain.CurrentDomain.BaseDirectory + "\\Logs\\InvokerServiceLog_" + DateTime.Now.Date.ToShortDateString().Replace('/', '_') + ".txt";
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
        private async Task _runAcctInvoker()
        {
            var methodInfo = System.Reflection.MethodBase.GetCurrentMethod();
            var funName = methodInfo.DeclaringType.Name + "." + methodInfo.Name;

            var wallet = _walletClient.GetProtocol();
            var walletSolidity = _walletClient.GetSolidityProtocol();
            try
            {
                var qry = string.Empty;
                decimal bal = 0, per = 0;

                DataUtility du = new DataUtility((string)_configuration["ConnectionString"]);
                var dt = du.GetDataTable(getAccounts);

                // if (dt.Rows.Count > 0)
                //  {
                foreach (DataRow item in dt.Rows)
                {
                    var address = item.ItemArray[2].ToString();
                    var acctid = item.ItemArray[1].ToString();

                    var GetAccount = Task.Run(async () => await wallet.GetAccountAsync(new Account() { Address = _walletClient.ParseAddress(address) })).Result;
                    bal = Convert.ToDecimal(GetAccount.Balance) / 1000000M;
                    per = Math.Round(Convert.ToDecimal(bal / 100000000000M), 2);

                    qry = qry + string.Format(updateAccount, acctid, bal, per);
                }
                //  }
                //else qry = resetAccount; 

                qry = "BEGIN TRANSACTION \"" + funName + "\" BEGIN TRY " + qry + " COMMIT TRANSACTION \"" + funName + "\" END TRY BEGIN CATCH ROLLBACK TRANSACTION \"" + funName + "\" END CATCH ";
                du.ExecuteSql(qry);

            }
            catch (Exception ex)
            {
                await PrintException(ex);
            }
        }

    }

}