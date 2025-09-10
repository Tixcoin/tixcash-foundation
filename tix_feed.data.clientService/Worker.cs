using System;
using System.ComponentModel;
using System.Data;
using System.Threading.Tasks;
using System.Windows;
using Microsoft.AspNetCore.SignalR.Client;
using Newtonsoft.Json;
using System.Collections;
using Microsoft.AspNetCore.SignalR;

namespace tix_feed.data.clientService
{
    public class QRequest
    {
        public string method { get; set; }
        public string address { get; set; }
        public int page { get; set; }
    }
    public class Worker : BackgroundService
    {
        private readonly ILogger<Worker> _logger;
        static bool _lockQueue = false;

        private readonly IHubContext<RFeedHub> _signalRHub;
        static bool _lock= false;
        static HubConnection connection;
        static DataTable dtTxn = new DataTable();
        static DataTable dtBks = new DataTable();
        static DataSet dsIndex = new DataSet();
        public static Queue<QRequest> queue = new Queue<QRequest>();
        private static string instance=string.Empty;
        private readonly DataUtility _du;
       


        public Worker(ILogger<Worker> logger, IConfiguration configuration, IHubContext<RFeedHub> signalRHub)
        {
            _signalRHub = signalRHub;
            _logger = logger;
            _du = new DataUtility((string)configuration["ConnectionString"]);

            if (false)
            {
                connection = new HubConnectionBuilder()
                    .WithUrl((string)configuration["SocketURL"], (opts) =>
                    {
                        opts.Headers.Add("puser", "xxx");
                        opts.HttpMessageHandlerFactory = (message) =>
                        {
                            if (message is HttpClientHandler clientHandler)
                                // always verify the SSL certificate
                                clientHandler.ServerCertificateCustomValidationCallback +=
                                    (sender, certificate, chain, sslPolicyErrors) => { return true; };
                            return message;
                        };

                    })
                    .AddMessagePackProtocol()
                    .Build();

                connection.Closed += async (error) =>
                {
                    await Task.Delay(new Random().Next(0, 5) * 1000);
                    await connection.StartAsync();
                };
                instance = (string)configuration["instance"];
                
                InitHub();
            }
        }


        private void InitHub()
        {

           // if (!string.IsNullOrEmpty(instance))
            {
                connection.On<int>("get_txns", (page) =>
                {
                    if (page > 1) queue.Enqueue(new QRequest() { method = "getTxn", page = page });
                });
                connection.On<int>("get_bks", (page) =>
                {
                    if (page > 1) queue.Enqueue(new QRequest() { method = "getBk", page = page });
                });
                queue.Enqueue(new QRequest() { method = "getBk", page = 1 });
                queue.Enqueue(new QRequest() { method = "getTxn", page = 1 });
                queue.Enqueue(new QRequest() { method = "getTransfer", page = 1 });

                connection.On<string>("get_add", (address) =>
                {
                    queue.Enqueue(new QRequest() { method = "getAdd", address = address });
                });
                connection.On<string, int>("get_addtxns", (address, page) =>
                {
                    queue.Enqueue(new QRequest() { method = "getAddTxn", page = page, address = address });
                });
                connection.On<string, int>("get_addinternaltxns", (address, page) =>
                {
                    queue.Enqueue(new QRequest() { method = "getAddInternalTxn", page = page, address = address });
                });

            }
           // else
            {
                connection.On("get_if", () =>
                {
                    queue.Enqueue(new QRequest() { method = "getTop4" });
                });
                queue.Enqueue(new QRequest() { method = "getTop4" });
            }
           
            
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {

            while (!stoppingToken.IsCancellationRequested)
            {
                if (!_lock)
                {
                    _lock = true;
                    _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                    queue.Enqueue(new QRequest() { method = "getTop4" });
                    queue.Enqueue(new QRequest() { method = "getBk", page = 1 });
                    queue.Enqueue(new QRequest() { method = "getTxn", page = 1 });
                    if (false)
                    {
                        if (connection.State == HubConnectionState.Disconnected) await connection.StartAsync();
                        InitHub();
                       
                    }
                    await processQueue();
                    _lock = false;
                    await Task.Delay(1000, stoppingToken);

                }
            }
        }

        protected async Task processQueue()
        {
            if (!_lockQueue && queue.Count() > 0)
            {
                _lockQueue = true;
                try
                {
                    while (queue.Count() > 0)
                    {
                        QRequest qr = queue.Dequeue();

                        if (qr.method == "getTop4")
                            await getTop4();
                        else if (qr.method == "getBk")
                            await getBk(qr.page);
                        else if (qr.method == "getTxn")
                            await getTxn(qr.page);
                        else if (qr.method == "getTransfer")
                            await getTransfer(qr.page);
                        else if (qr.method == "getAddTxn")
                            await getAddTxn(qr.address, qr.page);
                        else if (qr.method == "getAddInternalTxn")
                            await getAddInternalTxn(qr.address, qr.page);
                        else if (qr.method== "getAddTransfer")
                            await getAddTransfer(qr.address, qr.page);
                    }
                }
                catch (Exception ex)
                {
                    PrintException(ex);
                }
                _lockQueue = false;
            }
        }

        protected async Task getTop4()
        {
            try
            {
                dsIndex = _du.GetDataSet("EXEC [Explorer_BLOCKS].[dbo].[sp_getTop4BkTxn] ");

                //if (connection.State == HubConnectionState.Disconnected) await connection.StartAsync();
                string json = "{}";
                if (dsIndex.Tables.Count > 0)
                    json = JsonConvert.SerializeObject(dsIndex, Formatting.Indented);

                await _signalRHub.Clients.All.SendAsync("flight_if", json.ToString());
            }
            catch (Exception ex)
            {
                PrintException(ex);
            }
        }
        protected async Task getBk(int page)
        {
            try
            {
                var dtBks = _du.GetDataTable(" EXEC [Explorer_BLOCKS].[dbo].[sp_GetBksByPageGroup] " + page);
                string json = "{}";
                if (dtBks.Rows.Count > 0)
                    json = JsonConvert.SerializeObject(new { pageindex = dtBks.Rows[0].ItemArray[0].ToString(), total = dtBks.Rows[0].ItemArray[1].ToString(), data = System.Text.Json.Nodes.JsonNode.Parse(dtBks.Rows[0].ItemArray[2].ToString()).ToString() }, Formatting.Indented);

                await _signalRHub.Clients.All.SendAsync("flight_bks_" + page, json.ToString());
            }
            catch (Exception ex)
            {
                PrintException(ex);
            }
        }
        protected async Task getTxn(int page)
        {
            try
            {
                var dtTxn = _du.GetDataTable(" EXEC [Explorer_BLOCKS].[dbo].[sp_GetTxnsByPageGroup] " + page);
                string json = "{}";
                if (dtTxn.Rows.Count > 0)
                    json = JsonConvert.SerializeObject(new { pageindex = dtTxn.Rows[0].ItemArray[0].ToString(),  total = dtTxn.Rows[0].ItemArray[1].ToString(), data =System.Text.Json.Nodes.JsonNode.Parse(dtTxn.Rows[0].ItemArray[2].ToString()).ToString() }, Formatting.Indented);
                await _signalRHub.Clients.All.SendAsync("flight_txns_" + page, json);

            }
            catch (Exception ex)
            {
                PrintException(ex);
            }
        }

        protected async Task getTransfer(int page)
        {
            try
            {
                var dtTxn = _du.GetDataTable(" EXEC [Explorer_BLOCKS].[dbo].[sp_GetTransferByPageGroup] " + page);
                string json = "{}";
                if (dtTxn.Rows.Count > 0)
                    json = JsonConvert.SerializeObject(new { pageindex = dtTxn.Rows[0].ItemArray[0].ToString(), total = dtTxn.Rows[0].ItemArray[1].ToString(), data = System.Text.Json.Nodes.JsonNode.Parse(dtTxn.Rows[0].ItemArray[2].ToString()).ToString() }, Formatting.Indented);
                await _signalRHub.Clients.All.SendAsync("flight_transfer_" + page, json);

            }
            catch (Exception ex)
            {
                PrintException(ex);
            }
        }
        

        private async Task getAddTxn(string address, object page)
        {
            try
            {

                string json = "[]";
                var dtTxn = _du.GetDataTable("EXEC [Explorer_BLOCKS].[dbo].[sp_GetAddressTxnByPage] '" + address + "'," + page);
                if (dtTxn.Rows.Count > 0)
                    json = JsonConvert.SerializeObject(dtTxn, Formatting.Indented);
                await _signalRHub.Clients.All.SendAsync("flight_txns_" + address + "_" + page, json.ToString());

            }
            catch (Exception ex)
            {
                PrintException(ex);
            }
        }
        private async Task getAddInternalTxn(string address, object page)
        {
            try
            {

                string json = "[]";
                var dtTxn = _du.GetDataTable(" EXEC [Explorer_BLOCKS].[dbo].[sp_GetAddressInternalTxnByPage] '" + address + "'," + page);
                if (dtTxn.Rows.Count > 0)
                    json = JsonConvert.SerializeObject(dtTxn, Formatting.Indented);
                await _signalRHub.Clients.All.SendAsync("flight_internalTxns_" + address + "_" + page, json.ToString());

            }
            catch (Exception ex)
            {
                PrintException(ex);
            }
        }
        private async Task getAddTransfer(string address, object page)
        {
            try
            {

                string json = "[]";
                var dtTxn = _du.GetDataTable(" EXEC [Explorer_BLOCKS].[dbo].[sp_GetAddressTransferByPage] '" + address + "'," + page);
                if (dtTxn.Rows.Count > 0)
                    json = JsonConvert.SerializeObject(dtTxn, Formatting.Indented);
                await _signalRHub.Clients.All.SendAsync("flight_transfer_" + address + "_" + page, json.ToString());

            }
            catch (Exception ex)
            {
                PrintException(ex);
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



        protected async Task getTxnBkup(int page)
        {
            try
            {
                if (connection.State == HubConnectionState.Disconnected) await connection.StartAsync();
                var dtTxn = _du.GetDataTable(" EXEC [Explorer_BLOCKS].[dbo].[sp_GetTxnsByPageGroup] " + page);

                // string json = JsonConvert.SerializeObject(_du.GetDataTable(" EXEC [Explorer_BLOCKS].[dbo].[sp_GetTxnsByPageGroup] " + page), Formatting.Indented);
                string json = System.Text.Json.Nodes.JsonNode.Parse(dtTxn.Rows[0].ItemArray[1].ToString()).ToString();
                connection.InvokeAsync("sendflight_txns", page, json);

            }
            catch (Exception ex)
            {
                PrintException(ex);
            }
        }

        protected async Task getTop4bkup()
        {
            try
            {
                dsIndex = _du.GetDataSet("EXEC [Explorer_BLOCKS].[dbo].[sp_getTop4BkTxn] ");

                if (connection.State == HubConnectionState.Disconnected) await connection.StartAsync();

                if (dsIndex.Tables.Count > 0)
                {
                    string json = JsonConvert.SerializeObject(dsIndex, Formatting.Indented);
                    connection.InvokeAsync("sendflight_if", json.ToString());
                }

            }
            catch (Exception ex)
            {
                PrintException(ex);
            }
        }

        protected async Task getBkbkup(int page)
        {
            try
            {
                if (connection.State == HubConnectionState.Disconnected) await connection.StartAsync();
                var dtBks = _du.GetDataTable(" EXEC [Explorer_BLOCKS].[dbo].[sp_GetBksByPageGroup] " + page);

                //string json = JsonConvert.SerializeObject(_du.GetDataTable(" EXEC [Explorer_BLOCKS].[dbo].[sp_GetBksByPageGroup] " + page), Formatting.Indented);
                string json = System.Text.Json.Nodes.JsonNode.Parse(dtBks.Rows[0].ItemArray[1].ToString()).ToString();
                connection.InvokeAsync("sendflight_bks", page, json);

            }
            catch (Exception ex)
            {
                PrintException(ex);
            }
        }

        private async Task getAddTxnBkup(string address, object page)
        {
            try
            {

                if (connection.State == HubConnectionState.Disconnected) await connection.StartAsync();

                string json = JsonConvert.SerializeObject(_du.GetDataTable("EXEC [Explorer_BLOCKS].[dbo].[sp_GetAddressTxnByPage] '" + address + "'," + page), Formatting.Indented);
                connection.InvokeAsync("sendflight_AddTxns", address, page, json.ToString());

            }
            catch (Exception ex)
            {
                PrintException(ex);
            }
        }
        private async Task getAddInternalTxnBkup(string address, object page)
        {
            try
            {

                if (connection.State == HubConnectionState.Disconnected) await connection.StartAsync();

                string json = JsonConvert.SerializeObject(_du.GetDataTable("EXEC [Explorer_BLOCKS].[dbo].[sp_GetAddressInternalTxnByPage] '" + address + "'," + page), Formatting.Indented);
                connection.InvokeAsync("sendflight_AddInternalTxns", address, page, json.ToString());

            }
            catch (Exception ex)
            {
                PrintException(ex);
            }
        }

    }
}