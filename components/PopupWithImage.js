import Popup from "./Popup.js";
import { image, textImage } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup/* , link, text */) {
    super(selectorPopup);
    // this._link = link;
    // this._text = text;
  }

  open(link, text) {
    image.src = link;
    image.alt = text;
    textImage.textContent = text;
    super.open();
  }
}
