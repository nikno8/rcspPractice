// MovieReviewSiteAbout.js
import React from 'react';
import './aboutUsStyles.css'; // Импорт стилей

const MovieReviewSiteAbout = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">О сайте</h2>
      <p className="about-description">
        Добро пожаловать на мой сайт для написания рецензий на фильмы! Здесь вы можете делиться своими мыслями и впечатлениями о последних кинокартинах.
      </p>
      <p className="about-description">
        Моя цель - предоставить уютное и приятное место для обсуждения фильмов и выражения своего мнения. Присоединяйтесь к нам!
      </p>
    </div>
  );
}

export default MovieReviewSiteAbout;
