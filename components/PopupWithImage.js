import Popup from "./Popup.js";
import { image, textImage } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup, link, text) {
    super(selectorPopup);
    this._link = link;
    this._text = text;
  }

  open() {
    image.src = this._link;
    image.alt = this._text;
    textImage.textContent = this._text;
    super.open();
  }
}
