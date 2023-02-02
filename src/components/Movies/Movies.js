import React, { useState, useMemo } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { filterMovies } from "../../utils/filterMovies.js";

function Movies({ allMovies, getAllMovies }) {
  const pageIsMain = false;
  const isSavedMovies = false;
  const [searchWord, setSearchWord] = useState("");
  const [preloaderIsVisible, setPreloaderIsVisible] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);

  const filteredMovices = useMemo(() => {
    // setPreloaderIsVisible(false);
    return filterMovies(
      allMovies,
      searchWord,
      isShortFilm,
      setPreloaderIsVisible
    );
  }, [allMovies, searchWord, isShortFilm]);

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
        <SearchForm
          findNewMovies={findNewMovies}
          setPreloaderIsVisible={setPreloaderIsVisible}
          setIsShortFilm={setIsShortFilm}
        />
        <Preloader isVisible={preloaderIsVisible} />
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
