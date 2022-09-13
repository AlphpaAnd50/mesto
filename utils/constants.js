import { FormValidator, config } from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";

export const nickname = document.querySelector(".profile__nickname");
export const profession = document.querySelector(".profile__profession");

export const buttonEditProfile = document.querySelector(".profile__edit-button");
export const buttonAddСards = document.querySelector(".profile__add-button");

export const popupProfile = document.querySelector(".popup_type_profile");
export const popupProfileInputNickname = popupProfile.querySelector("#nickname-input");
export const popupProfileInputProfession = popupProfile.querySelector("#profession-input");

export const popupMesto = document.querySelector(".popup_type_mesto");
export const form = popupMesto.querySelector(".form");
export const popupMestoInputTitle = popupMesto.querySelector("#title-input");
export const popupMestoInputLink = popupMesto.querySelector("#link-input");

export const popupImage = document.querySelector(".popup_type_image");
export const image = popupImage.querySelector(".popup__image");
export const textImage = popupImage.querySelector(".popup__image-text");

export const cards = document.querySelector(".elements");

export const popupImageWithImage = new PopupWithImage(popupImage);

export const formChangeProfile = new FormValidator(config, changeProfile);
export const formAddMesto = new FormValidator(config, addMesto);

export const popupImageClass = new Popup(popupImage);

export const userInfoClass = new UserInfo({
  userNameSelector: nickname,
  userDescriptionSelector: profession,
});

export const initialCards = [
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
