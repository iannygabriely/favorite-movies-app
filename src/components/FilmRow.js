import React from 'react';
import ActionsButtons from './ActionsButtons';

const FilmRow = ({ film }) => {
  return (
    <tr>
      <td>{film.title}</td>
      <td>{film.director}</td>
      <td>
        <ActionsButtons film={film} />
      </td>
    </tr>
  );
};

export default FilmRow;