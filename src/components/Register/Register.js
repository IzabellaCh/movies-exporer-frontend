import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import AuthenticationWithForm from "../AuthenticationWithForm/AuthenticationWithForm";
import { authorization } from "../../utils/authorization";

function Register({ openSuccess, openFail, handleLogin }) {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Зарегистрироваться");

  const loginInfo = {
    itIsRegister: true,
    title: "Добро пожаловать!",
    question: "Уже зарегистрированы?",
    link: "Войти",
    path: "/signin",
  };

  function handleSubmit(event, email, password, setValues, name) {
    event.preventDefault();
    setButtonText("Регистрация...");
    authorization
      .register(name, email, password)
      .then((res) => {
        if (res) {
          openSuccess();
          authorization.login(email, password).then((data) => {
            handleLogin();
            navigate("/movies");
          });
        }
      })
      .catch((err) => {
        openFail();
        setValues(() => ({
          name: name,
          email: email,
          password: password,
        }));
        alert(err.message);
      })
      .finally(() => {
        setButtonText("Зарегистрироваться");
      });
  }

  return (
    <main>
      <AuthenticationWithForm
        info={loginInfo}
        buttonText={buttonText}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default Register;
