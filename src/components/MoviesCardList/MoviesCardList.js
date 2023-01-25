import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ isSavedMovies, movies }) {
  
  return (
    <div className='movies-card-list movies-card-list_type_saved-movies'>
      <div className='movies-card-list__elements'>
        {movies.map((item) => (
            <MoviesCard 
              info={item}
              key={item._id}
              isSavedMovies={isSavedMovies}
             />
          ))
        }
      </div>
      {!isSavedMovies && (
        <button className='movies-card-list__button-add-movies button-opacity'>Ещё</button>
      )}
    </div>
  )
};

export default MoviesCardList;