//Imports
import FormValidator from "./FormValidator.js";
import { Card } from "./Card.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopUpWithImage.js";
import PopUpWithForm from "./PopUpWithForm.js";
import UserInfo from "./UserInfo.js";
import deleteCard from "./utils.js";

/* Cards iniciales */

const initialCards = [
  {
    title: "Chichén Itzá",
    image:
      "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Monte Fuji",
    image:
      "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tromsø",
    image:
      "https://images.unsplash.com/photo-1669887961943-54dd571fb287?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Bali",
    image:
      "https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=1049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Brujas",
    image:
      "https://images.unsplash.com/photo-1554413360-fa283dd6a1ec?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cholula",
    image:
      "https://images.unsplash.com/photo-1667277310912-585fb643f7c8?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

/* Instancias */

// Instancia de cards iniciales
const cardList = new Section(
  {
    item: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#template-selector");
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  },
  ".element-list__item"
);
cardList.renderItems();

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
});

//
//
//
//
//
//
/* Funciones que se deben ir eliminando */
/* Funcion para agregar cards */
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("save-button-add")
    .addEventListener("click", function (evt) {
      evt.preventDefault();

      const title = document.querySelector("#title").value;
      const imageURL = document.querySelector("#imageURL").value;

      const newCardData = {
        title: title,
        image: imageURL,
      };

      initialCards.push(newCardData);

      const card = new Card(newCardData, "#template-selector");

      const cardElement = card.generateCard();
      document.querySelector(".element-list__item").prepend(cardElement);

      document.getElementById("title").value = "";
      document.getElementById("imageURL").value = "";

      setupImageModal(
        ".element__button-image",
        "#modal-image",
        "#dialog-image",
        "#dialog-title",
        "#dialog-close-button"
      );

      closeDialog("modal-add", "profile-form");
    });
});
