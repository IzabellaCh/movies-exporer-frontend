import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import AuthenticationWithForm from "../AuthenticationWithForm/AuthenticationWithForm";
import { authorization } from "../../utils/authorization";

function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Войти");

  const loginInfo = {
    itIsRegister: false,
    title: "Рады видеть!",
    question: "Ещё не зарегистрированы?",
    link: "Регистрация",
    path: "/signup",
  };

  function handleSubmit(event, email, password) {
    event.preventDefault();
    setButtonText("Подождите...");
    authorization
      .login(email, password)
      .then((data) => {
        handleLogin();
        navigate("/movies");
      })
      .catch((err) => {
        console.log(`Ошибка при авторизации: ${err}`);
      })
      .finally(() => {
        setButtonText("Войти");
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

export default Login;
