export default class Api {
  constructor(options) {
    this._options = options;
  }
  getUserInfo() {
    return fetch("https://nomoreparties.co/v1/cohort-51/users/me", {
      headers: {
        authorization: "24ace598-6ee1-43a3-ab45-9d4737e73407",
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
    return fetch("https://mesto.nomoreparties.co/v1/cohort-51/cards", {
      headers: {
        authorization: "24ace598-6ee1-43a3-ab45-9d4737e73407",
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
    fetch("https://nomoreparties.co/v1/cohort-51/users/me", {
      method: "PATCH",
      headers: {
        authorization: "24ace598-6ee1-43a3-ab45-9d4737e73407",
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
      return fetch("https://mesto.nomoreparties.co/v1/cohort-51/cards", {
        method: "POST",
        headers: {
          authorization: "24ace598-6ee1-43a3-ab45-9d4737e73407",
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
