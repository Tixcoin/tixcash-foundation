using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.SignalR;
using System.Data;
using System;
using Newtonsoft.Json;

namespace tix_feed.data.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };
        private readonly IHubContext<RFeed> _hubContext;
        private readonly DataUtility _du;
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(IHubContext<RFeed> hubContext, ILogger<WeatherForecastController> logger, IConfiguration configuration)
        {
            _logger = logger; _hubContext = hubContext;
            _du = new DataUtility((string)configuration["ConnectionString"]);
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public virtual async Task<string> Get()
        {
            var qry = " [Explorer_BLOCKS].[dbo].[sp_getTop4Block] ";

            var dt = _du.GetDataTable(qry);
            string json = JsonConvert.SerializeObject(dt, Formatting.Indented);
            await _hubContext.Clients.All.SendAsync("sendflight_if", "tix_block", json.ToString()).ConfigureAwait(false);

            return CustomConnection.primaryClientid;
        }
    }
    public static class CustomConnection
    {
        public static string primaryClientid { get; set; }
    }
    public class RFeed : Hub
    {
        #region Receiving from primary and sending to clients

        public async Task sendflight_if(string message)
        {
            if (CustomConnection.primaryClientid == Context.ConnectionId)
                await Clients.All.SendAsync("flight_if", message);                                 
        }

        public async Task sendflight_txns(int page, string message)
        {
            if (CustomConnection.primaryClientid == Context.ConnectionId)
                await Clients.All.SendAsync("flight_txns_" + page, message);
        }

        public async Task sendflight_AddTxns(string address, int page, string message)
        {
            if (CustomConnection.primaryClientid == Context.ConnectionId)
                await Clients.All.SendAsync("flight_txns_" + address + "_" + page, message);
        }

        public async Task sendflight_AddInternalTxns(string address, int page, string message)
        {
            if (CustomConnection.primaryClientid == Context.ConnectionId)
                await Clients.All.SendAsync("flight_internalTxns_" + address + "_" + page, message);
        }

        public async Task sendflight_bks(int page, string message)
        {
            //if (CustomConnection.primaryClientid == Context.ConnectionId)
                await Clients.All.SendAsync("flight_bks_" + page, message);
        }

        #endregion

        #region Receiving from clients and sending to primary
        public async Task getflight_txns(int page)
        {
            await Clients.Client(CustomConnection.primaryClientid).SendAsync("get_txns", page);
        }

        public async Task getflight_addtxns(int page, string address)
        {
            await Clients.Client(CustomConnection.primaryClientid).SendAsync("get_addtxns",address, page);
        }

        public async Task getflight_addinternalTxns(int page, string address)
        {
            await Clients.Client(CustomConnection.primaryClientid).SendAsync("get_addinternaltxns", address, page);
        }

        public async Task getflight_bks(int page)
        {
            await Clients.Client(CustomConnection.primaryClientid).SendAsync("get_bks", page);
        }
        public async Task getflight_if()
        {
            await Clients.Client(CustomConnection.primaryClientid).SendAsync("get_if");
        }
        #endregion

        public async Task sendTxnFeed(string message)
        {
            //if (CustomConnection.primaryClientid == Context.ConnectionId)
            await Clients.All.SendAsync("txnfeed", message);
        }

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
    public interface IChatClient
    {
        Task ReceiveMessage(string user, string message);
    }
    public class StronglyTypedChatHub : Hub<IChatClient>
    {
        public async Task SendMessage(string user, string message)
            => await Clients.All.ReceiveMessage(user, message);

        public async Task SendMessageToCaller(string user, string message)
            => await Clients.Caller.ReceiveMessage(user, message);

        public async Task SendMessageToGroup(string user, string message)
            => await Clients.Group("SignalR Users").ReceiveMessage(user, message);
    }
}