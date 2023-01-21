import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';

function Header({ loggedIn }) {
  const navigate = useNavigate();

  const toMain = navigate('/');

  return (
    <header className={`header ${loggedIn? 'header_type_logged': 'header_type_unlogged'} `}>
      <img onClick={toMain} className='header__logo button-opacity' src={logo} alt='Логотип.' />
      <Navigation loggedIn={loggedIn} />
      <button className={`header__button ${loggedIn? 'header__button_type_logged' : 'header__button_type_unlogged'} button-opacity`}>{loggedIn? 'Аккаунт' : 'Войти'}</button>
    </header>
  )
};

export default Header;