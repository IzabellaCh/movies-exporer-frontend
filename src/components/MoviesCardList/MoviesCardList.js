import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { movies } from '../../utils/constants';

function MoviesCardList({ isSavedMovies }) {
  
  return (
    <div className='movies-card-list'>
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