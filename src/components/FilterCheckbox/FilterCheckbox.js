import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ setIsShortFilm }) {
  const handleClick = (event) => {
    if (event.target.checked) {
      setIsShortFilm(true);
    } else {
      setIsShortFilm(false);
    }
  };

  return (
    <form className="filter-checkbox">
      <label className="filter-checkbox__checkbox-container">
        <input
          type="checkbox"
          className="filter-checkbox__invisible-checkbox"
          onClick={handleClick}
        ></input>
        <span className="filter-checkbox__pseudo-checkbox"></span>
        <span className="filter-checkbox__checkbox-name">Короткометражки</span>
      </label>
    </form>
  );
}

export default FilterCheckbox;
