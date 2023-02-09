import React from "react";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className="page-not-found">
      <div className="page-not-found__container">
        <p className="page-not-found__code">404</p>
        <p className="page-not-found__message">Страница не найдена</p>
        <button
          onClick={goBack}
          className="page-not-found__button button-opacity"
        >
          Назад
        </button>
      </div>
    </main>
  );
}
export default PageNotFound;
