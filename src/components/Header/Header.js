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
      <img onClick={toMain} className='header__logo button-link-opacity' src={logo} alt='Логотип.' />
      <Navigation loggedIn={loggedIn} />
    </header>
  )
};

export default Header;