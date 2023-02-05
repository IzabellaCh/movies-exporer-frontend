import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
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
import { mainApi } from "../../utils/MainApi.js";

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

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleComeOut = () => {
    setLoggedIn(false);
  };

  const checkToken = useCallback(() => {
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
  });

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((data) => {
        setCurrenUser(data);
      })
      .catch((err) => {
        alert(`Ошибка при загрузке информации профиля: ${err}`);
      });
  }, [loggedIn]);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
          <Route
            path="/movies"
            element={
              <Movies
                allMovies={allMovies}
                getAllMovies={handleGetAllMovies}
                setAllMovies={setAllMovies}
                loggedIn={loggedIn}
              />
            }
          />
          <Route path="/saved" element={<SavedMovies loggedIn={loggedIn} />} />
          <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
