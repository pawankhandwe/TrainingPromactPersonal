

using Day2Day3.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Immutable;

namespace Day2Day3.Controllers
{
    public class ProductsController : Controller
    {
        public static List<Product> _products = new List<Product>
        {
            new Product { Id = 1, Name = "Product 1", Price = 10.99M },
            new Product { Id = 2, Name = "Product 2", Price = 19.99M },
            // Add more products here
        };
        public IActionResult Index()
        {
            List<Product> products = _products.ToList();
            return View(products);
        }

       


        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Product product)
        {
            if (ModelState.IsValid)
            {
                product.Id++;
                _products.Add(product);
                //return RedirectToAction(nameof(Details), new { id = product.Id });
                return RedirectToAction(nameof(Index));
            }

            return View(product);
        }


        [HttpGet]
        public IActionResult Edit(int id)
        {
            Product product = _products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound(); // Return a 404 status if product not found
            }

            return View(product);

        }

        [HttpPost]
        public IActionResult Edit(Product updatedProduct)
        {
            Product existingProduct = _products.FirstOrDefault(p => p.Id == updatedProduct.Id);
            if (existingProduct == null)
            {
                return NotFound(); // Return a 404 status if product not found
            }

            // Update the existing product's data with the new data
            existingProduct.Name = updatedProduct.Name;
            existingProduct.Price = updatedProduct.Price;

            return RedirectToAction(nameof(Index));
        }

        
     

        [HttpGet]
        public IActionResult Details()
        {
            //return Content("Delete action of Products controller");
            return View();
        }


        [HttpGet]
        public IActionResult Delete()
        {
            return View(_products);
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            Product product = _products.FirstOrDefault(p => p.Id == id);
            if (product != null)
            {
                _products.Remove(product);
            }

            return RedirectToAction(nameof(Index));
        }


    }
}
