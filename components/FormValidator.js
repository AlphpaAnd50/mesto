// ИМПОРТ

//src
import {} from "../src/pages/index.js";

//КЛАСС

export const config = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

export class FormValidator {
  constructor(config, validationForm) {
    this._inputSelector = Array.from(validationForm.querySelectorAll(config.inputSelector));
    this._submitButtonSelector = validationForm.querySelector(config.submitButtonSelector);
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._validationForm = validationForm;
  }
  // Включить проверку
  enableValidation() {
    this._addEventListener();
  }
  //Очищаем ошибки
  resetValidation() {
    this._toggleButtonState();

    this._inputSelector.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }
  //Функция появление ошибки
  _showInputError(inputElement) {
    const errorElement = this._validationForm.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }
  //Функция скрытия ошибки
  _hideInputError(inputElement) {
    const errorElement = this._validationForm.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }
  //Функция проверка правильности ввода
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
  //Функция переключениу состояний кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButtonSelector.classList.add(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = true;
    } else {
      this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
      this._submitButtonSelector.disabled = false;
    }
  }
  //Функция проверка на валидность
  _hasInvalidInput() {
    return this._inputSelector.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  // Слушатели
  _addEventListener() {
    this._validationForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._inputSelector.forEach((inputElement) => {
      this._toggleButtonState();
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
}
