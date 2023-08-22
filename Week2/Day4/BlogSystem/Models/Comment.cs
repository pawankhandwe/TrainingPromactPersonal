namespace BlogSystem.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public int BlogId { get; set; }

        // Navigation property for the associated Blog
        public Blog Blog { get; set; }
    }
}
