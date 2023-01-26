import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';

function Header({ loggedIn }) {
  const navigate = useNavigate();

  const toMain = () => {
    navigate('/');
  };

  const toLogin = () => {
    navigate('/signin');
  };

  const toProfile = () => {
    navigate('/profile');
  }

  const openMenu = () => {

  }

  return (
    <header className={`header ${loggedIn? 'header_type_logged': 'header_type_unlogged'} `}>
      <img onClick={toMain} className='header__logo button-opacity' src={logo} alt='Логотип.' />
      <Navigation loggedIn={loggedIn} />
      {!loggedIn && (
        <button onClick={toLogin} className='header__button-to-page header__button-to-page_type_login button-opacity'>Войти</button>
      )}
      {loggedIn && (
        <>
          <button onClick={toProfile} className='header__button-to-page header__button-to-page_type_profile button-opacity'>Аккаунт</button>
          <button onClick={openMenu} className='header__button-menu button-opacity'></button>
        </>
      )}
    </header>
  )
};

export default Header;