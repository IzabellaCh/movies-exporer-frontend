import React, { useState } from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";

function Header({ pageIsMain, loggedIn }) {
  const navigate = useNavigate();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toMain = () => {
    navigate("/");
  };

  const toLogin = () => {
    navigate("/signin");
  };

  const openMenu = () => {
    setMenuIsOpen(true);
  };

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <header className={`header ${pageIsMain ? "header_type_main" : ""} `}>
      <img
        onClick={toMain}
        className="header__logo button-opacity"
        src={logo}
        alt="Логотип."
      />
      <Navigation
        loggedIn={loggedIn}
        pageIsMain={pageIsMain}
        menuIsOpen={menuIsOpen}
        closeMenu={closeMenu}
      />
      {!loggedIn && (
        <button
          onClick={toLogin}
          className="header__button-to-login button-opacity"
        >
          Войти
        </button>
      )}
      {loggedIn && (
        <button
          onClick={openMenu}
          className={`header__button-menu button-opacity ${
            pageIsMain ? "header__button-menu_main" : ""
          }`}
        ></button>
      )}
    </header>
  );
}

export default Header;
