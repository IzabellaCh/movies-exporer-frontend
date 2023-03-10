import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";

function Navigation({ loggedIn, pageIsMain, menuIsOpen, closeMenu }) {
  const navigate = useNavigate();

  const toProfile = () => {
    navigate("/profile");
  };

  return (
    <div
      className={`navigation ${
        loggedIn ? "navigation_type_logged" : "navigation_type_unlogged"
      }`}
    >
      {loggedIn && (
        <>
          <div className="navigation__inserted-menu">
            <nav className="navigation__links navigation__links_type_row">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `navigation__link link-opacity
                  ${isActive ? "navigation__link_type_active" : ""} 
                  ${pageIsMain ? "navigation__link_type_main" : ""}`
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved"
                className={({ isActive }) =>
                  `navigation__link link-opacity
                  ${isActive ? "navigation__link_type_active" : ""} 
                  ${pageIsMain ? "navigation__link_type_main" : ""}`
                }
              >
                Сохранённые&nbsp;фильмы
              </NavLink>
            </nav>
            <button
              onClick={toProfile}
              className="navigation__button-to-profile button-opacity"
            >
              Аккаунт
            </button>
          </div>
          <div
            className={`navigation__separate-menu ${
              menuIsOpen ? "navigation__separate-menu_type_open" : ""
            }`}
          >
            <div className="navigation__links-container">
              <nav className="navigation__links navigation__links_type_column">
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `${
                      isActive ? "navigation__link_type_active" : ""
                    } navigation__link link-opacity`
                  }
                >
                  Главная
                </NavLink>
                <NavLink
                  to="/movies"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `${
                      isActive ? "navigation__link_type_active" : ""
                    } navigation__link link-opacity`
                  }
                >
                  Фильмы
                </NavLink>
                <NavLink
                  to="/saved"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `${
                      isActive ? "navigation__link_type_active" : ""
                    } navigation__link link-opacity`
                  }
                >
                  Сохранённые&nbsp;фильмы
                </NavLink>
              </nav>
              <button
                onClick={toProfile}
                className="navigation__button-to-profile button-opacity"
              >
                Аккаунт
              </button>
            </div>
            <button
              onClick={closeMenu}
              className="navigation__button-close-menu"
            ></button>
          </div>
        </>
      )}
      {!loggedIn && (
        <nav>
          <Link
            to="/signup"
            className="navigation__link navigation__link_type_main link-opacity"
          >
            Регистрация
          </Link>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
