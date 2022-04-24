let nickname = document.querySelector('.profile__nickname');
let profession = document.querySelector('.profile__profession');
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let popupNickname = document.querySelector('.popup__input_nickname');
let popupProfession = document.querySelector('.popup__input_profession');
let saveButton = document.querySelector('.popup__form');

function popupActive() {

  popup.classList.add('popup_opened');

  popupNickname.value = nickname.textContent;
  popupProfession.value = profession.textContent;
}

function popupInactive() {

  popup.classList.remove('popup_opened');
}

function editProfile() {
  
  nickname.textContent = popupNickname.value;
  profession.textContent = popupProfession.value;

  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupActive);
closeButton.addEventListener('click', popupInactive);
saveButton.addEventListener('submit', editProfile);
