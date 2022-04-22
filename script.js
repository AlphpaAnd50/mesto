let nickname = document.querySelector('.profile__nickname');
let profession = document.querySelector('.profile__profession');
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button')
let popupNickname = document.querySelector('.popup__nickname');
let popupProfession = document.querySelector('.popup__profession');
let saveButton = document.querySelector('.popup__save-button');

function popupActive() {
  popup.style.display = 'flex';
};

function popupInactive() {
  popup.style.display = 'none';
};

function editProfile() {
  nickname.textContent = popupNickname.value;
  profession.textContent = popupProfession.value;
  popup.style.display = 'none';
};


popupNickname.value = nickname.textContent;
popupProfession.value = profession.textContent;

editButton.addEventListener('click', popupActive);
closeButton.addEventListener('click', popupInactive);
saveButton.addEventListener('click', editProfile);
