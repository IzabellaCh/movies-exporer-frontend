import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  const loggedIn = true;
  const isSavedMovies = false;

  return (
    <div className='movies'>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList isSavedMovies={isSavedMovies} />
      <Footer />
    </div>
  )
};

export default Movies;