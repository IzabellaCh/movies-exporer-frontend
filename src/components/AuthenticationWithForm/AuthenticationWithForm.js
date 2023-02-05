import React, { useEffect, useState } from "react";
import "./AuthenticationWithForm.css";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AuthenticationWithForm({ info, handleSubmit }) {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const toMain = () => {
    navigate("/");
  };
  // данные формы и валидация
  function onChange(event) {
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
  }

  function onSubmit(event) {
    // event.preventDefault();
    handleSubmit(event, values.name, values.email, values.password);
    setIsSubmitted(true);
  }

  useEffect(() => {
    if (isSubmitted) {
      setValues(() => ({
        name: "",
        email: "",
        password: "",
      }));
      setIsValid(false);
    }
    return setIsSubmitted(false);
  }, [isSubmitted]);

  return (
    <section className="authentication" aria-label="Аутентификация">
      <div className="authentication__container">
        <img
          onClick={toMain}
          className="authentication__logo button-opacity"
          src={logo}
          alt="Логотип."
        />
        <h2 className="authentication__title">{info.title}</h2>
        <form className="authentication__form" onSubmit={onSubmit}>
          {info.itIsRegister && (
            <label>
              <span className="authentication__input-name">Имя</span>
              <input
                type="name"
                name="name"
                value={values.name}
                onChange={onChange}
                className={`authentication__input ${
                  errors.name?.length > 1
                    ? "authentication__input_type_error"
                    : ""
                }`}
                // placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span
                className={`authentication__input-error ${
                  errors.name?.length > 1
                    ? "authentication__input-error_active"
                    : ""
                }`}
              >
                {errors.name}
              </span>
            </label>
          )}
          <label>
            <span className="authentication__input-name">Email</span>
            <input
              type="email"
              value={values.email}
              onChange={onChange}
              name="email"
              className={`authentication__input ${
                errors.email?.length > 1
                  ? "authentication__input_type_error"
                  : ""
              }`}
              // placeholder="Email"
              required
            />
            <span
              className={`authentication__input-error ${
                errors.email?.length > 1
                  ? "authentication__input-error_active"
                  : ""
              }`}
            >
              {errors.email}
            </span>
          </label>
          <label>
            <span className="authentication__input-name">Пароль</span>
            <input
              type="password"
              value={values.password}
              onChange={onChange}
              name="password"
              className={`authentication__input ${
                errors.password?.length > 1
                  ? "authentication__input_type_error"
                  : ""
              }`}
              // placeholder="Пароль"
              minLength="4"
              maxLength="16"
              required
            />
            <span
              className={`authentication__input-error ${
                errors.password?.length > 1
                  ? "authentication__input-error_active"
                  : ""
              } `}
            >
              {errors.password}
            </span>
          </label>
          <button
            type="submit"
            disabled={!isValid}
            className={`authentication__save-button button-opacity ${
              info.itIsRegister ? "" : "authentication__save-button_type_login"
            } ${isValid ? "" : "authentication__save-button_type_disabled"}`}
          >
            {info.saveButton}
          </button>
        </form>
        <p className="authentication__question">
          {`${info.question} `}
          <Link to={info.path} className="authentication__link">
            {info.link}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default AuthenticationWithForm;
