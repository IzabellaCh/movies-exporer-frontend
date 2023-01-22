import React from 'react';
import './NavTab.css';
import { Link } from 'react-router-dom';


function NavTab() {
  return (
    <div className='nav-tab'>
      <nav className='nav-tab__menu'>
        <Link to='' className='nav-tab__link link-opacity'>О проекте</Link>
        <Link to='' className='nav-tab__link link-opacity'>Технологии</Link>
        <Link to='' className='nav-tab__link link-opacity'>Студент</Link>
      </nav>
    </div>
  )
};

export default NavTab;