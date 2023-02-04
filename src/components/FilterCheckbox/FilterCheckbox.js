import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onChange, checked }) {
  return (
    <form className="filter-checkbox">
      <label className="filter-checkbox__checkbox-container">
        <input
          checked={Boolean(checked)}
          type="checkbox"
          className="filter-checkbox__invisible-checkbox"
          onChange={onChange}
        ></input>
        <span className="filter-checkbox__pseudo-checkbox"></span>
        <span className="filter-checkbox__checkbox-name">Короткометражки</span>
      </label>
    </form>
  );
}

export default FilterCheckbox;
