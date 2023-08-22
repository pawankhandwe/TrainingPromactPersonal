using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BlogSystem.Context;
using BlogSystem.Models;

namespace BlogSystem.Controllers
{
    public class BlogsController : Controller
    {
        private readonly BlogDbContext _context;

        public BlogsController(BlogDbContext context)
        {
            _context = context;
        }

        // GET: Blogs
        public async Task<IActionResult> Index()
        {
     
            var blogs = await _context.Blog.ToListAsync();

            if (blogs.Count == 0)
            {
                ViewData["Message"] = "No blogs are currently available.";
            }

            return View(blogs);
        }

        // GET: Blogs/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            
            var blog = await _context.Blog.FindAsync(id);
            return View(blog);
        
        }

        // GET: Blogs/Create
        public IActionResult Create()
        {
            return View();
        }

        public IActionResult Comment()
        {
            var blogs = _context.Blog.ToList();

            ViewBag.Blogs = new SelectList(blogs, "Id", "Title");

            return View(); 
        }
        public IActionResult FilteredBlogs(int blogid)
        {
            var blog = _context.Blog.FirstOrDefault(p => p.Id == blogid);
            return Json(blog);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Comment(int id, [Bind("Id,Title,Content")] Blog blog)
        {
            if (id != blog.Id)
            {
                return NotFound();
            }
            try
            {
                var existingBlog = await _context.Blog.FindAsync(id);
                

                if (existingBlog != null)
                {
                    existingBlog.Content += "\nCommented: " + blog.Content;

                    var comment = new Comment()
                    {
                        BlogId = id,
                        Content = blog.Content,
                    };

                    _context.Add(comment);
                    _context.SaveChanges();
                    _context.Update(existingBlog);
                    await _context.SaveChangesAsync();
                }
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogExists(blog.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return RedirectToAction(nameof(Index));
        }

        [HttpPost]
        public async Task<IActionResult> Create([Bind("Id,Title,Content")] Blog blog)
        {
          
                _context.Add(blog);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            
            return View(blog);
        }

        public async Task<IActionResult> Edit(int id)
        {
            var blog = await _context.Blog.FindAsync(id);
            return View(blog);
        }



        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Edit(int id, [Bind("Id,Title,Content")] Blog blog)
        //{
        //    if (id != blog.Id)
        //    {
        //        return NotFound();
        //    }
        //    try
        //    {
        //        _context.Update(blog);
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!BlogExists(blog.Id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }
        //    return RedirectToAction(nameof(Index));

        //    return View(blog);
        //}


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Title,Content,RowVersion")] Blog blog)
        {
            if (id != blog.Id)
            {
                return NotFound();
            }

            try
            {
                // Fetch the existing blog from the database
                var existingBlog = await _context.Blog.FindAsync(id);

                if (existingBlog == null)
                {
                    return NotFound();
                }

                // Check if the RowVersion values match to prevent concurrency conflicts
                if (!blog.RowVersion.SequenceEqual(existingBlog.RowVersion))
                {
                    ModelState.AddModelError("RowVersion", "The record you attempted to edit was modified by another user after you received it.");
                    return View(blog);
                }

                // Update the existing blog's properties
                existingBlog.Title = blog.Title;
                existingBlog.Content = blog.Content;

                _context.Update(existingBlog);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogExists(blog.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToAction(nameof(Index));
        }



        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Blog == null)
            {
                return NotFound();
            }

            var blog = await _context.Blog
                .FirstOrDefaultAsync(m => m.Id == id);
            if (blog == null)
            {
                return NotFound();
            }

            return View(blog);
        }

        // POST: Blogs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Blog == null)
            {
                return Problem("Entity set 'BlogDbContext.Blog'  is null.");
            }
            var blog = await _context.Blog.FindAsync(id);
            if (blog != null)
            {
                _context.Blog.Remove(blog);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool BlogExists(int id)
        {
          return (_context.Blog?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
