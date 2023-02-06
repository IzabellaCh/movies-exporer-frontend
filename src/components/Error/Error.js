import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

function Error({ pageIsNotFound, handleOnClick }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onClick = () => {
    handleOnClick();
    goBack();
  };

  return (
    <div className={`error ${pageIsNotFound ? "error__visible" : ""}`}>
      <div className="error__container">
        <p className="error__code">404</p>
        <p className="error__message">Страница не найдена</p>
        <button onClick={onClick} className="error__button button-opacity">
          Назад
        </button>
      </div>
    </div>
  );
}
export default Error;
