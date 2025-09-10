using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace tix_feed.data.clientService
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => options.AddPolicy("ApiCorsPolicy", build =>
            {
                var configuration = new ConfigurationBuilder()
                        .SetBasePath(Directory.GetCurrentDirectory())
                        .AddEnvironmentVariables()
                        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                        .Build();

                var origins =  configuration["origins"].Split(',');
                build.WithOrigins(origins)
                     .AllowAnyMethod()
                     .AllowAnyHeader();
            }));
            // ... other code is omitted for the brevity

            services.AddSignalR();
            services.AddHostedService<Worker>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseHttpsRedirection();
            app.UseRouting();               // pre-requisite for app.UseEndpoints()
            app.UseCors(x => x
         .AllowAnyMethod()
         .AllowAnyHeader()
         .SetIsOriginAllowed(origin => true) // allow any origin
         .AllowCredentials()); // allow credentials
                               //app.UseHttpsRedirection();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                string url = $"/transmit";
                endpoints.MapHub<RFeedHub>(url);
            });
        }
    }
}