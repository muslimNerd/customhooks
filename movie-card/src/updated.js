import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Movie = ({ title, description, posterURL, rating, trailerURL }) => (
  <div className="movie-card">
    <img src={posterURL} alt={title} />
    <div className="movie-info">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <Link to={`/movies/${title}`}>Details and Trailer</Link>
    </div>
  </div>
);

const MovieList = ({ movies, filter, setFilter }) => {
  const filteredMovies = movies.filter(movie => {
    if (filter.rating === 0) return movie.title.toLowerCase().includes(filter.title.toLowerCase());
    return movie.title.toLowerCase().includes(filter.title.toLowerCase()) && movie.rating >= filter.rating;
  });

  return (
    <div className="movie-list">
      <Filter filter={filter} setFilter={setFilter} />
      {filteredMovies.map(movie => (
        <Movie key={movie.title} {...movie} />
      ))}
    </div>
  );
};

const Filter = ({ filter, setFilter }) => (
  <div className="filter">
    <input
      type="text"
      placeholder="Filter by title"
      value={filter.title}
      onChange={e => setFilter({ ...filter, title: e.target.value })}
    />
    <select value={filter.rating} onChange={e => setFilter({ ...filter, rating: Number(e.target.value) })}>
      <option value={0}>All</option>
      <option value={1}>1 Star</option>
      <option value={2}>2 Stars</option>
      <option value={3}>3 Stars</option>
      <option value={4}>4 Stars</option>
      <option value={5}>5 Stars</option>
    </select>
  </div>
);

const MovieDetails = ({ movie }) => (
  <div className="movie-details">
    <h2>{movie.title}</h2>
    <p>{movie.description}</p>
    <p>Rating: {movie.rating}</p>
    <iframe title={`Trailer for ${movie.title}`} src={movie.trailerURL} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <Link to="/">Go back</Link>
  </div>
);

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'The Shawshank Redemption', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption
