import React, { useState } from "react";
import "./SearchForm.css";
import loupe from "../../images/loupe.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useRef } from "react";

function SearchForm({ findNewMovies, setPreloaderIsVisible, setIsShortFilm }) {
  const inputMovie = useRef();
  const [values, setValues] = useState({ movie: "" });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // фокус при нажатии на лупу
  const focusInput = () => {
    inputMovie.current.focus();
  };

  // данные формы и валидация
  const onChange = (event) => {
    const { name, value, validationMessage } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validationMessage,
    }));

    if (event.target.closest("form").checkValidity()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.movie.length === 0) {
      setErrors((prev) => ({
        ...prev,
        movie: "Нужно ввести ключевое слово",
      }));
      return;
    }
    // запуск preloader
    setPreloaderIsVisible(true);
    // вызов запроса фильмов + прокидывание слова для фильтра фильмов в компонент выше
    findNewMovies(values.movie);
  };

  return (
    <section className="search-form" aria-label="Строка поиска">
      <div className="search-form__container">
        <img
          className="search-form__loupe link-opacity"
          onClick={focusInput}
          src={loupe}
          alt="Лупа."
        />
        <form className="search-form__form" onSubmit={handleSubmit} noValidate>
          <label className="search-form__input-container">
            <input
              ref={inputMovie}
              type="text"
              name="movie"
              value={values.movie}
              onChange={onChange}
              className={`search-form__input ${
                errors.movie?.length > 1 ? "search-form__input_type_error" : ""
              }`}
              placeholder="Фильм"
              minLength="1"
              maxLength="50"
              required
            ></input>
            <span
              className={`search-form__input-error ${
                errors.movie?.length > 1
                  ? "search-form__input-error_active"
                  : ""
              }`}
            >
              {errors.movie}
            </span>
          </label>
          <button
            type="submit"
            // disabled={!isValid}
            className={`search-form__button-search button-opacity ${
              isValid ? "" : "search-form__button-search_disabled"
            }`}
          ></button>
        </form>
        <div className="search-form__checkbox">
          <FilterCheckbox setIsShortFilm={setIsShortFilm} />
        </div>
      </div>
      <div className="search-form__line"></div>
    </section>
  );
}

export default SearchForm;
