import React from 'react';
import './NavTab.css';
import { NavLink } from 'react-router-dom';


function NavTab() {
  return (
    <div className='nav-tab'>
      <nav className='nav-tab__menu'>
        <NavLink to='' className='nav-tab__link button-link-opacity'>О проекте</NavLink>
        <NavLink to='' className='nav-tab__link button-link-opacity'>Технологии</NavLink>
        <NavLink to='' className='nav-tab__link button-link-opacity'>Студент</NavLink>
      </nav>
    </div>
  )
};

export default NavTab;