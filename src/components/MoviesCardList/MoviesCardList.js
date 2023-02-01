import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ isSavedMovies, movies }) {
  return (
    <section
      className={`${
        movies ? "movies-card-list" : "movies-card-list_type_hidden"
      } ${isSavedMovies ? "movies-card-list_type_saved-movies" : ""} `}
      aria-label="Список фильмов"
    >
      <div className="movies-card-list__elements">
        {movies.map((item) => (
          <MoviesCard info={item} key={item.id} isSavedMovies={isSavedMovies} />
        ))}
      </div>
      {!isSavedMovies && (
        <button className="movies-card-list__button-add-movies button-opacity">
          Ещё
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
