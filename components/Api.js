export default class Api {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUserInfo() {
    return fetch("https://nomoreparties.co/v1/cohort-54/users/me", {
      headers: {
        authorization: "2ce3cd01-490d-4ef6-a8a9-6ccb9ba22850",
      },
    })
      .then(this._checkResponse)
      .then((result) => {
        return result;
      });
  }

  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-54/cards", {
      headers: {
        authorization: "2ce3cd01-490d-4ef6-a8a9-6ccb9ba22850",
      },
    })
      .then(this._checkResponse)
      .then((result) => {
        return result;
      });
  }

  patchUserAvatar({ avatar }) {
    return fetch("https://nomoreparties.co/v1/cohort-54/users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: "2ce3cd01-490d-4ef6-a8a9-6ccb9ba22850",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._checkResponse);
  }

  patchUserInfo({ name, about }) {
    return fetch("https://nomoreparties.co/v1/cohort-54/users/me", {
      method: "PATCH",
      headers: {
        authorization: "2ce3cd01-490d-4ef6-a8a9-6ccb9ba22850",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkResponse);
  }

  patchNewCards({ name, link }) {
    {
      return fetch("https://mesto.nomoreparties.co/v1/cohort-54/cards", {
        method: "POST",
        headers: {
          authorization: "2ce3cd01-490d-4ef6-a8a9-6ccb9ba22850",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          link,
        }),
      }).then(this._checkResponse);
    }
  }

  deleteCards(id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: "2ce3cd01-490d-4ef6-a8a9-6ccb9ba22850",
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  putLike(id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${id}/likes`, {
      method: "PUT",
      headers: {
        authorization: "2ce3cd01-490d-4ef6-a8a9-6ccb9ba22850",
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  deleteLike(id) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-54/cards/${id}/likes`, {
      method: "DELETE",
      headers: {
        authorization: "2ce3cd01-490d-4ef6-a8a9-6ccb9ba22850",
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}
