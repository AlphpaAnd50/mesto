import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup, image, textImage) {
    super(selectorPopup);
    this._image = image;
    this._textImage = textImage;
  }

  open(link, text) {
    this._image.src = link;
    this._image.alt = text;
    this._textImage.textContent = text;
    super.open();
  }
}
