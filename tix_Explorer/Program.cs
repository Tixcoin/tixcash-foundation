using TronNet;
using static Org.BouncyCastle.Math.EC.ECCurve;

var builder = WebApplication.CreateBuilder(args);
var provider = builder.Services.BuildServiceProvider();
var _configuration = provider.GetRequiredService<IConfiguration>();
// Add services to the container.

builder.Services.AddControllersWithViews();

builder.Services.AddTronNet(x =>
{
    //x.Network = TronNetwork.MainNet;
    x.Channel = new GrpcChannelOption { Host = _configuration.GetValue<string>("ChannelHost"), Port = Int32.Parse(_configuration.GetValue<string>("ChannelPort")) }; 
    x.SolidityChannel = new GrpcChannelOption { Host = _configuration.GetValue<string>("SolidityChannelHost"), Port = Int32.Parse(_configuration.GetValue<string>("SolidityChannelPort"))};

    //x.Channel = new GrpcChannelOption { Host = "162.0.226.63", Port = 16669 };
    //x.SolidityChannel = new GrpcChannelOption { Host = "162.0.226.63", Port = 16669 };
    x.ApiKey = "";
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
