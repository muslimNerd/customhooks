import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, addMovie }) => (
  <div className="movie-list">
    {movies.map((movie, index) => (
      <MovieCard key={index} {...movie} />
    ))}
    <button onClick={addMovie}>Add Movie</button>
  </div>
);

export default MovieList;
