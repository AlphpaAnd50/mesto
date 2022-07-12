// Импорт
import {
  openPopupImage,
  closePopup,
  popupMesto,
  popupMestoInputTitle,
  popupMestoInputLink,
} from "./index.js";

// Переменне
const cards = document.querySelector(".elements");

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
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#element-template")
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }
  // Создание карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__text").textContent = this._name;
    this._element.querySelector(".element__image").src = this._link;

    return this._element;
  }

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

//Рендер карточек
function renderCards(Cards) {
  Cards.forEach((item) => {
    const card = new Card(item.name, item.link);

    const cardElement = card.generateCard();
    cards.prepend(cardElement);
  });
}

//Добовление 6 карточек
renderCards(initialCards);

//Добовление карточек
function addCard() {
  const card = [{ name: popupMestoInputTitle.value, link: popupMestoInputLink.value }];
  renderCards(card);
  closePopup(popupMesto);
}

export { addCard };
