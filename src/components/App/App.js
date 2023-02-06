import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
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
  const [savedMovies, setSavedMovies] = useState([]);
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
      })
      .catch((err) => {
        setErrorMessage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        setErrorCode(err.code);
        // console.log(err.message, err.code);
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
        handleLogin();
        navigate("/");
      })
      .catch((err) => {
        alert(`Ошибка при авторизации: ${err}`);
      });
  });

  const handleUpdateUser = (name, email, changeButton) => {
    changeButton("Сохранение");
    mainApi
      .changeUserInfo(name, email)
      .then((data) => {
        setCurrenUser(data);
        handleOpenSuccess();
      })
      .catch((err) => {
        handleOpenFail();
        console.log(`Ошибка при обновлнии данных: ${err}`);
      })
      .finally(() => {
        changeButton("Редактировать");
      });
  };

  const handleSignOut = () => {
    authorization
      .signout()
      .then((data) => {
        console.log(data.message);
        navigate("/");
      })
      .catch((err) => {
        alert(`Ошибка при выходе из аккаунта: ${err}`);
      });
  };

  const handleSaveMovie = (newMovieInfo, setIsSaved) => {
    mainApi
      .saveMovie(newMovieInfo)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .then(() => {
        setIsSaved(true);
      })
      .catch((err) => {
        alert(`Ошибка при сохранении фильма: ${err}`);
      });
  };

  const handleDeleteMovie = (movie, setIsSaved) => {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((el) => el._id !== movie._id));
      })
      .then(() => {
        setIsSaved(false);
      })
      .catch((err) => {
        alert(`Ошибка при удалении карточки: ${err}`);
      });
  };

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((data) => {
          setCurrenUser(data);
        })
        .catch((err) => {
          alert(`Ошибка при загрузке информации профиля: ${err}`);
        });

      mainApi
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => {
          alert(`Ошибка при загрузке массива сохраненных фильмов: ${err}`);
        });
    }
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
              loggedIn ? (
                <Movies
                  allMovies={allMovies}
                  getAllMovies={handleGetAllMovies}
                  setAllMovies={setAllMovies}
                  loggedIn={loggedIn}
                  handleSaveMovie={handleSaveMovie}
                  savedMovies={savedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
          <Route
            path="/saved"
            element={
              loggedIn ? (
                <SavedMovies loggedIn={loggedIn} savedMovies={savedMovies} />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
          <Route
            path="/profile"
            element={
              loggedIn ? (
                <Profile
                  loggedIn={loggedIn}
                  handleSignOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
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
          title="Всё получилось!"
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
