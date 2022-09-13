import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, { formSubmit }) {
    super(popup);
    this._formSubmit = formSubmit;
  }

  _getInputValues() {
    this._inputElements = this._popup.querySelectorAll(".form__input");

    this._formValues = {};
    this._inputElements.forEach(input => this._formValues[input.name] = input.value);

    return this._formValues;
  }

  close() {
    super.close();
    this._popup.querySelector(".form").reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector(".form").addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._getInputValues();
      this._formSubmit(this._formValues);

      this.close();
    });
  }
}
