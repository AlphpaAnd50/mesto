import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
  }

  open() {
    super.open();
  }

  close(/* evt */) {
    super.close();
    // evt.target.closest(".element").remove();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector(".form").addEventListener("submit", (evt) => {
      console.log(evt);
      evt.preventDefault();
      this.close(/* evt */);
    });
  }
}
