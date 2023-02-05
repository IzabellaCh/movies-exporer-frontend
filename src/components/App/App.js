import React, { useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../Error/Error";
import { getAllMovies } from "../../utils/MoviesApi.js";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import success from "../../images/success.svg";
import fail from "../../images/fail.svg";
import { authorization } from "../../utils/authorization";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isFailOpen, setIsFailOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrenUser] = useState({});

  const navigate = useNavigate();

  const handleGetAllMovies = (handlePreloader) => {
    handlePreloader(true);
    getAllMovies()
      .then((data) => {
        setAllMovies(data);
        localStorage.setItem("allMovies", JSON.stringify(data));
        // console.log(localStorage.setItem("allMovies"));
      })
      .catch((err) => {
        setErrorMessage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        setErrorCode(err.code);
        console.log(err.message, err.code);
        // setIsError(true);
      })
      .finally(() => {
        handlePreloader(false);
      });
  };

  const handleOpenSuccess = () => {
    setIsSuccessOpen(true);
  };

  const handleOpenFail = () => {
    setIsFailOpen(true);
  };

  const closeAllPopups = () => {
    setIsSuccessOpen(false);
    setIsFailOpen(false);
  };

  function handleLogin() {
    setLoggedIn(true);
  }

  function handleComeOut() {
    setLoggedIn(false);
  }

  function checkToken() {
    authorization
      .checkToken()
      .then((res) => {
        console.log(res);
        handleLogin();
        navigate("/");
      })
      .catch((err) => {
        console.log(`Ошибка при авторизации: ${err}`);
      });
  }

  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <Movies
              allMovies={allMovies}
              getAllMovies={handleGetAllMovies}
              setAllMovies={setAllMovies}
            />
          }
        />
        <Route path="/saved" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/signup"
          element={
            <Register
              openSuccess={handleOpenSuccess}
              openFail={handleOpenFail}
            />
          }
        />
      </Routes>
      <Error isError={isError} code={errorCode} massage={errorMessage} />
      <InfoTooltip
        name="success"
        title="Вы успешно зарегистрировались!"
        image={success}
        isOpen={isSuccessOpen}
        onClose={closeAllPopups}
      />
      <InfoTooltip
        name="fail"
        title="Что-то пошло не так! Попробуйте ещё раз."
        image={fail}
        isOpen={isFailOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
