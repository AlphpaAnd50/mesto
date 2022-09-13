// ИМПОРТ------------------------------------------------------------------------------------------
import "./index.css";

// Компоненты
import Card from "../../components/Сard.js";
import Section from "../../components/Section.js";
import PopupWithForm from "../../components/PopupWithForm.js";
//-------------------------------------------------------------------------------------------------

// Переменне---------------------------------------------------------------------------------------
import {
  nickname,
  profession,
  buttonEditProfile,
  buttonAddСards,
  popupProfile,
  popupProfileInputNickname,
  popupProfileInputProfession,
  popupMesto,
  popupImage,
  cards,
  formChangeProfile,
  formAddMesto,
  initialCards,
  PopupProfileClass,
  popupMestoClass,
  popupImageClass,
  userInfoClass,
  popupImageWithImage,
} from "../../utils/constants.js";
//-------------------------------------------------------------------------------------------------

// Открытие попапов--------------------------------------------------------------------------------
// Профиль
function openPopupProfile() {
  userInfoClass.getUserInfo();
  popupProfileInputNickname.value = userInfoClass.getUserInfo().name;
  popupProfileInputProfession.value = userInfoClass.getUserInfo().job;
  profilePopup.open();
  formChangeProfile.resetValidation();
}

// Место
const mestoPopup = new PopupWithForm(popupMesto, {
  formSubmit: ({ title, link }) => {
    addCards({ name: title, link: link });
  },
});
//-------------------------------------------------------------------------------------------------

// Сабмит попапов----------------------------------------------------------------------------------
// Профиль
const profilePopup = new PopupWithForm(popupProfile, {
  formSubmit: ({ nickname, profession }) => {
    userInfoClass.setUserInfo({ nickname, profession });
  },
});

//Место
function openPopupMesto() {
  mestoPopup.open();
  formAddMesto.resetValidation();
}
//-------------------------------------------------------------------------------------------------

// Карточки----------------------------------------------------------------------------------------
// Создание карточек
const sectionClass = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      addCards(data);
    },
  },
  cards
);
sectionClass.renderItems();

// Создание карточки
function addCards(data) {
  const cardClass = new Card(
    {
      data,
      handleCardClick: (link, text) => {
        popupImageWithImage.open(link, text);
      },
    },
    "#element-template"
  );
  const cardElement = cardClass.generateCard();
  sectionClass.addItem(cardElement);
}
//-------------------------------------------------------------------------------------------------

// Валидация
formChangeProfile.enableValidation();
formAddMesto.enableValidation();

// Слушатели событий-------------------------------------------------------------------------------
popupImageClass.setEventListeners();

profilePopup.setEventListeners();
mestoPopup.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  openPopupProfile();
});

buttonAddСards.addEventListener("click", () => {
  openPopupMesto();
});
//-------------------------------------------------------------------------------------------------
