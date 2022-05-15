/* function popupMestoActive() {
  const popupMesto = document.querySelector('.popup_type_mesto');
  popupMesto.classList.add('popup_opened');

  popupMesto.querySelector('.popup__close-button').addEventListener('click', ()=>popupMesto.classList.remove('popup_opened'));

  popupMesto.querySelector('.popup__form').addEventListener('submit', (evt)=>{
evt.preventDefault(); 

    const cardTemplate = document.querySelector('#element-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);



    cardElement.querySelector('.element__image').src = popupMesto.querySelector('.popup__input_type_Link').value;
    cardElement.querySelector('.element__text').textContent = popupMesto.querySelector('.popup__input_type_title').value;

    cards.prepend(cardElement)

    popupMesto.querySelector('.popup__input_type_Link').value = '';
    popupMesto.querySelector('.popup__input_type_title').value = '';

    popupMesto.classList.remove('popup_opened');
  })
} */

// addButton.addEventListener('click', popupMestoActive);