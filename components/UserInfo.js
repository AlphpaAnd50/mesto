export default class UserInfo {
  constructor({ userNameSelector, userDescriptionSelector }) {
    this._userNameSelector = userNameSelector;
    this._userDescriptionSelector = userDescriptionSelector;
  }

  getUserInfo() {
    const name = this._userNameSelector.textContent;
    const job = this._userDescriptionSelector.textContent;

    return {name, job};
  }

  setUserInfo({ nickname, profession }) {
    this._userNameSelector.textContent = nickname;
    this._userDescriptionSelector.textContent = profession;
  }
}
