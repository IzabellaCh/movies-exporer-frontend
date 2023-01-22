import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <Link to='/singup' className='navigation__link link-opacity'>Регистрация</Link>
        </>
      )}
    </div>
  )
};

export default Navigation;