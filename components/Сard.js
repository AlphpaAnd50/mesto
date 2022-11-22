// ИМПОРТ
import { popupDeleteCard, popupDelete } from "../utils/constants.js";
import PopupDeleteCard from "./PopupWithConfirmation.js";
//КЛАСС

export default class Card {
  constructor({ data, handleCardClick }, selectorTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    this._id = data.owner._id;

    this._handleCardClick = handleCardClick;

    this._selectorTemplate = selectorTemplate;
  }
  //Получение шаблона
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
    this._element.querySelector(".element__likes-nombre").textContent = this._likes;

    return this._element;
  }
  // Лайк
  likeButton(evt) {
    evt.target.classList.toggle("element__like-button_active");
  }
  // Удаление
  cardDeletion(evt) {
    popupDeleteCard.open();

    // if (confirm(evt)) {

    // }

    // evt.target.closest(".element").remove();
  }

  // Слушатели
  _setEventListeners() {
    const image = this._element.querySelector(".element__image");
    const likeButton = this._element.querySelector(".element__like-button");
    const removeButton = this._element.querySelector(".element__delete-button");
    // Открыте картинки
    image.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
    // Лайк
    likeButton.addEventListener("click", (evt) => {
      this.likeButton(evt);
    });
    // Удаление карточки
    removeButton.addEventListener("click", (evt) => {
      this.cardDeletion(evt);
    });
  }
}
