import Popup from "./Popup.js";
import { api } from "../utils/constants.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
  }

  open(id) {
    super.open();
    this._id = id;
  }

  delete() {
    api.deleteCards(this._id);
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
