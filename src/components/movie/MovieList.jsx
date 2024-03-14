
import React from 'react';
import "./movieListStyles.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <img src={movie.poster} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
