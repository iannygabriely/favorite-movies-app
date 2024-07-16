using Microsoft.EntityFrameworkCore;
using FilmService.Models;

namespace FilmService.Data
{
    public class FilmDbContext : DbContext
    {
        public FilmDbContext(DbContextOptions<FilmDbContext> options) : base(options)
        {
        }

        public DbSet<Film> Films { get; set; }
    }
}