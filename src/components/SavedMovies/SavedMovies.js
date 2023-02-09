import React, { useState, useMemo, useEffect } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Message from "../Message/Message";
import { filterMovies } from "../../utils/filterMovies.js";

function SavedMovies({ loggedIn, savedMovies, handleDeleteMovie }) {
  const pageIsMain = false;
  const isSavedMovies = true;
  const [searchWordSavedMovies, setSearchWordSavedMovies] = useState("");
  const [isShortFilmSavedMovies, setIsShortFilmSavedMovies] = useState(false);

  // ДЛЯ КОМПОНЕНТА Movies
  // фильтр фильмов
  const filteredMovices = useMemo(() => {
    if (
      searchWordSavedMovies.length === 0 &&
      isShortFilmSavedMovies === false
    ) {
      return savedMovies;
    }
    return filterMovies(
      savedMovies,
      searchWordSavedMovies,
      isShortFilmSavedMovies
    );
  }, [savedMovies, searchWordSavedMovies, isShortFilmSavedMovies]);

  // localStorage.clear();
  // функция проверки на сосответсвие прошлому запросу
  // + получение слова из формы поиска
  const findMovies = (word, setErrors) => {
    // не проводить повторный поиск, если слово совпадает с прошлым поиском
    if (word === searchWordSavedMovies) {
      setErrors((prev) => ({
        ...prev,
        movie: "Вы только что искали этот фильм",
      }));
      return;
    }
    // сохранить искомое слово
    setSearchWordSavedMovies(word);
    localStorage.setItem("searchWordSavedMovies", word);
  };

  // ДЛЯ КОМПОНЕНТА FilterCheckbox
  // изменение состояния чекбокса
  const handleClickCheckbox = (event) => {
    if (event.target.checked) {
      setIsShortFilmSavedMovies(true);
      localStorage.setItem("isShortFilmSavedMovies", true);
    } else {
      setIsShortFilmSavedMovies(false);
      localStorage.setItem("isShortFilmSavedMovies", false);
    }
  };

  // ДЛЯ КОМПОНЕНТА SearchForm
  // подстановка текста в инпут из хранилища при перезагрузке
  const putWordInInput = (setValues) => {
    if (localStorage.getItem("searchWordSavedMovies") !== null) {
      setValues((prev) => ({
        ...prev,
        movie: localStorage.getItem("searchWordSavedMovies"),
      }));
    }
  };

  // ДЛЯ КОМПОНЕНТА MoviesCard
  const handleOnClick = (event, movieInfo, setIsSaved) => {
    event.preventDefault();
    handleDeleteMovie(movieInfo, setIsSaved);
  };

  useEffect(() => {
    // проверка, есть ли в хранилице данные для фильтра фильмов
    // если есть - установка их в стейт при монтировании компонента (на случай перезагрузки страницы)
    if (localStorage.getItem("searchWordSavedMovies") !== null) {
      setSearchWordSavedMovies(localStorage.getItem("searchWordSavedMovies"));
    }

    if (localStorage.getItem("isShortFilmSavedMovies") !== null) {
      if (localStorage.getItem("isShortFilmSavedMovies") === "true") {
        setIsShortFilmSavedMovies(true);
      } else {
        setIsShortFilmSavedMovies(false);
      }
    }
  }, []);

  // localStorage.clear();
  return (
    <>
      <Header pageIsMain={pageIsMain} loggedIn={loggedIn} />
      <main>
        <SearchForm
          findNewMovies={findMovies}
          handleClickCheckbox={handleClickCheckbox}
          handlePutWord={putWordInInput}
          isShortFilm={isShortFilmSavedMovies}
        />
        <Message
          filteredMovices={filteredMovices}
          searchWord={searchWordSavedMovies}
          isSavedMovies={isSavedMovies}
          preloaderIsVisible={false}
        />
        <MoviesCardList
          isSavedMovies={isSavedMovies}
          movies={filteredMovices}
          searchWord={searchWordSavedMovies}
          handleOnClick={handleOnClick}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
