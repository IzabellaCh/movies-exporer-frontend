import React, { useState } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import { allMovies } from "../../utils/constants";
import { findMovies } from "../../utils/findMovies";

function Movies({ allMovies, onGetAllMovies }) {
  const pageIsMain = false;
  const isSavedMovies = false;
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [searchWord, setSearchWord] = useState("");

  const [searchMovies, setSearchMovies] = useState([]);

  const findNewMovies = (searchWord) => {
    if (allMovies.length < 1) {
      onGetAllMovies();
    }
    setSearchMovies(findMovies(allMovies, searchWord));
  };

  // console.log(searchMovies);
  return (
    <>
      <Header pageIsMain={pageIsMain} />
      <main>
        <SearchForm
          findNewMovies={findNewMovies}
          // isSubmitted={isSubmitted}
          // setIsSubmitted={setIsSubmitted}
          // searchWord={searchWord}
          // setSearchWord={setSearchWord}
        />
        <MoviesCardList isSavedMovies={isSavedMovies} movies={searchMovies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
