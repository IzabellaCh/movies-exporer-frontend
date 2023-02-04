import React, { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isSavedMovies, movies }) {
  // количество видимых фильмов на странице
  const [numberOfVisibleMovies, setNumberOfVisibleMovies] = useState(0);

  const addMovies = () => {
    if (window.innerWidth > 1272) {
      setNumberOfVisibleMovies(numberOfVisibleMovies + 3);
    } else {
      setNumberOfVisibleMovies(numberOfVisibleMovies + 2);
    }
  };

  // расчет первоначального количества видимых фильмов на странице
  useEffect(() => {
    if (window.innerWidth > 1272) {
      setNumberOfVisibleMovies(12);
    } else if (window.innerWidth > 631 && window.innerWidth < 1273) {
      setNumberOfVisibleMovies(8);
    } else {
      setNumberOfVisibleMovies(5);
    }
  }, []);

  useEffect(() => {});

  return (
    <section
      className={`${
        movies.length > 0 ? "movies-card-list" : "movies-card-list_type_hidden"
      } ${isSavedMovies ? "movies-card-list_type_saved-movies" : ""} `}
      aria-label="Список фильмов"
    >
      <div className="movies-card-list__elements">
        {!isSavedMovies &&
          movies
            .slice(0, numberOfVisibleMovies)
            .map((item) => (
              <MoviesCard
                info={item}
                key={item.id}
                isSavedMovies={isSavedMovies}
              />
            ))}
        {isSavedMovies &&
          movies.map((item) => (
            <MoviesCard
              info={item}
              key={item.id}
              isSavedMovies={isSavedMovies}
            />
          ))}
      </div>
      {!isSavedMovies && (
        <button
          onClick={addMovies}
          className="movies-card-list__button-add-movies button-opacity"
        >
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
