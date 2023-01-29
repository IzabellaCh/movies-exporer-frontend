import React from "react";
import "./Register.css";
import AuthenticationWithForm from "../AuthenticationWithForm/AuthenticationWithForm";

function Register() {
  const loginInfo = {
    itIsRegister: true,
    title: "Добро пожаловать!",
    question: "Уже зарегистрированы?",
    link: "Войти",
    path: "/signin",
    saveButton: "Зарегистрироваться",
  };

  // const handleSubmit = () => {};

  return <AuthenticationWithForm info={loginInfo} />;
}

export default Register;
