import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, { formSubmit }) {
    super(selectorPopup);
    this._formSubmit = formSubmit;
  }

  _getInputValues() {
    this._inputElements = this._selectorPopup.querySelectorAll(".form__input");
  }

  close() {
    super.close();
    this._selectorPopup.querySelector(".form").reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._selectorPopup.querySelector(".form").addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._getInputValues();
      this._formSubmit(this._inputElements[0].value, this._inputElements[1].value);

      this.close();
    });
  }
}
