import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__line'></div>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2020</p>
        <nav>
          <ul className='footer__links'>
            <li><Link to='' className='footer__link link-opacity'>Яндекс.Практикум</Link></li>
            <li><Link to='' className='footer__link link-opacity'>Github</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
};

export default Footer;