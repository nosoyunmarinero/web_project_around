import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";
import { saveInfo } from "./script.js";

/* Funcion para abrir Dialogs*
function openDialog(dialogID, formID) {
  const dialog = document.getElementById(dialogID);
  const form = document.getElementById(formID);

  if (dialog && form) {
    dialog.show();

    const formValidation = new FormValidator(form, {
      inputSelector: ".profile__edit-form-input",
      inputErrorClass: "form__input_type_error",
      errorClass: "form__input-error_active",
      buttonSelector: ".profile__edit-form-button",
    });
    formValidation.enableValidation();

    formValidation.toggleSaveButton(
      formValidation.inputList,
      formValidation.buttonElement
    );

    opacityPage(true);
  }
}

/* Funcion para cerrar Dialogs*

export function closeDialog(dialogID, formID) {
  const dialog = document.getElementById(dialogID);
  const form = document.getElementById(formID);
  if (dialog) {
    dialog.close();
    opacityPage(false);
    form.reset();
  }
}

/* Script para cerrar dialogs clickeando afuera *

document.addEventListener("click", (e) => {
  const modalEdit = document.getElementById("modal-edit");
  const modalAdd = document.getElementById("modal-add");
  const isEditOpen = modalEdit.open;
  const isAddOpen = modalAdd.open;

  if (
    isEditOpen &&
    !modalEdit.contains(e.target) &&
    e.target.id !== "edit-button-open"
  ) {
    profileEdit.close("modal-edit");
  }

  if (
    isAddOpen &&
    !modalAdd.contains(e.target) &&
    e.target.id !== "add-button-open"
  ) {
    profileAdd.close("modal-add");
  }
});

/*       <-------------------Controladores de eventos--------------------->        */

/* Profile edit *
const profileEdit = {
  open: openDialog,
  close: closeDialog,
  opacity: opacityPage,
  info: saveInfo,
};

document.getElementById("edit-button-open").addEventListener("click", () => {
  profileEdit.open("modal-edit", "profile-form");
});

document.getElementById("edit-button-close").addEventListener("click", () => {
  profileEdit.close("modal-edit", "profile-form");
});

document.getElementById("modal-edit").addEventListener("keydown", (e) => {
  if (e.key === "Escape") profileEdit.close("modal-edit");
});

document
  .getElementById("save-button")
  .addEventListener("click", function (evt) {
    saveInfo(evt, "name", "job", "profile-name", "profile-job");
    profileEdit.close("modal-edit");
  });

/*Profile Add *
const profileAdd = {
  open: openDialog,
  close: closeDialog,
  opacity: opacityPage,
};

document.getElementById("add-button-open").addEventListener("click", () => {
  profileAdd.open("modal-add", "add-card-form");
});

document.getElementById("add-button-close").addEventListener("click", () => {
  profileAdd.close("modal-add", "add-card-form");
});

document.getElementById("modal-add").addEventListener("keydown", (e) => {
  if (e.key === "Escape") profileAdd.close("modal-add");
});
*/

const profileEdit = new Popup({
  dialogID: "#modal-edit",
  formID: "#profile-form",
  openButtonElement: "#edit-button-open",
  closeButtonElement: "#edit-button-close",
});

const profileAdd = new Popup({
  dialogID: "#modal-add",
  formID: "#profile-form",
  openButtonElement: "#add-button-open",
  closeButtonElement: "#add-button-close",
});
