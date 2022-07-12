// Импорт
import { buttonEditProfile, buttonAddСards } from "./index.js";

//Функция появление ошибки
function showInputError(formElement, inputElement, errorMessage, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

//Функция скрытия ошибки
function hideInputError(formElement, inputElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
}

//Функция проверка правильности ввода
function checkInputValidity(formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
}

//Функция установка слушателя событий
function setEventListeners(formElement, config) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const button = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, button, config);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, button, config);
    });
  });
}

//Функция    включить проверку
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
}

//Функция проверка на валидность
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//Функция переключениу состояний кнопки
function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

// enableValidation({
//   formSelector: ".form",
//   inputSelector: ".form__input",
//   submitButtonSelector: ".form__save-button",
//   inactiveButtonClass: "form__save-button_inactive",
//   inputErrorClass: "form__input_type_error",
//   errorClass: "form__input-error_active",
// });

export {enableValidation}

//________________________________________________


class FormValidator {
  constructor(config, validationForm) {
    // this._formSelector = config.formSelector;

    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._validationForm = validationForm;
  }

  _getTemplate() {
    const formElement = document.querySelector(this._validationForm);

    return formElement;
  }

  enableValidation() {
    this._element = this._getTemplate;
  }

  _addEventListener() {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
}

function Validator(isGrid) {

  if (isGrid === true) {
    console.log();
  } else {
    
  }

  const name = new FormValidator(
    {
      formSelector: ".form",
      inputSelector: ".form__input",
      submitButtonSelector: ".form__save-button",
      inactiveButtonClass: "form__save-button_inactive",
      inputErrorClass: "form__input_type_error",
      errorClass: "form__input-error_active",
    },
    editProfile
  );
}

/* buttonEditProfile.addEventListener("click", () => {
  Validator(true)
});

buttonAddСards.addEventListener("click", () => {
  Validator(false)
}); */
