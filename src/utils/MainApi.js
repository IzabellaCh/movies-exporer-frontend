class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  }

  async _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(await res.json());
  }

  // запрос для получения информации о пользователе +
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // запрос на получение сохраненных фильмов +
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //   запрос для изменения информации из формы +
  changeUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkResponse);
  }

  // запрос для создания новой карточки
  saveMovie(movieInfo) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        nameRU: movieInfo.nameRU,
        nameEN: movieInfo.nameEN,
        movieId: movieInfo.id,
        thumbnail: `https://api.nomoreparties.co/${movieInfo.image.formats.thumbnail.url}`,
        trailerLink: movieInfo.trailerLink,
        image: `https://api.nomoreparties.co/${movieInfo.image.url}`,
        description: movieInfo.description,
        year: movieInfo.year,
        duration: movieInfo.duration,
        director: movieInfo.director,
        country: movieInfo.country,
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      credentials: "include",
    }).then(this._checkResponse);
  }
}

export const mainApi = new MainApi({
  // baseUrl: "http://localhost:3001",
  baseUrl: "https://api.movie-project.nomoredomains.club",
  headers: {
    "Content-Type": "application/json",
  },
});
