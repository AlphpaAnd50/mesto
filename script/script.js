const nickname = document.querySelector('.profile__nickname');
const profession = document.querySelector('.profile__profession');

const editButton = document.querySelector('.profile__edit-button');

const addButton = document.querySelector('.profile__add-button');

const closeButton = document.querySelectorAll('.popup__close-button')

const popupProfile = document.querySelector('.popup_type_profile');
const popupMesto = document.querySelector('.popup_type_mesto');

const cards = document.querySelector('.elements');


function popupActive(popup) {
  popup.classList.add('popup_opened');

  if (popup===popupProfile) {
    popupProfile.querySelector('.popup__input_type_nickname').value = nickname.textContent;
    popupProfile.querySelector('.popup__input_type_profession').value = profession.textContent;
  } else if (popup===popupMesto) {
    popupMesto.querySelector('.popup__input_type_title').value = '';
    popupMesto.querySelector('.popup__input_type_Link').value = '';
  }
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

function editProfile(evt) {
  evt.preventDefault()

  nickname.textContent = popupProfile.querySelector('.popup__input_type_nickname').value;
  profession.textContent = popupProfile.querySelector('.popup__input_type_profession').value;

  popupClose(popupProfile)
} 

function likeActive(evt) {
  evt.target.classList.toggle('element__like-button_active')
}

function cardClose(evt) {
  evt.target.closest('.element').remove();
}

function addMesto(evt) {
  evt.preventDefault()
  
  const cardTemplate = document.querySelector('#element-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__image').src = popupMesto.querySelector('.popup__input_type_Link').value;
  cardElement.querySelector('.element__text').textContent = popupMesto.querySelector('.popup__input_type_title').value;

  cardElement.querySelector('.element__like-button').addEventListener('click', likeActive)
  cardElement.querySelector('.element__delete-button').addEventListener('click', cardClose)

  cards.prepend(cardElement)

  popupClose(popupMesto)
}

editButton.addEventListener('click', ()=> popupActive(popupProfile));
addButton.addEventListener('click', ()=> popupActive(popupMesto));

popupProfile.querySelector('.popup__close-button').addEventListener('click', ()=> popupClose(popupProfile));
popupMesto.querySelector('.popup__close-button').addEventListener('click', ()=> popupClose(popupMesto));

popupProfile.querySelector('.popup__form').addEventListener('submit', editProfile);
popupMesto.querySelector('.popup__form').addEventListener('submit', addMesto);




