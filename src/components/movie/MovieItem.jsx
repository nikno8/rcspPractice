import React from 'react';
import "./movieItemStyles.css"

const MovieItem = ({ movie }) => {
  const { title, description, poster } = movie;
  
  return (
    <div className="movie-item">
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default MovieItem;
