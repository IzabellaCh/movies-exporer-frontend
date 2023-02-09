import React from "react";
import "./Preloader.css";

const Preloader = ({ isVisible }) => {
  return (
    <section className={`${isVisible ? "preloader" : "preloader_hidden"}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </section>
  );
};

export default Preloader;
