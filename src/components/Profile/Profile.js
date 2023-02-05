import React, { useState, useEffect, useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ loggedIn, handleSignOut, onUpdateUser }) {
  const pageIsMain = false;
  const currentUser = useContext(CurrentUserContext);
  const [buttonText, setButtonText] = useState("Редактировать");
  const [values, setValues] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChange = (event) => {
    const { name, value, validationMessage } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validationMessage,
    }));

    if (event.target.closest("form").checkValidity()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const onSubmit = (event) => {
    onUpdateUser(event, values.name, values.password);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      setValues(() => ({
        name: currentUser.name,
        email: currentUser.email,
      }));
      // setIsValid(true);
    }
    return setIsSubmitted(false);
  }, [isSubmitted]);

  return (
    <>
      <Header pageIsMain={pageIsMain} loggedIn={loggedIn} />
      <main>
        <section className="profile">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <form className="profile__info" onSubmit={onSubmit}>
            <label className="profile__element">
              <span className="profile__input-name">Имя</span>
              <input
                type="name"
                name="name"
                value={values.name}
                onChange={onChange}
                className={`profile__input ${
                  errors.name?.length > 1 ? "profile__input_type_error" : ""
                }`}
                minLength="2"
                maxLength="40"
                required
              />
              <span
                className={`profile__input-error ${
                  errors.name?.length > 1 ? "profile__input-error_active" : ""
                }`}
              >
                {errors.name}
              </span>
            </label>
            <label className="profile__element">
              <span className="profile__input-name">E-mail</span>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                className={`profile__input ${
                  errors.email?.length > 1 ? "profile__input_type_error" : ""
                }`}
                minLength="2"
                maxLength="40"
                required
              />
              <span
                className={`profile__input-error ${
                  errors.email.length > 1 ? "profile__input-error_active" : ""
                }`}
              >
                {errors.email}
              </span>
            </label>
            <button
              type="submit"
              className="profile__button profile__button_type_update button-opacity"
            >
              {buttonText}
            </button>
          </form>
          <button
            onClick={handleSignOut}
            className="profile__button button-opacity profile__button_type_red"
          >
            Выйти из аккаунта
          </button>
          {/* <ul className="profile__info">
            <li className="profile__element">
              <p className="profile__element-name">Имя</p>
              <p className="profile__element-value">Виталий</p>
            </li>
            <li className="profile__element">
              <p className="profile__element-name">E-mail</p>
              <p className="profile__element-value">pochta@yandex.ru</p>
            </li>
          </ul> */}
          {/* <div className="profile__buttons"> */}
          {/* <button className="profile__button button-opacity">
              Редактировать
            </button> */}
          {/* <button
              onClick={handleSignOut}
              className="profile__button button-opacity profile__button_type_red"
            >
              Выйти из аккаунта
            </button> */}
          {/* </div> */}
        </section>
      </main>
    </>
  );
}

export default Profile;
