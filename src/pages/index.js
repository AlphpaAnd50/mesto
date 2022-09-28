// ИМПОРТ------------------------------------------------------------------------------------------
import "./index.css";

// Компоненты
import Card from "../../components/Сard.js";
import Section from "../../components/Section.js";
import PopupWithForm from "../../components/PopupWithForm.js";
//-------------------------------------------------------------------------------------------------

// Переменне---------------------------------------------------------------------------------------
import {
  buttonEditProfile,
  buttonAddСards,
  avatar,
  nickname,
  profession,
  popupProfile,
  popupProfileInputNickname,
  popupProfileInputProfession,
  popupMesto,
  cards,
  formChangeProfile,
  formAddMesto,
  initialCards,
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
popupImageWithImage.setEventListeners();
profilePopup.setEventListeners();
mestoPopup.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  openPopupProfile();
});

buttonAddСards.addEventListener("click", () => {
  openPopupMesto();
});
//-------------------------------------------------------------------------------------------------

// Запросы-----------------------------------------------------------------------------------------
// Информация о пользователе
fetch("https://nomoreparties.co/v1/cohort-51/users/me", {
  headers: {
    authorization: "24ace598-6ee1-43a3-ab45-9d4737e73407",
  },
})
  .then((res) => res.json())
  .then((result) => {
    avatar.src = result.avatar;
    nickname.textContent = result.name;
    profession.textContent = result.about;
  })
  .catch((err) => {
    console.log(`userInf ${err}`);
  });

// Карточки
/* fetch("https://mesto.nomoreparties.co/v1/cohort-51/cards", {
  headers: {
    authorization: "24ace598-6ee1-43a3-ab45-9d4737e73407",
  },
})
  .then((res) => res.json())
  .then((result) => {
    result.forEach((element) => {
      addCards(element);
    });
  })
  .catch((err) => {
    console.log(`userInf ${err}`);
  }); */
//-------------------------------------------------------------------------------------------------
