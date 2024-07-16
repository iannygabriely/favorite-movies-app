using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmService.Models;
using FilmService.Data;

namespace FilmService.Repositories
{
    public class FilmRepository : IFilmRepository
    {
        private readonly FilmDbContext _context;

        public FilmRepository(FilmDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Film>> GetFilmsAsync()
        {
            return await _context.Films.ToListAsync();
        }

        public async Task<Film> GetFilmAsync(int id)
        {
            return await _context.Films.FindAsync(id);
        }

        public async Task CreateFilmAsync(Film film)
        {
            _context.Films.Add(film);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateFilmAsync(Film film)
        {
            _context.Entry(film).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteFilmAsync(int id)
        {
            var film = await _context.Films.FindAsync(id);
            if (film != null)
            {
                _context.Films.Remove(film);
                await _context.SaveChangesAsync();
            }
        }
    }
}