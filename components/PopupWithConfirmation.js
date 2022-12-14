import Popup from "./Popup.js";
import { api } from "../utils/constants.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
  }

  open(id, evt) {
    super.open();
    this._id = id;
    this._evt = evt;
  }

  delete() {
    api.deleteCards(this._id);
    this._evt.target.closest(".element").remove();
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector(".form").addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.delete();
    });
  }
}
