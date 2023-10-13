using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class TodoItem
    {
        [Key]
        public int Id {get; set;}

        public string Description {get; set;}

        public bool IsDone {get; set;}

        public virtual ICollection<Category> Categories { get; set; }

        public DateTime DueDate {get; set;}

    }

}
