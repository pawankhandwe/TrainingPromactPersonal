using System.ComponentModel.DataAnnotations;

namespace BlogSystem.Models
{
    public class Blog
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
        [Timestamp]
        public byte[] RowVersion { get; set; }
        // Navigation property for the associated Comments
        public ICollection<Comment> Comments { get; set; }
    }
}
