using tix_TransactionsService;
using Google.Api;
using Microsoft.Extensions.Configuration;
using TronNet;
using static TronNet.Protocol.Wallet;

IHost host = Host.CreateDefaultBuilder(args)
    .UseWindowsService(option =>
    {
        option.ServiceName = "Service name";
    })
    .ConfigureServices((config, services) =>
    {
        services.AddHostedService<Worker>();
        services.AddHostedService<WorkerAcctsInfo>();
        services.AddTronNet(x =>
        {
            //x.Network = TronNetwork.MainNet;
            x.Channel = new GrpcChannelOption { Host = config.Configuration["ChannelHost"], Port = Int32.Parse(config.Configuration["ChannelPort"].ToString()) };
            x.SolidityChannel = new GrpcChannelOption { Host = config.Configuration["SolidityChannelHost"], Port = Int32.Parse(config.Configuration["SolidityChannelPort"].ToString()) };

            //x.Channel = new GrpcChannelOption { Host = "162.0.226.63", Port = 16669 };
            //x.SolidityChannel = new GrpcChannelOption { Host = "162.0.226.63", Port = 16669 };
            x.ApiKey = "";
        });


    })
    .Build();

await host.RunAsync();
