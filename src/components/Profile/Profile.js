import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Profile({ loggedIn }) {
  const pageIsMain = false;
  return (
    <>
      <Header pageIsMain={pageIsMain} loggedIn={loggedIn} />
      <main>
        <section className="progile">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <ul className="profile__info">
            <li className="profile__element">
              <p className="profile__element-name">Имя</p>
              <p className="profile__element-value">Виталий</p>
            </li>
            <li className="profile__element">
              <p className="profile__element-name">E-mail</p>
              <p className="profile__element-value">pochta@yandex.ru</p>
            </li>
          </ul>
          <div className="profile__links">
            <Link className="profile__link" to="">
              Редактировать
            </Link>
            <Link className="profile__link profile__link_type_red" to="">
              Выйти из аккаунта
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
