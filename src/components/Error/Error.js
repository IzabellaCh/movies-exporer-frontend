import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Error({ isError }) {
  //   const navigate = useNavigate();

  //   const goBack = () => {
  //     navigate(-1);
  //   };

  return (
    <div className={`error ${isError ? "error__visible" : ""}`}>
      <div className="error__container">
        <p className="error__code">404</p>
        <p className="error__message">Страница не найдена</p>
        <Link to="" className="error__link link-opacity">
          Назад
        </Link>
      </div>
    </div>
  );
}
export default Error;
