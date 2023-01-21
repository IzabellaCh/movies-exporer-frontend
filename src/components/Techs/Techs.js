import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <div className='techs section' id="techs">
      <h2 className='techs__title section__title'>Технологии</h2>
      <div className='techs__line section__line'></div>
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__elements'>
        <li className='techs__element'>
          <p className='techs__name'>HTML</p>
        </li>
        <li className='techs__element'>
          <p className='techs__name'>CSS</p>
        </li>
        <li className='techs__element'>
          <p className='techs__name'>JS</p>
        </li>
        <li className='techs__element'>
          <p className='techs__name'>React</p>
        </li>
        <li className='techs__element'>
          <p className='techs__name'>Git</p>
        </li>
        <li className='techs__element'>
          <p className='techs__name'>Express.js</p>
        </li>
        <li className='techs__element'>
          <p className='techs__name'>MongoDB</p>
        </li>
      </ul>
    </div>
  )
};

export default Techs;