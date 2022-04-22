let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button')
let saveButton = document.querySelector('.popup__save-button');

function popupActive() {
  let popup = document.querySelector('.popup');

  popup.style.display = 'flex';
};

function popupInactive() {
  let popup = document.querySelector('.popup');

  popup.style.display = 'none';
};

function editProfile() {
  let popup = document.querySelector('.popup');
  let nickname = document.querySelector('.profile__nickname');
  let profession = document.querySelector('.profile__profession');
  let popupNickname = document.querySelector('.popup__nickname');
  let popupProfession = document.querySelector('.popup__profession');

  nickname.textContent = popupNickname.value;
  profession.textContent = popupProfession.value;
  popup.style.display = 'none';

  popupNickname.value = nickname.textContent;
  popupProfession.value = profession.textContent;
};

editButton.addEventListener('click', popupActive);
closeButton.addEventListener('click', popupInactive);
saveButton.addEventListener('click', editProfile);
