//Imports
import FormValidator from "./FormValidator.js";
import { Card } from "./Card.js";
import { closeDialog } from "./utils.js";

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

/*  <-------------------Funciones--------------------->

/* Función para cargar las tarjetas iniciales */

initialCards.forEach((item) => {
  const card = new Card(item, "#template-selector");
  const cardElement = card.generateCard();

  document.querySelector(".element-list__item").append(cardElement);
});

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

/* Función para cambiar la información del perfil */
export const saveInfo = (
  evt,
  field1ID,
  field2ID,
  displayField1ID,
  displayField2ID
) => {
  evt.preventDefault();

  const field1 = document.getElementById(field1ID);
  const field2 = document.getElementById(field2ID);

  const field1Value = field1.value;
  const field2Value = field2.value;

  const displayField1 = document.getElementById(displayField1ID);
  const displayField2 = document.getElementById(displayField2ID);

  displayField1.textContent = field1Value;
  displayField2.textContent = field2Value;
};

/* Funcion para eliminar cards */
function deleteCard(event) {
  const cardToDelete = event.target.closest(".element");
  if (cardToDelete) {
    cardToDelete.remove();
  }
}

/* Funcion oscurecer pagina */
export function opacityPage(dim) {
  const elements = document.querySelectorAll(
    ".profile, .header, .elements, .footer, .element-list__item"
  );
  elements.forEach((element) => {
    element.style.opacity = dim ? "0.5" : "1";
  });
}
/*Funcion para abrir imagenes*/

function setupImageModal(
  buttonSelector,
  dialogSelector,
  imageSelector,
  titleSelector,
  closeButtonSelector
) {
  const imageButtons = document.querySelectorAll(buttonSelector);
  const imageModal = document.querySelector(dialogSelector);
  const modalImage = document.querySelector(imageSelector);
  const modalTitle = document.querySelector(titleSelector);
  const closeModalButton = document.querySelector(closeButtonSelector);

  imageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const imageURL = this.querySelector(".element__image").src;
      const title =
        this.closest(".element").querySelector("#card-title").textContent;

      modalImage.src = imageURL;
      modalTitle.textContent = title;
      imageModal.show();
      opacityPage(true);
    });
  });

  closeModalButton.addEventListener("click", function () {
    imageModal.close();
    opacityPage(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      imageModal.close();
      opacityPage(false);
    }
  });

  document.addEventListener("click", function (e) {
    if (
      imageModal.open &&
      !imageModal.contains(e.target) &&
      !e.target.closest(buttonSelector)
    ) {
      imageModal.close();
      opacityPage(false);
    }
  });
}

/* Funcion para desactivar boton */

export const toggleSaveButton = (input1ID, input2ID, buttonID) => {
  const inp1 = document.getElementById(input1ID);
  const inp2 = document.getElementById(input2ID);
  const btn = document.getElementById(buttonID);

  const validarInputs = () => {
    if (!inp1.validity.valid || !inp2.validity.valid) {
      btn.disabled = true;
      btn.style.backgroundColor = "transparent";
      btn.style.color = "#c4c4c4";
      btn.style.cursor = "not-allowed";
    } else {
      btn.disabled = false;
      btn.style.backgroundColor = "black";
      btn.style.color = "white";
      btn.style.cursor = "pointer";
    }
  };

  inp1.addEventListener("input", validarInputs);
  inp2.addEventListener("input", validarInputs);

  validarInputs();
};

document.addEventListener("DOMContentLoaded", () => {
  toggleSaveButton("name", "job", "save-button");
});

/* Profile delete*/
document.addEventListener("click", function (event) {
  if (event.target.matches(".element__button-delete *")) {
    deleteCard(event);
  }
});

/*Image show*/
document.addEventListener("DOMContentLoaded", function () {
  setupImageModal(
    ".element__button-image",
    "#modal-image",
    "#dialog-image",
    "#dialog-title",
    "#dialog-close-button"
  );
});

/*Script para ancho de imagen*/
document.addEventListener("DOMContentLoaded", () => {
  const popImage = document.getElementById("dialog-image");

  popImage.onload = () => {
    if (popImage.naturalWidth > popImage.naturalHeight) {
      // Imagen horizontal
      popImage.classList.add("element__modal_horizontal-image");
      popImage.classList.add("element__modal_horizontal-content");
      popImage.classList.remove("element__modal_vertical-image");
      popImage.classList.remove("element__modal_vertical-content");
    } else if (popImage.naturalHeight > popImage.naturalWidth) {
      // Imagen vertical
      popImage.classList.add("element__modal_vertical-image");
      popImage.classList.add("element__modal_vertical-content");
      popImage.classList.remove("element__modal_horizontal-image");
      popImage.classList.remove("element__modal_horizontal-content");
    }
  };
});

/* Form Validator */

const form1 = document.getElementById("profile-form");
const form2 = document.getElementById("add-card-form");

const infoValidation = new FormValidator(form1, {
  inputSelector: ".profile__edit-form-input",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  buttonSelector: "profile__edit-form-button",
});

infoValidation.enableValidation();

const imageValidation = new FormValidator(form2, {
  inputSelector: ".profile__edit-form-input",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
  buttonSelector: "profile__edit-form-button",
});

imageValidation.enableValidation();
