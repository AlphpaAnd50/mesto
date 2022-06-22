// Переменне
const nickname = document.querySelector(".profile__nickname");
const profession = document.querySelector(".profile__profession");

const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonAddСards = document.querySelector(".profile__add-button");

const popupProfile = document.querySelector(".popup_type_profile");
const popupProfileInputNickname = popupProfile.querySelector("#nickname-input");
const popupProfileInputProfession =
  popupProfile.querySelector("#profession-input");

const popupMesto = document.querySelector(".popup_type_mesto");
const popupMestoInputTitle = popupMesto.querySelector("#title-input");
const popupMestoInputLink = popupMesto.querySelector("#link-input");

const popupImage = document.querySelector(".popup_type_image");
const image = popupImage.querySelector(".popup__image");
const textImage = popupImage.querySelector(".popup__image-text");

const cards = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element-template").content;

//Функции открытия попапов
function openPopupProfile() {
  popupProfileInputNickname.value = nickname.textContent;
  popupProfileInputProfession.value = profession.textContent;
  openPopup(popupProfile);
}

function openPopupMesto() {
  popupMestoInputTitle.value = "";
  popupMestoInputLink.value = "";
  openPopup(popupMesto);
}

function openPopupImage(link, text) {
  image.src = link.src;
  image.alt = link.alt;
  textImage.textContent = text.textContent;

  openPopup(popupImage);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", doSomething);
}

//Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", doSomething);
}

//Функция закрытия на ESC
function doSomething(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

//Функция редактирования профиля
function editProfile() {
  nickname.textContent = popupProfileInputNickname.value;
  profession.textContent = popupProfileInputProfession.value;

  closePopup(popupProfile);
}

//Функция лайка

function activeLike(evt) {
  evt.target.classList.toggle("element__like-button_active");
}

//Функция удаления карточки

function removeСard(evt) {
  evt.target.closest(".element").remove();
}

//Добовление 6 карточек

initialCards.forEach((element) => {
  cards.prepend(createCard(element.link, element.name));
});

//Функция добавления карточки

function addCard() {
  cards.prepend(
    createCard(popupMestoInputLink.value, popupMestoInputTitle.value)
  );
  closePopup(popupMesto);
}

//Функция создания карточки

function createCard(link, name) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const imageElement = cardElement.querySelector(".element__image");
  const textElement = cardElement.querySelector(".element__text");

  imageElement.src = link;
  imageElement.alt = name;
  textElement.textContent = name;

  cardElement
    .querySelector(".element__like-button")
    .addEventListener("click", activeLike);
  cardElement
    .querySelector(".element__delete-button")
    .addEventListener("click", removeСard);
  imageElement.addEventListener("click", () =>
    openPopupImage(imageElement, textElement)
  );

  return cardElement;
}

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

popupProfile.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(popupProfile);
  }
});
popupMesto.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(popupMesto);
  }
});
popupImage.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(popupImage);
  }
});

popupProfile.querySelector(".form").addEventListener("submit", (evt) => {
  evt.preventDefault();
  editProfile();
});

popupMesto.querySelector(".form").addEventListener("submit", (evt) => {
  evt.preventDefault();
  addCard();
});
