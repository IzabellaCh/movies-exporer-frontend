import React, { useState } from 'react';
import './SearchForm.css';
import loupe from '../../images/loupe.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useRef } from 'react';

function SearchForm() {
  const inputMovie = useRef();
  // const [values, setValues] = useState({});
  // const [errors, setErrors] = useState({});
  // const [isValid, setIsValid] = useState(false);

  const focusInput = () => {
    inputMovie.current.focus();
  }

  // const handleChange = (event) => {
  //   const { name, value, validationMessage } = event.target;
    
  //   setValues((prev) => ({
  //     ...prev,
  //     [name]: value
  //   }));
 
  //   setErrors((prev) => ({
  //     ...prev,
  //     [name]: validationMessage
  //   }));

  //   if (event.target.closest('form').checkValidity()) {
  //     setIsValid(true);
  //   } else {
  //     setIsValid(false);
  //   };
  // }

  return (
    <div className='search-form'>
      <div className='search-form__container'>
        <img className='search-form__loupe link-opacity' onClick={focusInput} src={loupe} alt='Лупа.' />
        <form className='search-form__form' noValidate>
          <input 
            className='search-form__input'
            ref={inputMovie}
            type='text'
            placeholder='Фильм'
            // name='movie'
            // id='movie-input'
            // value={values.name}
            // onChange={handleChange}
            required
          ></input>
          {/* <span className={`search-form__input-error movie-input-error ${(errors.name?.length > 1) ? 'popup__field-error_active' : ''}`}>{errors.name}</span> */}
          <button 
            type='submit'
            // disabled={!isValid}
            className={`search-form__button-search button-opacity`}></button>
            {/* ${isValid ? '': 'search-form__button-search_disabled'} */}
        </form>
        <div className='search-form__unated-checkbox'>
          <FilterCheckbox />
        </div>
      </div>
      <div className='search-form__line'></div>
      <div className='search-form__separate-checkbox'>
        <FilterCheckbox />
      </div>
    </div>
  );
}

export default SearchForm;
