import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popup, api) {
    super(popup);
    this._api = api;
  }

  open(id, evt) {
    super.open();
    this._id = id;
    this._evt = evt;
  }

  delete() {
    this._api
      .deleteCards(this._id)
      .then(() => {
        this._evt.target.closest(".element").remove();
        this.close();
      })
      .finally(() => {
        this.loading(false);
      });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector(".form").addEventListener("submit", (evt) => {
      evt.preventDefault();

      this.loading(true);

      this.delete();
    });
  }
}
