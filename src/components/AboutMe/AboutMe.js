import React from 'react';
import './AboutMe.css';
import avatar from '../../images/avatar.jpg';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className='about-me section' id="about-me">
      <h2 className='about-me__title section__title'>Студент</h2>
      <div className='about-me__line section__line'></div>
      <div className='about-me__info'>
        <article className='about-me__article'>
          <h2 className='about-me__name'>Виталий</h2>
          <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link className='about-me__github link-opacity' to='' target='_blank'>Github</Link>
        </article>
        <img className='about-me__avatar' src={avatar} alt='Аватар.'></img>
      </div>
    </div>
  )
};

export default AboutMe;