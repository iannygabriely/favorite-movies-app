import React, { useState, useEffect } from 'react';
import FilmForm from '../components/FilmForm';
import FilmTable from '../components/FilmTable';

const App = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('/components/filmApi')
     .then((response) => response.json())
     .then((data) => setFilms(data))
     .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Favorite Movies</h1>
      <FilmForm />
      <FilmTable films={films} />
    </div>
  );
};

export default App;