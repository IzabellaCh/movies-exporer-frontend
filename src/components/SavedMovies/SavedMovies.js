import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../utils/constants';


function SavedMovies() {
  const loggedIn = true;
  const isSavedMovies = true;

  return (
    <div className='movies'>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList isSavedMovies={isSavedMovies} movies={savedMovies} />
      <Footer />
    </div>
  )
};

export default SavedMovies;