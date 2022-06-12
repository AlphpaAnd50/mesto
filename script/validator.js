
//Функция появление ошибки
function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
}

//Функция скрытия ошибки
function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
}

//Функция проверка правильности ввода
function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

//Функция установка слушателя событий
function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const button = formElement.querySelector(".form__save-button");
  toggleButtonState(inputList, button);
  inputList.forEach((inputElement) => {
    checkInputValidity(formElement, inputElement);
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, button);
    });
  });
}

//Функция    включить проверку
function enableValidation() {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {console.log(formElement);
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

//Функция проверка на валидность
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//Функция переключениу состояний кнопки
function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("form__save-button_inactive");
  } else {
    buttonElement.classList.remove("form__save-button_inactive");
  }
}

