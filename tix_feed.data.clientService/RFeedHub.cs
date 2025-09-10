using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace tix_feed.data.clientService
{
    public class RFeedHub : Hub
    {
        public ILogger<Worker> _logger = null;

        public RFeedHub(ILogger<Worker> logger)
        {
            _logger = logger;
            //_logger.LogInformation($"{DateTimeOffset.Now} MyHub.Constructor()");

        }
        public async Task ProcessClientMessage(string user, string message)
        {
            // process an incoming message from a connected client
            _logger.LogInformation($"{DateTime.Now.ToString("hh:mm:ss.fff")}  MyHub.ProcessClientMessage({user}, {message})");

        }

        #region Receiving from primary and sending to clients

        /* public async Task sendflight_if(string message)
         {
             //if (CustomConnection.primaryClientid == Context.ConnectionId)
                 await Clients.All.SendAsync("flight_if", message);
         }

         public async Task sendflight_txns(int page, string message)
         {
             //if (CustomConnection.primaryClientid == Context.ConnectionId)
                 await Clients.All.SendAsync("flight_txns_" + page, message);
         }

         public async Task sendflight_AddTxns(string address, int page, string message)
         {
             //if (CustomConnection.primaryClientid == Context.ConnectionId)
                 await Clients.All.SendAsync("flight_txns_" + address + "_" + page, message);
         }

         public async Task sendflight_AddInternalTxns(string address, int page, string message)
         {
             //if (CustomConnection.primaryClientid == Context.ConnectionId)
                 await Clients.All.SendAsync("flight_internalTxns_" + address + "_" + page, message);
         }

         public async Task sendflight_bks(int page, string message)
         {
             //if (CustomConnection.primaryClientid == Context.ConnectionId)
             await Clients.All.SendAsync("flight_bks_" + page, message);
         }
        */
        #endregion

        #region Receiving from clients and sending to primary
        public async Task getflight_if()
        {
            Worker.queue.Enqueue(new QRequest() { method = "getTop4" });
            //await Clients.Client("").SendAsync("get_if");
        }
        public async Task getflight_bks(int page)
        {
            Worker.queue.Enqueue(new QRequest() { method = "getBk", page = page });
            //await Clients.Client("").SendAsync("get_bks", page);
        }
        public async Task getflight_txns(int page)
        {
            Worker.queue.Enqueue(new QRequest() { method = "getTxn", page = page });
            //await Clients.All.SendAsync("get_txns", page);
        }
        public async Task getflight_transfer(int page)
        {
            Worker.queue.Enqueue(new QRequest() { method = "getTransfer", page = page });
            //await Clients.All.SendAsync("get_txns", page);
        }
        
        public async Task getflight_addtxns(int page, string address)
        {
            Worker.queue.Enqueue(new QRequest() { method = "getAddTxn", page = page, address = address });
            //await Clients.Client("").SendAsync("get_addtxns", address, page);
        }

        public async Task getflight_addinternalTxns(int page, string address)
        {
            Worker.queue.Enqueue(new QRequest() { method = "getAddInternalTxn", page = page, address = address });
            // await Clients.Client("").SendAsync("get_addinternaltxns", address, page);
        }
        public async Task getflight_addTransfer(int page, string address)
        {
            Worker.queue.Enqueue(new QRequest() { method = "getAddTransfer", page = page, address = address });
            // await Clients.Client("").SendAsync("get_addinternaltxns", address, page);
        }
        
       
        #endregion

        //public async Task sendTxnFeed(string message)
        //{
        //    //if (CustomConnection.primaryClientid == Context.ConnectionId)
        //    await Clients.All.SendAsync("txnfeed", message);
        //}

        public override async Task OnConnectedAsync()
        {
            //if (Context.GetHttpContext().Request.Headers.Any(a => a.Key == "puser"))
            //    CustomConnection.primaryClientid = Context.ConnectionId;

            //CustomConnection.id = primaryClient;

            //string value = !string.IsNullOrEmpty(group.ToString()) ? group.ToString() : "default";

            // await Groups.AddToGroupAsync(Context.ConnectionId, value);
            await base.OnConnectedAsync();
        }
    }
}