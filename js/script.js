//Imports
import FormValidator from "./FormValidator.js";
import { Card } from "./Card.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopUpWithForm from "./PopUpWithForm.js";
import UserInfo from "./UserInfo.js";
import deleteCard from "./utils.js";
import { handleCardClick, addNewCard } from "./utils.js";
// import { initialCards } from "./constants.js";
export { profileAdd, formValidationImage };

/* Instancias */

// API Cards

function getCardsInfo() {
  fetch("https://around-api.es.tripleten-services.com/v1/cards", {
    headers: {
      authorization: "354781f2-b486-4ab1-9379-468b53f9329e",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // Instancia de cards iniciales
      const cardList = new Section(
        {
          item: data,
          renderer: (item) => {
            const card = new Card(item, "#template-selector", handleCardClick);
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
          },
        },
        ".element-list__item"
      );
      cardList.renderItems();
    });
}

getCardsInfo();

// Instancia para agregar nuevas cards
const imageForm = document.querySelector("#add-card-form");
imageForm.addEventListener("submit", addNewCard);

// Instancia para abrir Popup editar perfil
const profileEdit = new Popup({
  dialogID: "#modal-edit",
  formID: "#profile-form",
  openButtonElement: "#edit-button-open",
  closeButtonElement: "#edit-button-close",
});

// Instancia para abrir Popup agregar imagen

const profileAdd = new Popup({
  dialogID: "#modal-add",
  formID: "#profile-form",
  openButtonElement: "#add-button-open",
  closeButtonElement: "#add-button-close",
});

// Instancia para abrir imagenes
const openImage = new PopupWithImage({
  openButtonElement: ".element__button-image",
  closeButtonElement: ".element__close-button",
  dialogID: "#modal-image",
});

/* Instancias de FormValidator */

const formValidationProfile = new FormValidator("#profile-form", {
  inputSelector: ".profile__edit-form-input",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  buttonSelector: ".profile__edit-form-button",
});
formValidationProfile.enableValidation();

formValidationProfile.toggleSaveButton(
  formValidationProfile.inputList,
  formValidationProfile.buttonElement
);

const formValidationImage = new FormValidator("#modal-add", {
  inputSelector: ".profile__edit-form-input",
  inputErrorClass: "#title-error",
  errorClass: "form__input-error_active",
  buttonSelector: ".profile__edit-form-button",
});
formValidationImage.enableValidation();

formValidationImage.toggleSaveButton(
  formValidationImage.inputList,
  formValidationImage.buttonElement
);

// Instancia pop up with form

const popupForm = new PopUpWithForm(
  (inputValues) => {
    info.setUserInfo(inputValues);
  },
  "#modal-edit",
  { dialogID: "#modal-edit" }
);
popupForm._getInputValues();

// instancia user info
const info = new UserInfo({
  nameSelector: "#profile-name",
  jobSelector: "#profile-job",
  avatarSelector: ".profile__avatar",
});
info.getProfileInfo();
