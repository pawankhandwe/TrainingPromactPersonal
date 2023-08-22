using Microsoft.AspNetCore.Mvc;

[Route("products")]
public class ProductsController : Controller
{


    [Route("")] // Route: /api/products

    public IActionResult  Index()
    {

        return Content("products are here !"); // Return products as JSON
    }

    [HttpGet("{id}")] // Route: /api/products/{id}
    public IActionResult actionResult(int id)
    {


        return Content("id pf product is " + id); // Return product as JSON
    }

    /*[HttpGet("{id}/reviews")]*/ // Route: /api/products/{id}/reviews
                              //public IActionResult actionResult()
                              //{


    //    return Content("this is review page "); // Return reviews as JSON
    //}
}
