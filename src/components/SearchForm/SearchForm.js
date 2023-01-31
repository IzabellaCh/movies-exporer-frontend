import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import loupe from "../../images/loupe.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useRef } from "react";

function SearchForm() {
  const inputMovie = useRef();
  const [values, setValues] = useState({ movie: "" });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const focusInput = () => {
    inputMovie.current.focus();
  };

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

  useEffect(() => {
    if (isSubmitted) {
      setValues(() => ({
        movie: "",
      }));
      setIsValid(false);
    }
    return setIsSubmitted(false);
  }, [isSubmitted]);

  return (
    <section className="search-form" aria-label="Строка поиска">
      <div className="search-form__container">
        <img
          className="search-form__loupe link-opacity"
          onClick={focusInput}
          src={loupe}
          alt="Лупа."
        />
        <form className="search-form__form">
          <input
            ref={inputMovie}
            type="text"
            name="movie"
            value={values.movie}
            onChange={onChange}
            className="search-form__input"
            placeholder="Фильм"
            minLength="1"
            maxLength="50"
            required
          ></input>
          <button
            type="submit"
            disabled={!isValid}
            className={`search-form__button-search button-opacity ${
              isValid ? "" : "search-form__button-search_disabled"
            }`}
          ></button>
        </form>
        <div className="search-form__checkbox">
          <FilterCheckbox />
        </div>
      </div>
      <div className="search-form__line"></div>
    </section>
  );
}

export default SearchForm;
