import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../Error/Error";
import { getAllMovies } from "../../utils/MoviesApi.js";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const handleGetAllMovies = () => {
    getAllMovies()
      .then((data) => {
        setAllMovies(data);
      })
      .catch((err) => {
        setErrorMessage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
        setErrorCode(err.code);
        console.log(err.message, err.code);
        // setIsError(true);
      });
  };

  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route
          path="/movies"
          element={
            <Movies allMovies={allMovies} getAllMovies={handleGetAllMovies} />
          }
        />
        <Route path="/saved" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
      <Error isError={isError} code={errorCode} massage={errorMessage} />
    </div>
  );
}

export default App;
