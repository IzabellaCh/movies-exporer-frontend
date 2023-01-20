import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ loggedIn }) {
  return (
    <div className={`navigation ${loggedIn? 'navigation_type_logged': ''}`}>
      {loggedIn && (
        <>
          <div className='navigation__menu'>
            <NavLink to='/movies' className='navigation__link navigation__link_type_logged button-link-opacity' activClassName='navigation__link_type_active'>Фильмы</NavLink>
            <NavLink to='/saved' className='navigation__link navigation__link_type_logged button-link-opacity' activClassName='navigation__link_type_active'>Сохранённые&nbsp;фильмы</NavLink>
          </div>
          <NavLink to='/profile' className='navigation__link navigation__link_type_logged button-link-opacity'>
            <button className='navigation__button navigation__button_type_logged button-link-opacity'>Аккаунт</button>
          </NavLink>
        </>
      )}
      {!loggedIn && (
        <>
          <NavLink to='/singup' className='navigation__link button-link-opacity'>Регистрация</NavLink>
          <NavLink to='/signin' className='navigation__link button-link-opacity'>
            <button className='navigation__button button-link-opacity'>Войти</button>
          </NavLink>
        </>
      )}
    </div>
  )
};

export default Navigation;