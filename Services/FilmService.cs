using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmService.Models;
using FilmService.Repositories;

namespace FilmService.Services
{
    public class FilmService : IFilmService
    {
        private readonly IFilmRepository _repository;

        public FilmService(IFilmRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Film>> GetFilmsAsync()
        {
            return await _repository.GetFilmsAsync();
        }

        public async Task<Film> GetFilmAsync(int id)
        {
            return await _repository.GetFilmAsync(id);
        }

        public async Task CreateFilmAsync(Film film)
        {
            await _repository.CreateFilmAsync(film);
        }

        public async Task UpdateFilmAsync(Film film)
        {
            await _repository.UpdateFilmAsync(film);
        }

        public async Task DeleteFilmAsync(int id)
        {
            await _repository.DeleteFilmAsync(id);
        }
    }
}