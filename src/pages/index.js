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
  popupDeleteCard,
  cards,
  formChangeProfile,
  formAddMesto,
  initialCards,
  userInfoClass,
  popupImageWithImage,
  api,
} from "../../utils/constants.js";
//-------------------------------------------------------------------------------------------------

// Запросы-----------------------------------------------------------------------------------------
const promiseUserInfo = new Promise((resolve, reject) => {
  resolve(api.getUserInfo());
})
  .then((result) => {
    avatar.src = result.avatar;
    nickname.textContent = result.name;
    profession.textContent = result.about;
    return result;
  })
  .catch((error) => {
    console.log(`promiseUserInfo ${error}`);
  });

const promiseCards = new Promise((resolve, reject) => {
  resolve(api.getInitialCards());
})
  .then((result) => {
    creatCards(result);
    return result;
  })
  .catch((error) => {
    console.log(`promiseCards ${error}`);
  });

// api.patchUserInfo({ name: "Marie Skłodowska Curie", about: "Physicist and Chemist" });
/* api.patchNewCards({
  name: "Байкал",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
}); */

// Открытие попапов--------------------------------------------------------------------------------
// Профиль
function openPopupProfile() {
  userInfoClass.getUserInfo();
  popupProfileInputNickname.value = userInfoClass.getUserInfo().name;
  popupProfileInputProfession.value = userInfoClass.getUserInfo().job;
  profilePopup.open();
  formChangeProfile.resetValidation();
}

//Место
function openPopupMesto() {
  mestoPopup.open();
  formAddMesto.resetValidation();
}
//-------------------------------------------------------------------------------------------------

// Сабмит попапов----------------------------------------------------------------------------------
// Профиль
const profilePopup = new PopupWithForm(popupProfile, {
  formSubmit: ({ nickname, profession }) => {
    userInfoClass.setUserInfo({ nickname, profession });
    api.patchUserInfo({ name: nickname, about: profession });
  },
});

// Место
const mestoPopup = new PopupWithForm(popupMesto, {
  formSubmit: ({ title, link }) => {
    // addCards({ name: title, link: link });
    api.patchNewCards({
      name: title,
      link: link,
    });
  },
});
//-------------------------------------------------------------------------------------------------

// Карточки----------------------------------------------------------------------------------------
// Создание карточек
function creatCards(result) {
  const sectionClass = new Section(
    {
      items: result,
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
}

//-------------------------------------------------------------------------------------------------

// Валидация
formChangeProfile.enableValidation();
formAddMesto.enableValidation();

// Слушатели событий-------------------------------------------------------------------------------
popupImageWithImage.setEventListeners();
profilePopup.setEventListeners();
mestoPopup.setEventListeners();

popupDeleteCard.setEventListeners()

buttonEditProfile.addEventListener("click", () => {
  openPopupProfile();
});

buttonAddСards.addEventListener("click", () => {
  openPopupMesto();
});
//-------------------------------------------------------------------------------------------------
