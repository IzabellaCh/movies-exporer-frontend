import React, { useState, useMemo } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Message from "../Message/Message";
import { filterMovies } from "../../utils/filterMovies.js";

function SavedMovies({ loggedIn, savedMovies }) {
  const pageIsMain = false;
  const isSavedMovies = true;
  const [searchWordSavedMovies, setSearchWordSavedMovies] = useState("");
  const [isShortFilmSavedMovies, setIsShortFilmSavedMovies] = useState(false);

  // фильтр фильмов
  const filteredMovices = useMemo(() => {
    return filterMovies(
      savedMovies,
      searchWordSavedMovies,
      isShortFilmSavedMovies
    );
  }, [savedMovies, searchWordSavedMovies, isShortFilmSavedMovies]);

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

  // подстановка текста в инпут из хранилища при перезагрузке
  const putWordInInput = (setValues) => {
    if (localStorage.getItem("searchWordSavedMovies") !== null) {
      setValues((prev) => ({
        ...prev,
        movie: localStorage.getItem("searchWordSavedMovies"),
      }));
    }
  };

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
        />
        <MoviesCardList
          isSavedMovies={isSavedMovies}
          movies={savedMovies}
          searchWord={searchWordSavedMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
