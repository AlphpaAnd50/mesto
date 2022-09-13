// ИМПОРТ
import "./index.css";

//компоненты
import Card from "../../components/Сard.js";
import Section from "../../components/Section.js";
import PopupWithImage from "../../components/PopupWithImage.js";
import PopupWithForm from "../../components/PopupWithForm.js";
// Переменне
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
} from "../../utils/constants.js";

//??????
const profilePopup = new PopupWithForm(popupProfile, {
  formSubmit: ({ nickname, profession }) => {
    userInfoClass.setUserInfo({ nickname, profession });
  },
});

const mestoPopup = new PopupWithForm(popupMesto, {
  formSubmit: ({ title, link }) => {
    addCards([{ name: title, link: link }]);
  },
});

//ФУНКЦИИ

//Функции открытия попапов

//Попап профиль
function openPopupProfile() {
  userInfoClass.getUserInfo();
  popupProfileInputNickname.value = userInfoClass.getUserInfo().name;
  popupProfileInputProfession.value = userInfoClass.getUserInfo().job;

  profilePopup.open();
  formChangeProfile.resetValidation();
}

//Попап место
function openPopupMesto() {
  mestoPopup.open();
  formAddMesto.resetValidation();
}

// Карточки
function addCards(card = initialCards) {
  const sectionClass = new Section(
    {
      items: card,
      renderer: (data) => {
        const cardClass = new Card(
          {
            data,
            handleCardClick: (link, text) => {
              const popupImageWithImage = new PopupWithImage(popupImage, link, text);
              popupImageWithImage.open();
            },
          },
          "#element-template"
        );
        const cardElement = cardClass.generateCard();
        sectionClass.addItem(cardElement);
      },
    },
    cards
  );
  sectionClass.renderItems();
}

addCards();

//Валидация
formChangeProfile.enableValidation();
formAddMesto.enableValidation();

//Слушатели событий
popupImageClass.setEventListeners();

profilePopup.setEventListeners();
mestoPopup.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  openPopupProfile();
});

buttonAddСards.addEventListener("click", () => {
  openPopupMesto();
});
