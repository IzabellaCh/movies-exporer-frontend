import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio section" aria-label="Портфолио">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <Link to="" className="portfolio__link link-opacity" target="_blank">
            <p className="portfolio__link-name">Статичный сайт</p>
            <div className="portfolio__arrow"></div>
          </Link>
        </li>
        <li className="portfolio__element">
          <Link to="" className="portfolio__link link-opacity" target="_blank">
            <p className="portfolio__link-name">Адаптивный сайт</p>
            <div className="portfolio__arrow"></div>
          </Link>
        </li>
        <li className="portfolio__element">
          <Link to="" className="portfolio__link link-opacity" target="_blank">
            <p className="portfolio__link-name">Одностраничное приложение</p>
            <div className="portfolio__arrow"></div>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
