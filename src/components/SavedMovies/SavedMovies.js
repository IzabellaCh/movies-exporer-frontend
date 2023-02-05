import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { savedMovies } from "../../utils/constants";

function SavedMovies({ loggedIn }) {
  const pageIsMain = false;
  const isSavedMovies = true;

  return (
    <>
      <Header pageIsMain={pageIsMain} loggedIn={loggedIn} />
      <main>
        <SearchForm />
        <MoviesCardList isSavedMovies={isSavedMovies} movies={savedMovies} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
