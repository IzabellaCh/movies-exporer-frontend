import React, { useState, useMemo } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Message from "../Message/Message";
import { filterMovies } from "../../utils/filterMovies.js";

function Movies({ allMovies, getAllMovies }) {
  const pageIsMain = false;
  const isSavedMovies = false;
  const [searchWord, setSearchWord] = useState("");
  const [preloaderIsVisible, setPreloaderIsVisible] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);

  // функция фильтра фильмов
  const filteredMovices = useMemo(() => {
    return filterMovies(allMovies, searchWord, isShortFilm);
  }, [allMovies, searchWord, isShortFilm]);

  // функция проверки и отправления запроса к массиву фильмов (там же preloader)
  // + получение слова из формы поиска
  const findNewMovies = (word, setErrors) => {
    // не проводить повторный поиск, если слово совпадает с прошлым поиском
    if (word === searchWord) {
      setErrors((prev) => ({
        ...prev,
        movie: "Вы только что искали этот фильм",
      }));
      return;
    }

    // если запроса к стороннему api не было (нет сохраненного массива с фильмами) - провести + прелоадер в finally
    if (allMovies.length < 1) {
      getAllMovies(setPreloaderIsVisible);
    }

    // сохранить искомое слово
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
        <Message
          filteredMovices={filteredMovices}
          searchWord={searchWord}
          preloaderIsVisible={preloaderIsVisible}
        />
        <MoviesCardList
          isSavedMovies={isSavedMovies}
          movies={filteredMovices}
          searchWord={searchWord}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
