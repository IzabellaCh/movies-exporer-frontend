import React, { useState, useMemo, useEffect } from "react";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Message from "../Message/Message";
import { filterMovies } from "../../utils/filterMovies.js";

function Movies({
  allMovies,
  getAllMovies,
  setAllMovies,
  loggedIn,
  handleSaveMovie,
  savedMovies,
  handleDeleteMovie,
}) {
  const pageIsMain = false;
  const isSavedMovies = false;
  const [searchWord, setSearchWord] = useState("");
  const [preloaderIsVisible, setPreloaderIsVisible] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);

  // фильтр фильмов
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
    localStorage.setItem("searchWord", word);
  };
  // localStorage.clear();

  // изменение состояния чекбокса
  const handleClickCheckbox = (event) => {
    if (event.target.checked) {
      setIsShortFilm(true);
      localStorage.setItem("isShortFilm", true);
    } else {
      setIsShortFilm(false);
      localStorage.setItem("isShortFilm", false);
    }
  };

  // подстановка текста в инпут из хранилища при перезагрузке
  const putWordInInput = (setValues) => {
    if (localStorage.getItem("searchWord") !== null) {
      setValues((prev) => ({
        ...prev,
        movie: localStorage.getItem("searchWord"),
      }));
    }
  };

  useEffect(() => {
    // проверка, есть ли в хранилице данные для фильтра фильмов
    // если есть - установка их в стейт при монтировании компонента (на случай перезагрузки страницы)
    if (localStorage.getItem("searchWord") !== null) {
      setSearchWord(localStorage.getItem("searchWord"));
    }

    if (localStorage.getItem("isShortFilm") !== null) {
      // setIsShortFilm(localStorage.getItem("isShortFilm"));
      if (localStorage.getItem("isShortFilm") === "true") {
        setIsShortFilm(true);
      } else {
        setIsShortFilm(false);
      }
    }

    if (localStorage.getItem("allMovies") !== null) {
      setAllMovies(JSON.parse(localStorage.getItem("allMovies")));
    }
  }, [setAllMovies]);

  return (
    <>
      <Header pageIsMain={pageIsMain} loggedIn={loggedIn} />
      <main>
        <SearchForm
          findNewMovies={findNewMovies}
          handleClickCheckbox={handleClickCheckbox}
          handlePutWord={putWordInInput}
          isShortFilm={isShortFilm}
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
          handleSaveMovie={handleSaveMovie}
          savedMovies={savedMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
