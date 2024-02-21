import React from 'react';
import Header from './components/header/Header';
import MovieList from './components/movie/MovieList';
import Footer from './components/footer/Footer';



import courier from './images/courier.jpg'; 
import slevin from './images/slevin.jpg';

const movies = [
  {
    id: 1,
    title: "Курьер",
    description: "Выпускник школы Иван, дожидаясь призыва в армию, работает курьером в редакции. Окружающие его солидные взрослые люди с трудом приспосабливаются к удивительной способности этого парня любое событие превратить в невероятное происшествие - порой уморительно веселое, а, подчас, и непоправимо грустное.",
    // poster: "https://images.kinorium.com/movie/poster/83880/w1500_40900617.jpg"
    poster:courier
  },
  {
    id: 2,
    title: "Счастливое число Слевина",
    description: "Слевину не везет. Дом опечатан, девушка ушла к другому… Его друг Ник уезжает из Нью-Йорка и предлагает Слевину пожить в пустой квартире. В это время крупный криминальный авторитет по прозвищу Босс хочет рассчитаться со своим бывшим партнером за убийство сына и в отместку «заказать» его наследника.",
    // poster: "http://images-s.kinorium.com/movie/poster/324237/w1500_50307781.jpg"
    poster:slevin
  },
  // Дополнительные фильмы...
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <MovieList movies={movies} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
