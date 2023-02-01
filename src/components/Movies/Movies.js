import React, { useState } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import { allMovies } from "../../utils/constants";

function Movies({ movies, onGetAllMovies }) {
  const pageIsMain = false;
  const isSavedMovies = false;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onGetAllMovies();
    setIsSubmitted(true);
  };

  return (
    <>
      <Header pageIsMain={pageIsMain} />
      <main>
        <SearchForm
          onSubmit={handleSubmit}
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
        <MoviesCardList isSavedMovies={isSavedMovies} movies={movies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
