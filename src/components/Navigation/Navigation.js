import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { useNavigate } from 'react-router-dom';

function Navigation({ loggedIn, menuIsOpen, closeMenu }) {
    const navigate = useNavigate();
  
  const toProfile = () => {
    navigate('/profile');
  }

  return (
    <div className={`navigation ${loggedIn ? "navigation_type_logged" : "navigation_type_unlogged"}`}>
      {loggedIn && (
        <>
          <div className='navigation__inserted-menu'>
            <nav className='navigation__links'>
              <NavLink to="/movies" className={({ isActive }) => `${isActive ? "navigation__link_type_active" : ""} navigation__link navigation__link_type_logged link-opacity`}>
                Фильмы
              </NavLink>
              <NavLink to="/saved" className={({ isActive }) => `${isActive ? "navigation__link_type_active" : ""} navigation__link navigation__link_type_logged link-opacity`}>
                Сохранённые&nbsp;фильмы
              </NavLink>
            </nav>
            <button onClick={toProfile} className='navigation__button-to-profile button-opacity'>Аккаунт</button>
          </div>
          <div className={`navigation__separate-menu ${menuIsOpen? 'navigation__separate-menu_type_open': '' }`}>
            <nav className='navigation__menu-container'>
              <NavLink to="/" className={({ isActive }) => `${isActive ? "navigation__link_type_active" : ""} navigation__link navigation__link_type_logged link-opacity`}>Главная</NavLink>
              <NavLink to="/movies" className={({ isActive }) => `${isActive ? "navigation__link_type_active" : ""} navigation__link navigation__link_type_logged link-opacity`}>Фильмы</NavLink>
              <NavLink to="/saved" className={({ isActive }) => `${isActive ? "navigation__link_type_active" : ""} navigation__link navigation__link_type_logged link-opacity`}>Сохранённые&nbsp;фильмы</NavLink>
            </nav>
            <button className='navigation__button-close-menu'></button>
          </div>
        </>
      )}
      {!loggedIn && (
        <nav>
          <Link to="/singup" className="navigation__link link-opacity">
            Регистрация
          </Link>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
