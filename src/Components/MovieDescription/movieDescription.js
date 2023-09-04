import React from 'react';
import { Link } from 'react-router-dom';

const MovieDescription = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to={`/trailer/${movie.trailerLink}`}>Watch Trailer</Link>
    </div>
  );
};

export default MovieDescription;
