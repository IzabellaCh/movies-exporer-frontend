import React from "react";
import "./NavTab.css";
import { HashLink as Link } from "react-router-hash-link";

function NavTab() {
  return (
    <section className="nav-tab" aria-label="Навигация по странице">
      <nav className="nav-tab__menu">
        <Link to="/#about-project" className="nav-tab__link link-opacity">
          О проекте
        </Link>
        <Link to="/#techs" className="nav-tab__link link-opacity">
          Технологии
        </Link>
        <Link to="/#about-me" className="nav-tab__link link-opacity">
          Студент
        </Link>
      </nav>
    </section>
  );
}

export default NavTab;
