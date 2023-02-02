import React, { useState, useMemo } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterMoviesByWord } from "../../utils/filterMovies.js";

function Movies({ allMovies, getAllMovies }) {
  const pageIsMain = false;
  const isSavedMovies = false;
  const [searchWord, setSearchWord] = useState("");

  const filteredMovices = useMemo(() => {
    return filterMoviesByWord(allMovies, searchWord);
  }, [allMovies, searchWord]);

  const findNewMovies = (word) => {
    if (allMovies.length < 1) {
      getAllMovies();
    }
    setSearchWord(word);
  };

  return (
    <>
      <Header pageIsMain={pageIsMain} />
      <main>
        <SearchForm findNewMovies={findNewMovies} />
        <MoviesCardList
          isSavedMovies={isSavedMovies}
          movies={filteredMovices}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
