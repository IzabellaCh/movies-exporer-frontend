import React from 'react';
import './AboutProgect.css';

function AboutProgect() {
  return (
    <div className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__line'></div>
      <ul className='about-project__sections'>
        <li className='about-project__section'>
          <p className='about-project__subtitle'>Дипломный проект включал 5 этапов</p>
          <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__section'>
          <p className='about-project__subtitle'>На выполнение диплома ушло 5 недель</p>
          <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
    </div>
  )
};

export default AboutProgect;