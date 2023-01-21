import React from 'react';
import './AboutProgect.css';

function AboutProgect() {
  return (
    <div className='about-project section'>
      <h2 className='about-project__title section__title'>О проекте</h2>
      <div className='about-project__line section__line'></div>
      <ul className='about-project__elements'>
        <li className='about-project__element'>
          <p className='about-project__subtitle'>Дипломный проект включал 5 этапов</p>
          <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__element'>
          <p className='about-project__subtitle'>На выполнение диплома ушло 5 недель</p>
          <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className='about-project__time-line'>
        <li className='about-project__time-element about-project__time-element_type_one-week'>
          <div className='about-project__period about-project__period_type_one-week'>
            <p className='about-project__time-title'>1 неделя</p>
          </div>
          <p className='about-project__time-subtitle'>Back-end</p>
        </li>
        <li className='about-project__time-element about-project__time-element_type_four-week'>
          <div className='about-project__period about-project__period_type_four-week'>
            <p className='about-project__time-title'>4 недели</p>
          </div>
          <p className='about-project__time-subtitle'>Front-end</p>
        </li>
      </ul>
    </div>
  )
};

export default AboutProgect;