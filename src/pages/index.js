// ИМПОРТ------------------------------------------------------------------------------------------
import "./index.css";

// Компоненты
import Card from "../../components/Сard.js";
import Section from "../../components/Section.js";
import PopupWithForm from "../../components/PopupWithForm.js";
//-------------------------------------------------------------------------------------------------

// Переменне---------------------------------------------------------------------------------------
import {
  buttonEditAvatar,
  buttonEditProfile,
  buttonAddСards,
  avatar,
  nickname,
  profession,
  userId,
  popupAvatarEbit,
  popupProfile,
  popupAvatarEbitInput,
  popupProfileInputNickname,
  popupProfileInputProfession,
  popupMesto,
  popupDeleteCard,
  cards,
  formAvatarEdit,
  formChangeProfile,
  formAddMesto,
  userInfoClass,
  popupImageWithImage,
  api,
} from "../../utils/constants.js";
//-------------------------------------------------------------------------------------------------

// Запросы-----------------------------------------------------------------------------------------
// Инормация о пользователи
const promiseUserInfo = new Promise((resolve, reject) => {
  resolve(api.getUserInfo());
})
  .then((result) => {
    avatar.src = result.avatar;
    nickname.textContent = result.name;
    profession.textContent = result.about;
    userId.textContent = result._id;
    return result;
  })
  .catch((error) => {
    console.log(`promiseUserInfo ${error}`);
  });

// Карточки
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
// api.deleteCards("637ca36685aeea1779bdd057")
// api.patchUserAvatar({ avatar: "https://i.playground.ru/i/pix/1478431/image.jpg" });

//-------------------------------------------------------------------------------------------------

// Открытие попапов--------------------------------------------------------------------------------
// Аватар
function openPopupAvatar() {
  userInfoClass.getUserInfo();
  popupAvatarEbitInput.value = userInfoClass.getUserInfo().avatar;
  avatarEditPopup.open();
  formAvatarEdit.resetValidation();
}

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
// Аватар
const avatarEditPopup = new PopupWithForm(popupAvatarEbit, {
  formSubmit: ({ avatar }) => {
    userInfoClass.setUserAvatar({ avatar });
    api.patchUserAvatar({
      avatar,
    });
  },
});

// Профиль
const profilePopup = new PopupWithForm(popupProfile, {
  formSubmit: ({ nickname, profession }) => {
    userInfoClass.setUserInfo({ nickname, profession });
    api.patchUserInfo({
      name: nickname,
      about: profession,
    });
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
        handleDeleteClick: (cardId) => {
          popupDeleteCard.open(cardId);
        },
      },
      "#element-template",
      userId
    );
    const cardElement = cardClass.generateCard();
    sectionClass.addItem(cardElement);
  }
}

//-------------------------------------------------------------------------------------------------

// Валидация
formAvatarEdit.enableValidation();
formChangeProfile.enableValidation();
formAddMesto.enableValidation();

// Слушатели событий-------------------------------------------------------------------------------
avatarEditPopup.setEventListeners()
profilePopup.setEventListeners();
mestoPopup.setEventListeners();
popupImageWithImage.setEventListeners();

popupDeleteCard.setEventListeners();

buttonEditAvatar.addEventListener("click", () => {
  openPopupAvatar();
});

buttonEditProfile.addEventListener("click", () => {
  openPopupProfile();
});

buttonAddСards.addEventListener("click", () => {
  openPopupMesto();
});
//-------------------------------------------------------------------------------------------------
