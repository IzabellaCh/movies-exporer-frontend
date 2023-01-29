import React from "react";
import "./Login.css";
import AuthenticationWithForm from "../AuthenticationWithForm/AuthenticationWithForm";

function Login() {
  const loginInfo = {
    itIsRegister: false,
    title: "Рады видеть!",
    question: "Ещё не зарегистрированы?",
    link: "Регистрация",
    path: "/singup",
    saveButton: "Войти",
  };

  // const handleSubmit = () => {};

  return <AuthenticationWithForm info={loginInfo} />;
}

export default Login;
