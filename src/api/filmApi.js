const baseUrl = 'http://localhost:5000/api';

export const getFilms = () => fetch(`${baseUrl}/films`).then((response) => response.json());

export const addFilm = (film) => fetch(`${baseUrl}/films`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(film),
}).then((response) => response.json());

export const updateFilm = (film) => fetch(`${baseUrl}/films/${film.id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(film),
}).then((response) => response.json());

export const deleteFilm = (id) => fetch(`${baseUrl}/films/${id}`, {
  method: 'DELETE',
}).then((response) => response.json());