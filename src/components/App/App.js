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

function App() {
  const [isError, setIsError] = useState(false);

  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/singup" element={<Register />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Error isError={isError} />
    </div>
  );
}

export default App;

// export default withRouter(App);
