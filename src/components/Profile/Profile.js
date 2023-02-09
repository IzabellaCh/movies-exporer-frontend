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
  const [isValid, setIsValid] = useState(false);

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
    event.preventDefault();
    onUpdateUser(values.name, values.email, setButtonText);
  };

  useEffect(() => {
    setValues(() => ({
      name: currentUser.name,
      email: currentUser.email,
    }));
    setIsValid(false);
  }, [currentUser]);

  return (
    <>
      <Header pageIsMain={pageIsMain} loggedIn={loggedIn} />
      <main>
        <section className="profile">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
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
              disabled={
                !isValid &&
                (values.name === currentUser.name ||
                  values.email === currentUser.email)
              }
              className={`profile__button profile__button_type_update button-opacity ${
                isValid &&
                (values.name !== currentUser.name ||
                  values.email !== currentUser.email)
                  ? ""
                  : "profile__button_type_disabled"
              }`}
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
        </section>
      </main>
    </>
  );
}

export default Profile;
