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
  UserInfoClass,
} from "../../utils/constants.js";

//??????
const PopupProfileWithFormClass = new PopupWithForm(popupProfile, {
  formSubmit: (nameNew, jobNew) => {
    UserInfoClass.setUserInfo({ nameNew, jobNew });
  },
});

const popupMestoWithFormClass = new PopupWithForm(popupMesto, {
  formSubmit: (name, link) => {
    addCards([{ name: name, link: link }]);
  },
});

//ФУНКЦИИ

//Функции открытия попапов

//Попап профиль
function openPopupProfile() {
  UserInfoClass.getUserInfo();
  popupProfileInputNickname.value = UserInfoClass.getUserInfo().name;
  popupProfileInputProfession.value = UserInfoClass.getUserInfo().job;

  PopupProfileClass.open();
  formChangeProfile.resetValidation();
}

//Попап место
function openPopupMesto() {
  popupMestoClass.open();
  formAddMesto.resetValidation();
}

//Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//Функция редактирования профиля
function editProfile() {
  nickname.textContent = popupProfileInputNickname.value;
  profession.textContent = popupProfileInputProfession.value;
}

//Валидация
function Validator() {
  formChangeProfile.enableValidation();
  formAddMesto.enableValidation();
}

Validator();

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
              const popupImageWithImageClass = new PopupWithImage(popupImage, link, text);
              popupImageWithImageClass.open();
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

//Слушатели событий
popupImageClass.setEventListeners();

PopupProfileWithFormClass.setEventListeners();
popupMestoWithFormClass.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  openPopupProfile();
});

buttonAddСards.addEventListener("click", () => {
  openPopupMesto();
});

export {};
