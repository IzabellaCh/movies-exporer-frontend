import React from "react";
import "./AboutMe.css";
import avatar from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="about-me section" id="about-me" aria-label="О студенте">
      <h2 className="about-me__title section__title">Студент</h2>
      <div className="about-me__line section__line"></div>
      <div className="about-me__info">
        <article className="about-me__article">
          <h2 className="about-me__name">Изабелла</h2>
          <p className="about-me__subtitle">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__description">
            Я из Пермского края. Большую часть своей жизни посвятила медицине.
            Училась в Перми, потом в Москве. Стала неврологом, занималась
            пациентами с нервно-мышечными заболеваниями. 2022 год скорректировал
            планы. Сейчас живу в Грузии, закончила курс веб-разработки в
            ЯндексПрактикуме. Кстати, это - моя дипломная работа. Начинаю свой
            путь в новой и интересной сфере.
          </p>
          <a
            className="about-me__github link-opacity"
            href="https://github.com/IzabellaCh"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </article>
        <img className="about-me__avatar" src={avatar} alt="Аватар."></img>
      </div>
    </section>
  );
}

export default AboutMe;
