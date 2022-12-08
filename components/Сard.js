export default class Card {
  constructor({ data, handleCardClick, handleDeleteClick }, selectorTemplate, userId, api) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._userId = userId.textContent;

    this._handleCardClick = handleCardClick;

    this._handleDeleteClick = handleDeleteClick;

    this._selectorTemplate = selectorTemplate;

    this._api = api;
  }
  //Получение шаблона
  _getTemplate() {
    const cardElement = document
      .querySelector(this._selectorTemplate)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }
  // Создание карточки
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__text").textContent = this._name;
    this._element.querySelector(".element__image").alt = this._name;
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__likes-nombre").textContent = this._likes.length;

    if (this._ownerId !== this._userId) {
      this._element
        .querySelector(".element__delete-button")
        .classList.add("element__delete-button_inactive");
    }

    this._likes.forEach((element) => {
      if (this._userId == element._id) {
        this._element
          .querySelector(".element__like-button")
          .classList.add("element__like-button_active");
      }
    });

    return this._element;
  }

  // Лайк
  likeButton(evt) {
    if (this._element.querySelector(".element__like-button_active") == null) {
      this._api.putLike(this._cardId);
    } else {
      this._api.deleteLike(this._cardId);
    }

    // evt.target.classList.toggle("element__like-button_active");
  }

  // Удаление
  deletionCard() {
    // popupDeleteCard.open();
    this._handleDeleteClick(this._cardId);
  }

  // Слушатели
  _setEventListeners() {
    const image = this._element.querySelector(".element__image");
    const likeButton = this._element.querySelector(".element__like-button");
    const removeButton = this._element.querySelector(".element__delete-button");
    // Открыте картинки
    image.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
    // Лайк
    likeButton.addEventListener("click", (evt) => {
      this.likeButton(evt);
    });
    // Удаление карточки
    removeButton.addEventListener("click", () => {
      this.deletionCard();
    });
  }
}
