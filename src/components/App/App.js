import React from 'react';
import './App.css';
import { Route, Routes, Switch, withRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';


function App() {
  const loggedIn = false;

  return (
    <div className="page">
      <Routes>
        <Route exact path='/' element={<Main loggedIn={loggedIn} />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/singup' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

// export default withRouter(App);
