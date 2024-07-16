import React from 'react';
import { updateFilm, deleteFilm } from './filmApi';

const ActionsButtons = ({ film }) => {
  const handleEdit = () => {
    updateFilm(film)
     .then((response) => console.log(response))
     .catch((error) => console.error(error));
  };

  const handleDelete = () => {
    deleteFilm(film.id)
     .then((response) => console.log(response))
     .catch((error) => console.error(error));
  };

  return (
    <div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ActionsButtons;