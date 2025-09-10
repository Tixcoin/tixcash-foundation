using MessagePack;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SignalR;
using tix_feed.data.clientService;

IHost host = Host.CreateDefaultBuilder(args)
     .UseWindowsService(option =>
     {
         option.ServiceName = "Service name";
     }).ConfigureWebHostDefaults(webBuilder =>
     {
         var configuration = new ConfigurationBuilder()
                        .SetBasePath(Directory.GetCurrentDirectory())
                        .AddEnvironmentVariables()
                        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                        .AddCommandLine(args)
                        .Build();

         webBuilder.UseStartup<Startup>();
         webBuilder.UseUrls(configuration["UseUrls"]); 
     })
    .ConfigureServices((hostContext, services) =>
    {
        
        var origins = hostContext.Configuration["origins"].Split(',');
        services.AddCors(options => options.AddPolicy("ApiCorsPolicy", build =>
        {
            build.WithOrigins(origins)
                 .AllowAnyMethod()
                 .AllowAnyHeader();
        }));
        services.AddHostedService<Worker>();
        services.Configure<HubOptions>(options =>
        {
            options.MaximumReceiveMessageSize = null;
        });
        services.AddSignalR();
        services.AddSignalR(o =>
        {
            o.EnableDetailedErrors = true;
        });
        services.AddSignalR().AddMessagePackProtocol();
    })
    .Build();

await host.RunAsync();
