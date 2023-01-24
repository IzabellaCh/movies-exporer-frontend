import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  const loggedIn = true;

  return (
    <div className='movies'>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  )
};

export default Movies;