import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProgect from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main({ loggedIn }) {
  const pageIsMain = true;

  return (
    <>
      <Header pageIsMain={pageIsMain} loggedIn={loggedIn} />
      <main className="main">
        <Promo />
        <NavTab />
        <AboutProgect />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
