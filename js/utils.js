import FormValidator from "./FormValidator.js";
import { saveInfo, toggleSaveButton, opacityPage } from "./script.js";

/* Funcion para abrir Dialogs*/
function openDialog(dialogID) {
  const dialog = document.getElementById(dialogID);
  if (dialog) {
    dialog.show();
    opacityPage(true);
  }
}

/* Funcion para cerrar Dialogs*/

export function closeDialog(dialogID) {
  const dialog = document.getElementById(dialogID);
  if (dialog) {
    dialog.close();
    opacityPage(false);
  }
}

/* Script para cerrar dialogs clickeando afuera */

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

/* Profile edit */
const profileEdit = {
  open: openDialog,
  close: closeDialog,
  opacity: opacityPage,
  info: saveInfo,
  btn: toggleSaveButton,
};

document.getElementById("edit-button-open").addEventListener("click", () => {
  profileEdit.open("modal-edit");
});

document.getElementById("edit-button-close").addEventListener("click", () => {
  profileEdit.close("modal-edit");
});

document.getElementById("modal-edit").addEventListener("keydown", (e) => {
  if (e.key === "Escape") profileEdit.close("modal-edit");
});

document.getElementById("name").addEventListener("input", () => {
  profileEdit.btn("name", "job", "save-button");
});

document.getElementById("job").addEventListener("input", () => {
  profileEdit.btn("name", "job", "save-button");
});

document
  .getElementById("save-button")
  .addEventListener("click", function (evt) {
    saveInfo(evt, "name", "job", "profile-name", "profile-job");
    profileEdit.close("modal-edit");
  });

/*Profile Add */
const profileAdd = {
  open: openDialog,
  close: closeDialog,
  opacity: opacityPage,
  btn: toggleSaveButton,
};

document.getElementById("add-button-open").addEventListener("click", () => {
  profileAdd.open("modal-add");
  profileAdd.btn("title", "imageURL", "save-button-add");
});

document.getElementById("add-button-close").addEventListener("click", () => {
  profileAdd.close("modal-add");
});

document.getElementById("modal-add").addEventListener("keydown", (e) => {
  if (e.key === "Escape") profileAdd.close("modal-add");
});

document.getElementById("title").addEventListener("input", () => {
  profileAdd.btn("title", "imageURL", "save-button-add");
});

document.getElementById("imageURL").addEventListener("input", () => {
  profileAdd.btn("title", "imageURL", "save-button-add");
});
