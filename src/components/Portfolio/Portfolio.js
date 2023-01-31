import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio section" aria-label="Портфолио">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <a
            href="https://github.com/IzabellaCh/how-to-learn"
            rel="noreferrer"
            className="portfolio__link link-opacity"
            target="_blank"
          >
            <p className="portfolio__link-name">Статичный сайт</p>
            <div className="portfolio__arrow"></div>
          </a>
        </li>
        <li className="portfolio__element">
          <a
            href="https://github.com/IzabellaCh/russian-travel"
            rel="noreferrer"
            className="portfolio__link link-opacity"
            target="_blank"
          >
            <p className="portfolio__link-name">Адаптивный сайт</p>
            <div className="portfolio__arrow"></div>
          </a>
        </li>
        <li className="portfolio__element">
          <a
            href="https://github.com/IzabellaCh/react-mesto-api-full"
            rel="noreferrer"
            className="portfolio__link link-opacity"
            target="_blank"
          >
            <p className="portfolio__link-name">Одностраничное приложение</p>
            <div className="portfolio__arrow"></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
