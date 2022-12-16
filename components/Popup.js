export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose({ key }) {
    if (key === "Escape") {
      this.close();
    }
  }

  loading(isLoading) {
    this._button =  this._popup.querySelector(".form__save-button")

    if (isLoading) {
      this._button.textContent += "...";
    } else {
      this._button.textContent = this._button.textContent.replace(/.{3}$/,"");
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
