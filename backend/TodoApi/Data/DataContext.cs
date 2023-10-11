using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options)
        {}

        public DbSet<TodoItem> TodoItemsT {get; set;}

        public DbSet<Category> CategoriesT {get; set;}

    }

}