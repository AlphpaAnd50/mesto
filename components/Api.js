export default class Api {
  constructor(options) {
    this._options = options;
  }
  getUserInfo() {
    return fetch("https://nomoreparties.co/v1/cohort-54/users/me", {
      headers: {
        authorization: "2ce3cd01-490d-4ef6-a8a9-6ccb9ba22850",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка в получении информации о пользователе ${res.status}`);
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(`userInfo ${err}`);
      });
  }
  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-54/cards", {
      headers: {
        authorization: "2ce3cd01-490d-4ef6-a8a9-6ccb9ba22850",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка в получении начальных карт ${res.status}`);
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(`cardsInfо ${err}`);
      });
  }
  patchUserInfo({ name, about }) {
    fetch("https://nomoreparties.co/v1/cohort-54/users/me", {
      method: "PATCH",
      headers: {
        authorization: "2ce3cd01-490d-4ef6-a8a9-6ccb9ba22850",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    });
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
      });
    }
  }
}
