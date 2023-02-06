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
  const [pageIsNotFound, setPageIsNotFound] = useState(true);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isFailOpen, setIsFailOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrenUser] = useState({});

  const navigate = useNavigate();

  const handleOpenNotFoundError = () => {
    setPageIsNotFound(true);
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
    setPageIsNotFound(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleComeOut = () => {
    setLoggedIn(false);
  };

  const handleGetAllMovies = (handlePreloader) => {
    handlePreloader(true);
    getAllMovies()
      .then((data) => {
        setAllMovies(data);
        localStorage.setItem("allMovies", JSON.stringify(data));
      })
      .catch((err) => {
        alert(`Ошибка ${err.code}: ${err.message}`);
      })
      .finally(() => {
        handlePreloader(false);
      });
  };

  const checkToken = useCallback(() => {
    authorization
      .checkToken()
      .then((res) => {
        handleLogin();
      })
      .catch((err) => {
        alert(`Ошибка ${err.code}: ${err.message}`);
      });
  }, []);

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
        alert(`Ошибка ${err.code}: ${err.message}`);
      })
      .finally(() => {
        changeButton("Редактировать");
      });
  };

  const handleSignOut = () => {
    authorization
      .signout()
      .then((data) => {
        handleComeOut();
        navigate("/");
      })
      .catch((err) => {
        alert(`Ошибка ${err.code}: ${err.message}`);
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
        alert(`Ошибка ${err.code}: ${err.message}`);
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
        alert(`Ошибка ${err.code}: ${err.message}`);
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
          alert(`Ошибка ${err.code}: ${err.message}`);
        });

      mainApi
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => {
          alert(`Ошибка ${err.code}: ${err.message}`);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

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
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/saved"
            element={
              loggedIn ? (
                <SavedMovies
                  loggedIn={loggedIn}
                  savedMovies={savedMovies}
                  handleDeleteMovie={handleDeleteMovie}
                />
              ) : (
                <Navigate to="/" replace />
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
                <Navigate to="/" replace />
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
                handleLogin={handleLogin}
              />
            }
          />
        </Routes>
        <Error pageIsNotFound={pageIsNotFound} handleOnClick={closeAllPopups} />
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
