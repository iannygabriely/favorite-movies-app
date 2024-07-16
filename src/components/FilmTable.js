import React from 'react';
import FilmRow from './FilmRow';

const FilmTable = ({ films }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {films.map((film) => (
          <FilmRow key={film.id} film={film} />
        ))}
      </tbody>
    </table>
  );
};

export default FilmTable;