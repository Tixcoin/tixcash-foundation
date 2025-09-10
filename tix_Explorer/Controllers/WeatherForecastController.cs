using Google.Protobuf.WellKnownTypes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using TronNet;
using TronNet.Protocol;
using static TronNet.Protocol.Wallet;

namespace tix_Explorer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IConfiguration _configuration;
        private readonly ITronClient _tronClient;
        private readonly IGrpcChannelClient channelClient;
        private readonly IWalletClient _walletClient;
        private readonly IOptions<TronNetOptions> _options;


        public WeatherForecastController(ILogger<WeatherForecastController> logger, IConfiguration configuration, ITronClient tronClient, IOptions<TronNetOptions> options, IGrpcChannelClient channelClient, IWalletClient walletClient)
        {
            _configuration = configuration;
            _logger = logger;
            _walletClient = walletClient;
            _options = options;
            _tronClient = tronClient;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet("GetAddressDetails", Name = "GetAddressDetails")]
        public object GetAddressDetails(string add)
        {
            try {
              //  add = "TCRctCvEse9Y6E6i5DaTjkaSwyKRe6QQP8";
                var wallet = _walletClient.GetProtocol();
                var addressBytes = _walletClient.ParseAddress(add);
                var GetAccount = Task.Run(async () => await wallet.GetAccountAsync(new Account() { Address = addressBytes })).Result;
                var GetAccountResource = Task.Run(async () => await wallet.GetAccountResourceAsync(new Account() { Address = addressBytes })).Result;
                var accct = new AccountIdentifier() { Address = addressBytes };
                //var accBalRequest = new AccountBalanceRequest()
                //var GetAccountBalanceAsync = Task.Run(async () => await wallet.GetAccountBalanceAsync(new AccountBalanceRequest() { AccountIdentifier = accct, }));
                var json = System.Text.Json.JsonSerializer.Serialize(new { GetAccount = GetAccount, GetAccountResource = GetAccountResource });
                return json;
            }
            catch (Exception ex) {
                return new { };

            }

            //var res = Task.Run(async () => await wallet.GetNowBlock2Async(new EmptyMessage())).Result;
        }

    }
}