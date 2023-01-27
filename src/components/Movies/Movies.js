import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { allMovies } from '../../utils/constants';


function Movies() {
  const pageIsMain = false;
  const isSavedMovies = false;

  return (
    <div className='movies'>
      <Header pageIsMain={pageIsMain} />
      <SearchForm />
      <MoviesCardList isSavedMovies={isSavedMovies} movies={allMovies} />
      <Footer />
    </div>
  )
};

export default Movies;