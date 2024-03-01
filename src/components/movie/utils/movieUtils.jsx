// Предположим, что у вас есть массив объектов фильмов
import courier from '../../../images/courier.jpg'; 
import slevin from '../../../images/slevin.jpg';
const movies = [
    {
      id: 1,
      title: "Курьер",
      description: "Выпускник школы Иван, дожидаясь призыва в армию, работает курьером в редакции. Окружающие его солидные взрослые люди с трудом приспосабливаются к удивительной способности этого парня любое событие превратить в невероятное происшествие - порой уморительно веселое, а, подчас, и непоправимо грустное.",
      poster: courier
    },
    {
      id: 2,
      title: "Счастливое число Слевина",
      description: "Слевину не везет. Дом опечатан, девушка ушла к другому… Его друг Ник уезжает из Нью-Йорка и предлагает Слевину пожить в пустой квартире. В это время крупный криминальный авторитет по прозвищу Босс хочет рассчитаться со своим бывшим партнером за убийство сына и в отместку «заказать» его наследника.",
      poster: slevin
    },
    // Дополнительные фильмы...
  ];
  
  // Функция для получения информации о фильме по его id
  export const getMovieById = (id) => {
    return movies.find(movie => movie.id === parseInt(id));
  }

  export const getMovies = () => {
    return movies;
  }
  