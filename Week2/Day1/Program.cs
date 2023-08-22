using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using MyWebApp.Middleware;
using System.Dynamic;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{

    app.UseExceptionHandler("/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

//app.UseCustomMiddleware();

//app.Use(async (context, next) =>
//{
//    // Do work that can write to the Response.
//    await context.Response.WriteAsync("\nRequesting ... before middleware 1 => ");

//    await next();

//    await context.Response.WriteAsync("responsing ... after middleware 1 =>");
//    // Do logging or other work that doesn't write to the Response.
//});
//app.Use(async (context, next) =>
//{
//    // Do work that can write to the Response.
//    await context.Response.WriteAsync("before middleware 2 => ");

//    await next();

//    await context.Response.WriteAsync("after middleware 2 => ");
//    // Do logging or other work that doesn't write to the Response.
//});


//app.Run(async context =>
//{

//    await context.Response.WriteAsync("middleware 3 run  => ");
//});

app.Run();
