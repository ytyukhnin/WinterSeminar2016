using Microsoft.AspNet.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using React.AspNet;

namespace Web
{
    public class Startup
    {      
        
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddReact();
        }

        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            app.UseIISPlatformHandler();
           
            app.UseDeveloperExceptionPage();

            app.UseMvcWithDefaultRoute();

            app.UseStaticFiles();
            
            //app.UseWelcomePage();
            
            //app.UseRuntimeInfoPage("/info");
            
            // Initialise ReactJS.NET. Must be before static files.
            app.UseReact(config =>
            {
            // If you want to use server-side rendering of React components,
            // add all the necessary JavaScript files here. This includes
            // your components as well as all of their dependencies.
            // See http://reactjs.net/ for more information. Example:
            //config
            //    .AddScript("~/Scripts/First.jsx")
            //    .AddScript("~/Scripts/Second.jsx");

            // If you use an external build too (for example, Babel, Webpack,
            // Browserify or Gulp), you can improve performance by disabling
            // ReactJS.NET's version of Babel and loading the pre-transpiled
            // scripts. Example:
            //config
            //    .SetLoadBabel(false)
            //    .AddScriptWithoutTransform("~/Scripts/bundle.server.js");
            });            
        }
    }
}