import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ loggedIn }) {
  return (
    <div className={`navigation ${loggedIn? 'navigation_type_logged': 'navigation_type_unlogged'}`}>
      {loggedIn && (
        <>
          <NavLink to='/movies' className='navigation__link navigation__link_type_logged link-opacity' activClassName='navigation__link_type_active'>Фильмы</NavLink>
          <NavLink to='/saved' className='navigation__link navigation__link_type_logged link-opacity' activClassName='navigation__link_type_active'>Сохранённые&nbsp;фильмы</NavLink>
        </>
      )}
      {!loggedIn && (
        <>
          <NavLink to='/singup' className='navigation__link link-opacity'>Регистрация</NavLink>
        </>
      )}
    </div>
  )
};

export default Navigation;