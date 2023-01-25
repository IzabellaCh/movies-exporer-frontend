import React, { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ isSavedMovies, info }) {
  const [isSaved, setIsSaved] = useState(false);
  
  const saveMovie = () => {
    setIsSaved(!isSaved);
  }

  const deleteMovie = () => {}
  
  return (
    <div className='movie-card'>
      <div className='movie-card__info'>
        <p className='movie-card__name'>{info.nameRU}</p>
        <p className='movie-card__duration'>{info.duration} минут</p>
      </div>
      <img src={info.image.formats.small.url} alt='Постер фильма.' className='movie-card__image'/>
      {!isSavedMovies && (
        <button onClick={saveMovie} className={`movie-card__button button-opacity ${isSaved? 'movie-card__button_type_is-saved' : 'movie-card__button_type_save'} `}>{isSaved? '' : 'Сохранить' }</button>
      )}
      {isSavedMovies && (
        <button onClick={deleteMovie} className='movie-card__button movie-card__button_type_delete button-opacity'></button>
      )}
    </div>
  )
};

export default MoviesCard;