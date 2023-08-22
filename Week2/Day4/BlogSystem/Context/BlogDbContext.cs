using Microsoft.EntityFrameworkCore;
using BlogSystem.Models;

namespace BlogSystem.Context
{
    public class BlogDbContext : DbContext
    {
        public BlogDbContext(DbContextOptions options) : base(options)
        {
            ChangeTracker.LazyLoadingEnabled = true;

        }
        public DbSet<BlogSystem.Models.Blog>? Blog { get; set; }
        public DbSet<BlogSystem.Models.Comment>? Comment { get; set; }
    }
}
