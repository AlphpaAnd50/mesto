export default class UserInfo {
  constructor({ userAvatarSelector, userNameSelector, userDescriptionSelector }) {
    this._userAvatarSelector = userAvatarSelector;
    this._userNameSelector = userNameSelector;
    this._userDescriptionSelector = userDescriptionSelector;
  }

  getUserInfo() {
    const avatar = this._userAvatarSelector.src;
    const name = this._userNameSelector.textContent;
    const job = this._userDescriptionSelector.textContent;

    return { name, job, avatar };
  }

  setUserInfo({ nickname, profession }) {
    this._userNameSelector.textContent = nickname;
    this._userDescriptionSelector.textContent = profession;
  }

  setUserAvatar({ avatar }) {
    this._userAvatarSelector.src = avatar;
  }
}
