// Импорт
import { Card, initialCards } from "./Card.js";
import { FormValidator, config } from "./FormValidator.js";

// Переменне
const nickname = document.querySelector(".profile__nickname");
const profession = document.querySelector(".profile__profession");

const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonAddСards = document.querySelector(".profile__add-button");

const popupProfile = document.querySelector(".popup_type_profile");
const popupProfileInputNickname = popupProfile.querySelector("#nickname-input");
const popupProfileInputProfession = popupProfile.querySelector("#profession-input");

const popupMesto = document.querySelector(".popup_type_mesto");
const form = popupMesto.querySelector(".form");
const popupMestoInputTitle = popupMesto.querySelector("#title-input");
const popupMestoInputLink = popupMesto.querySelector("#link-input");

const popupImage = document.querySelector(".popup_type_image");
const image = popupImage.querySelector(".popup__image");
const textImage = popupImage.querySelector(".popup__image-text");

const cards = document.querySelector(".elements");

const formChangeProfile = new FormValidator(config, changeProfile);
const formAddMesto = new FormValidator(config, addMesto);

//Функции открытия попапов
function openPopupProfile() {
  popupProfileInputNickname.value = nickname.textContent;
  popupProfileInputProfession.value = profession.textContent;
  openPopup(popupProfile);
  formChangeProfile.resetValidation();
}

function openPopupMesto() {
  console.log(popupMesto);
  openPopup(popupMesto);
  form.reset();
  formAddMesto.resetValidation();
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

//Рендер карточек
function renderCards(Cards) {
  Cards.forEach((item) => {
    const card = new Card(item, "#element-template");

    const cardElement = card.generateCard();
    cards.append(cardElement);
  });
}
// Создание новой карточки
function createCard(item) {
  const card = new Card(item, "#element-template");

  const cardElement = card.generateCard();
  return cardElement;
}

//Добовление 6 карточек
renderCards(initialCards);

//Добовление карточки
function addCard() {
  const card = { name: popupMestoInputTitle.value, link: popupMestoInputLink.value };
  cards.prepend(createCard(card));
  closePopup(popupMesto);
}

function Validator() {
  formChangeProfile.enableValidation();
  formAddMesto.enableValidation();
}

Validator();
//Слушатели событий

buttonEditProfile.addEventListener("click", () => {
  openPopupProfile();
});

buttonAddСards.addEventListener("click", () => {
  openPopupMesto();
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
export { openPopupImage, popupMestoInputTitle, popupMestoInputLink, closePopup, popupMesto };
