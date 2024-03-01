// MovieItem.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from './utils/movieUtils'; 
import "./movieItemStyles.css";

const MovieItem = () => {
  const { id } = useParams();
  const movie = getMovieById(id);

  if (movie) {
    const { title, description, poster } = movie;
    return (
      <div className="movie-item">
        <img src={poster} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  } else {
    return (
      <div className="movie-item">
        <p>Фильм с указанным ID не найден</p>
      </div>
    );
  }
}

export default MovieItem;
