// import React from 'react';
// import Header from './components/header/Header';
// import MovieList from './components/movie/MovieList';
// import MovieItem from './components/movie/MovieItem';
// import Footer from './components/footer/Footer';
// import { BrowserRouter as Router, Routes , Route } from'react-router-dom';




// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<MovieList />} />
//         <Route path="/film/:id" element={<MovieItem />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


// App.js
import React from 'react';
import Header from './components/header/Header';
import MovieList from './components/movie/MovieList';
import MovieItem from './components/movie/MovieItem';
import Footer from './components/footer/Footer';
import AboutUs from './components/about/AboutUs'; // Импортируем компонент "О нас"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getMovies } from './components/movie/utils/movieUtils.jsx';


const App = () => {
  const movies = getMovies();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/film/:id" element={<MovieItem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

