import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
  constructor(popup) {
    super(popup);
  }

  open() {
    super.open();
  }

    close() {
    super.close()
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector(".form__save-button").addEventListener("submit", (evt) => {console.log(1);
      evt.preventDefault();
      this.close();
    });
  }
}
