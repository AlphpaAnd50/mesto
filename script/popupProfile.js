// function popupProfileActive() {
//   const popupProfile = document.querySelector('.popup_type_profile');
//   popupProfile.classList.add('popup_opened');

//   popupProfile.querySelector('.popup__input_type_nickname').value = nickname.textContent
//   popupProfile.querySelector('.popup__input_type_profession').value = profession.textContent

//   popupProfile.querySelector('.popup__close-button').addEventListener('click', ()=>popupProfile.classList.remove('popup_opened'));

//   popupProfile.querySelector('.popup__form').addEventListener('submit', (evt)=>{
//     evt.preventDefault();

//     nickname.textContent = popupProfile.querySelector('.popup__input_type_nickname').value
//     profession.textContent = popupProfile.querySelector('.popup__input_type_profession').value

//     popupProfile.classList.remove('popup_opened')
//   })
// }

// editButton.addEventListener('click', popupProfileActive);