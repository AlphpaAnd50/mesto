export default class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose({ key }) {
    if (key === "Escape") {
      const that = new Popup();
      that.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__close-button")) {
        this.close();
      } else if (evt.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
