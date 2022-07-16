// Импорт
import { openPopupImage } from "./index.js";

// Переменне

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

class Card {
  constructor(item, selectorTemplate) {
    this._name = item.name;
    this._link = item.link;

    this._selectorTemplate = selectorTemplate
  }
  //
  _getTemplate() {
    const cardElement = document
      .querySelector(this._selectorTemplate)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }
  // Создание карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__text").textContent = this._name;
    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__image").src = this._link;

    return this._element;
  }
  // Слушатели
  _setEventListeners() {
    const image = this._element.querySelector(".element__image");
    const likeButton = this._element.querySelector(".element__like-button");
    const removeButton = this._element.querySelector(".element__delete-button");
    // Открыте картинки
    image.addEventListener("click", () => {
      openPopupImage(this._link, this._name);
    });
    // Лайк
    likeButton.addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__like-button_active");
    });
    // Удаление карточки
    removeButton.addEventListener("click", (evt) => {
      evt.target.closest(".element").remove();
    });
  }
}

export { Card, initialCards };
