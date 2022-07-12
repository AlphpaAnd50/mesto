// Импорт
import { addCard } from "./Card.js";
import { enableValidation } from "./FormValidator.js";

// Переменне
const nickname = document.querySelector(".profile__nickname");
const profession = document.querySelector(".profile__profession");

const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonAddСards = document.querySelector(".profile__add-button");

const popupProfile = document.querySelector(".popup_type_profile");
const popupProfileInputNickname = popupProfile.querySelector("#nickname-input");
const popupProfileInputProfession = popupProfile.querySelector("#profession-input");

const popupMesto = document.querySelector(".popup_type_mesto");
const popupMestoInputTitle = popupMesto.querySelector("#title-input");
const popupMestoInputLink = popupMesto.querySelector("#link-input");

const popupImage = document.querySelector(".popup_type_image");
const image = popupImage.querySelector(".popup__image");
const textImage = popupImage.querySelector(".popup__image-text");

//Функции открытия попапов
function openPopupProfile() {
  popupProfileInputNickname.value = nickname.textContent;
  popupProfileInputProfession.value = profession.textContent;
  openPopup(popupProfile);
}

function openPopupMesto() {
  const button = popupMesto.querySelector(".form__save-button");
  button.classList.add("form__save-button_inactive");
  button.disabled = true;

  popupMestoInputTitle.value = "";
  popupMestoInputLink.value = "";
  openPopup(popupMesto);
}

function openPopupImage(link, text) {
  image.src = link;
  image.alt = text;
  textImage.textContent = text;

  openPopup(popupImage);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", closePopupEscape);
}

//Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", closePopupEscape);
}

//Функция закрытия на ESC
function closePopupEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

// Функция закрытия на нажатие мима формы
function closePopupClick(evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(document.querySelector(".popup_opened"));
  }
}

//Функция редактирования профиля
function editProfile() {
  nickname.textContent = popupProfileInputNickname.value;
  profession.textContent = popupProfileInputProfession.value;

  closePopup(popupProfile);
}

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
});

// class Card {
//   constructor(name, link) {
//     this._name = name;
//     this._link = link;
//   }

//   _getTemplate() {
//     const cardElement = document
//       .querySelector("#element-template")
//       .content.querySelector(".element")
//       .cloneNode(true);

//     return cardElement;
//   }
//   // Создание карточки
//   generateCard() {
//     this._element = this._getTemplate();
//     this._setEventListeners();

//     this._element.querySelector(".element__text").textContent = this._name;
//     this._element.querySelector(".element__image").src = this._link;

//     return this._element;
//   }

//   _setEventListeners() {
//     const image = this._element.querySelector(".element__image");
//     const likeButton = this._element.querySelector(".element__like-button");
//     const removeButton = this._element.querySelector(".element__delete-button");
//     // Открыте картинки
//     image.addEventListener("click", () => {
//       openPopupImage(this._link, this._name);
//     });
//     // Лайк
//     likeButton.addEventListener("click", (evt) => {
//       evt.target.classList.toggle("element__like-button_active");
//     });
//     // Удаление карточки
//     removeButton.addEventListener("click", (evt) => {
//       evt.target.closest(".element").remove();
//     });
//   }
// }

// //Рендер карточек
// function renderCards(Cards) {
//   Cards.forEach((item) => {
//     const card = new Card(item.name, item.link);

//     const cardElement = card.generateCard();
//     cards.prepend(cardElement);
//   });
// }

// //Добовление 6 карточек
// renderCards(initialCards);

// // Добовление карточек
// function addCard() {
//   const card = [{ name: popupMestoInputTitle.value, link: popupMestoInputLink.value }];
//   renderCards(card);
//   closePopup(popupMesto);
// }

//Слушатели событий

buttonEditProfile.addEventListener("click", () => {
  openPopupProfile(popupProfile);
});

buttonAddСards.addEventListener("click", () => {
  openPopupMesto(popupMesto);
});

popupProfile
  .querySelector(".popup__close-button")
  .addEventListener("click", () => closePopup(popupProfile));
popupMesto
  .querySelector(".popup__close-button")
  .addEventListener("click", () => closePopup(popupMesto));
popupImage
  .querySelector(".popup__close-button")
  .addEventListener("click", () => closePopup(popupImage));

popupProfile.addEventListener("click", closePopupClick);
popupMesto.addEventListener("click", closePopupClick);
popupImage.addEventListener("click", closePopupClick);

popupProfile.querySelector(".form").addEventListener("submit", (evt) => {
  evt.preventDefault();
  editProfile();
});

popupMesto.querySelector(".form").addEventListener("submit", (evt) => {
  evt.preventDefault();
  addCard();
});

//Экспорт
export {
  buttonEditProfile,
  buttonAddСards,
  openPopupImage,
  popupMestoInputTitle,
  popupMestoInputLink,
};
