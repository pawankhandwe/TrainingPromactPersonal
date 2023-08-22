using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace MyWebApp.Middleware
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public  class CustomMiddleware
    {
        private readonly RequestDelegate _next;

        public CustomMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public Task  Invoke(HttpContext httpContext)
        {
            httpContext.Response.WriteAsync("custom middleware !");
            httpContext.Response.WriteAsync("\nrequest:- " + httpContext.Request.Method);
            httpContext.Response.WriteAsync("\nresponse status code :- " + httpContext.Response.StatusCode);
            //you can write to check authentication also 
            Console.WriteLine("request:- " + httpContext.Request.Method);
            Console.WriteLine("response status code :- " + httpContext.Response.StatusCode);

            return _next(httpContext);
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class CustomMiddlewareExtensions
    {
        public static IApplicationBuilder UseCustomMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<CustomMiddleware>();
        }
    }
}
