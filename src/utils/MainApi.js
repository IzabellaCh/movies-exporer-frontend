class MainApi {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // запрос для получения информации о пользователе +
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // запрос для создания массива карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
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
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        name: movieInfo.name,
        link: movieInfo.link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardInfo) {
    return fetch(`${this._baseUrl}/cards/${cardInfo}`, {
      method: "DELETE",
      credentials: "include",
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "PUT",
        credentials: "include",
      }).then(this._checkResponse);
    } else {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        credentials: "include",
      }).then(this._checkResponse);
    }
  }

  changeAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link,
      }),
    }).then(this._checkResponse);
  }
}

export const mainApi = new MainApi({
  baseUrl: "http://localhost:3001",
  //   baseUrl: "https://api.movie-project.nomoredomains.club",
  headers: {
    "Content-Type": "application/json",
  },
});
