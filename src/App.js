// App.jsx
import React from 'react';
import Header from './components/header/Header';
import MovieList from './components/movie/MovieList';
import MovieItem from './components/movie/MovieItem';
import Footer from './components/footer/Footer';
import AboutUs from './components/about/AboutUs';
import Dialogs from './components/dialog/Dialogs';
import DialogContent from './components/dialog/DialogContent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getMovies } from './components/movie/utils/movieUtils.jsx';

const App = () => {
  const movies = getMovies();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dialogs" element={<Dialogs />} /> 
        <Route path="/dialogs/:id" element={<DialogContent />} /> 
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/film/:id" element={<MovieItem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


