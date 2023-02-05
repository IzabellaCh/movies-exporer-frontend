import React from "react";
import "./Register.css";
import { Link, withRouter, useNavigate } from "react-router-dom";
import AuthenticationWithForm from "../AuthenticationWithForm/AuthenticationWithForm";
import { authorization } from "../../utils/authorization";

function Register() {
  const navigate = useNavigate();

  const loginInfo = {
    itIsRegister: true,
    title: "Добро пожаловать!",
    question: "Уже зарегистрированы?",
    link: "Войти",
    path: "/signin",
    saveButton: "Зарегистрироваться",
  };

  function handleSubmit(event, name, email, password) {
    event.preventDefault();
    authorization
      .register(name, email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          // openSuccess();
          navigate("/signin");
          // history.push("/signin");
        }
      })
      .catch((err) => {
        // openFail();
        console.log(`Ошибка при регистрации: ${err}`);
      });
    // .finally(() => {
    //   setSaveButton('Зарегистрироваться');
    // })
  }

  return (
    <main>
      <AuthenticationWithForm info={loginInfo} handleSubmit={handleSubmit} />
    </main>
  );
}

export default Register;
