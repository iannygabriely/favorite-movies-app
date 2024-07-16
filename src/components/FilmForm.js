import React, { useState } from 'react';
import { addFilm } from './filmApi';

const FilmForm = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const film = { title, director };
    addFilm(film)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        Director:
        <input type="text" value={director} onChange={(event) => setDirector(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Film</button>
    </form>
  );
};

export default FilmForm;