import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Error({ isError, code, massage }) {
  //   const navigate = useNavigate();

  //   const goBack = () => {
  //     navigate(-1);
  //   };

  return (
    <div className={`error ${isError ? "error__visible" : ""}`}>
      <div className="error__container">
        <p className="error__code">{code}</p>
        <p className="error__message">{massage}</p>
        <Link to="" className="error__link link-opacity">
          Назад
        </Link>
      </div>
    </div>
  );
}
export default Error;
