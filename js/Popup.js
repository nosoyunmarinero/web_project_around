import FormValidator from "./FormValidator";

class Popup {
  constructor(popupSelector) {
    this._PopupSelector = document.querySelector(popupSelector);
  }

  // Funcion para abrir Dialogs
  openDialog(dialogID, formID, { Data }) {
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
}
