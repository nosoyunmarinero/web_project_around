export default class Popup {
  constructor(popupSelector) {
    this._PopupSelector = document.querySelector(popupSelector);
  }

  // Funcion para abrir Dialogs
  openDialog(dialogID, formID) {
    const dialog = document.getElementById(dialogID);
    const form = document.getElementById(formID);

    if (dialog) {
      dialog.show();

      opacityPage(true);
    }
  }

  // Cerrar dialog
  closeDialog(dialogID, formID) {
    const dialog = document.getElementById(dialogID);
    const form = document.getElementById(formID);
    if (dialog) {
      dialog.close();
      opacityPage(false);
      form.reset();
    }
  }
}
