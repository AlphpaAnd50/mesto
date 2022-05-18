const nickname = document.querySelector(".profile__nickname");
const profession = document.querySelector(".profile__profession");

const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonAddСards = document.querySelector(".profile__add-button");
const buttonClosePopup = document.querySelectorAll(".popup__close-button");

const popupProfile = document.querySelector(".popup_type_profile");
const popupProfileInputNickname = popupProfile.querySelector(
  ".popup__input_type_nickname"
);
const popupProfileInputProfession = popupProfile.querySelector(
  ".popup__input_type_profession"
);

const popupMesto = document.querySelector(".popup_type_mesto");
const popupMestoInputTitle = popupMesto.querySelector(
  ".popup__input_type_title"
);
const popupMestoInputLink = popupMesto.querySelector(".popup__input_type_Link");

const popupImage = document.querySelector(".popup_type_image");

const cards = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element-template").content;

function openPopup(popup) {
  popup.classList.add("popup_opened");
  // popup.classList.remove("popup_closed")

  popupProfileInputNickname.value = nickname.textContent;
  popupProfileInputProfession.value = profession.textContent;

  popupMestoInputTitle.value = "";
  popupMestoInputLink.value = "";
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  // popup.classList.add("popup_closed");
}

function editProfile(evt) {
  evt.preventDefault();

  nickname.textContent = popupProfileInputNickname.value;
  profession.textContent = popupProfileInputProfession.value;

  closePopup(popupProfile);
}

function activeLike(evt) {
  evt.target.classList.toggle("element__like-button_active");
}

function removeСard(evt) {
  evt.target.closest(".element").remove();
}

function openImage(link ,text) {
  const image = popupImage.querySelector(".popup__image");
  const textImage = popupImage.querySelector(".popup__image-text");
  image.src = link.src;
  image.alt = link.alt;
  textImage.textContent = text.textContent

  openPopup(popupImage);
}

initialCards.forEach((element) => {
  addCards(element.link, element.name);
});

function addCards(link, name) {
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
  imageElement.addEventListener("click", ()=>openImage(imageElement, textElement));

  cards.prepend(cardElement);

  closePopup(popupMesto);
}

function createCard(evt) {
  evt.preventDefault();

  addCards(popupMestoInputLink.value, popupMestoInputTitle.value);
}

buttonEditProfile.addEventListener("click", () => openPopup(popupProfile));
buttonAddСards.addEventListener("click", () => openPopup(popupMesto));

popupProfile
  .querySelector(".popup__close-button")
  .addEventListener("click", () => closePopup(popupProfile));
popupMesto
  .querySelector(".popup__close-button")
  .addEventListener("click", () => closePopup(popupMesto));
popupImage
  .querySelector(".popup__close-button")
  .addEventListener("click", () => closePopup(popupImage));

popupProfile
  .querySelector(".popup__form")
  .addEventListener("submit", editProfile);
popupMesto.querySelector(".popup__form").addEventListener("submit", createCard);
