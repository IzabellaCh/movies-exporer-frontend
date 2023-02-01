import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../Error/Error";
// import { moviesApi } from "../../utils/MoviesApi.js";

import { getAllMovies } from "../../utils/MoviesApi.js";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  // const [searchFormIsSubmitted, setSearchFormIsSubmitted] = useState(false);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const handleGetAllMovies = () => {
    getAllMovies()
      .then((data) => {
        setAllMovies(data);
      })
      .catch((err) => {
        setErrorMessage(err.message);
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
            <Movies allMovies={allMovies} onGetAllMovies={handleGetAllMovies} />
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
