using DotNetCore.AspNetCore;
using DotNetCore.IoC;
using DotNetCoreArchitecture.IoC;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DotNetCoreArchitecture.Web
{
    public class Startup
    {
        public Startup(IHostingEnvironment environment)
        {
            Configuration = environment.Configuration();
            Environment = environment;
        }

        private IConfiguration Configuration { get; }

        private IHostingEnvironment Environment { get; }

        public void Configure(IApplicationBuilder application)
        {
            application.UseExceptionDefault(Environment);
            application.UseAuthentication();
            application.UseCorsDefault();
            application.UseHstsDefault(Environment);
            application.UseHttpsRedirection();
            application.UseResponseCompression();
            application.UseResponseCaching();
            application.UseStaticFiles();
            application.UseMvcWithDefaultRoute();
            application.UseSwaggerDefault("api");
            application.UseSpaStaticFiles();
            application.UseSpaAngularServer(Environment, "Frontend", "serve");
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDependencyInjection(Configuration);
            services.AddAuthenticationDefault();
            services.AddCors();
            services.AddResponseCompressionDefault();
            services.AddResponseCaching();
            services.AddMvcDefault();
            services.AddSwaggerDefault("api");
            services.AddSpaStaticFiles("Frontend/dist");
        }
    }
}
