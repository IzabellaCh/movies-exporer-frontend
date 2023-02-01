import React, { useState, useEffect } from "react";
import "./MoviesCard.css";

function MoviesCard({ isSavedMovies, info }) {
  const [isSaved, setIsSaved] = useState(false);
  const [minutes, setMinutes] = useState("");

  const saveMovie = () => {
    setIsSaved(!isSaved);
  };

  const deleteMovie = () => {};

  useEffect(() => {
    let n = Math.abs(info.duration) % 100;
    let n1 = info.duration % 10;

    if (n > 10 && n < 20) {
      setMinutes(" минут");
    } else if (n1 > 1 && n1 < 5) {
      setMinutes(" минуты");
    } else if (n1 === 1) {
      setMinutes(" минута");
    } else setMinutes(" минут");
  }, [info]);

  return (
    <div className="movie-card">
      <div className="movie-card__info">
        <p className="movie-card__name">{info.nameRU}</p>
        <p className="movie-card__duration">{`${info.duration} ${minutes}`}</p>
      </div>
      <img
        src={
          isSavedMovies
            ? info.image
            : `https://api.nomoreparties.co/${info.image.url}`
        }
        alt="Постер фильма."
        className="movie-card__image"
      />
      {!isSavedMovies && (
        <button
          onClick={saveMovie}
          className={`movie-card__button button-opacity ${
            isSaved
              ? "movie-card__button_type_is-saved"
              : "movie-card__button_type_save"
          } `}
        >
          {isSaved ? "" : "Сохранить"}
        </button>
      )}
      {isSavedMovies && (
        <button
          onClick={deleteMovie}
          className="movie-card__button movie-card__button_type_delete button-opacity"
        ></button>
      )}
    </div>
  );
}

export default MoviesCard;
