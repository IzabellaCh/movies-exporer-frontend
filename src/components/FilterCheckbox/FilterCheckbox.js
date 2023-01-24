import React, { useState } from 'react';
import './FilterCheckbox.css';
// import checkboxDisabled from '../../images/checkbox-disabled.svg';
// import checkboxActive from '../../images/checkbox-active.svg';


function FilterCheckbox() {
  // const { isActive, setIsActive } = useState(false);
  
  // const changeIsActive = () => {
  //   setIsActive(!isActive);
  // }

  return (
    <form className='filter-checkbox'>
      <label className='filter-checkbox__checkbox-container'>
        <input type='checkbox' className='filter-checkbox__invisible-checkbox'></input>
        {/* <img onClick={changeIsActive} src={isActive? checkboxActive : checkboxDisabled} alt='' className='filter-checkbox__checkbox_type_visible-checkbox' /> */}
        <span className='filter-checkbox__pseudo-checkbox'></span>
        <span className='filter-checkbox__checkbox-name'>Короткометражки</span>
      </label>
    </form>
  )
};

export default FilterCheckbox;