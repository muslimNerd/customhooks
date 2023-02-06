import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => (
  <div className="movie-card">
    <img src={posterURL} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Rating: {rating}</p>
  </div>
);

export default MovieCard;
