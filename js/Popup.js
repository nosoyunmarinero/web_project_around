export default class Popup {
  constructor(selectors) {
    this._selectors = selectors;
    this.setEventListeners();
  }

  // Funcion para abrir Dialogs
  openDialog() {
    const dialog = document.querySelector(this._selectors.dialogID);

    if (dialog) {
      dialog.show();
      this.opacityPage(true);
    }
  }

  // Cerrar dialog
  closeDialog() {
    const dialog = document.querySelector(this._selectors.dialogID);
    const form = document.querySelector(this._selectors.formID);
    if (dialog) {
      dialog.close();
      this.opacityPage(false);
      if (form) {
        form.reset();
      }
    }
  }

  //Opacidad de la pagina
  opacityPage(dim) {
    const elements = document.querySelectorAll(
      ".profile, .header, .elements, .footer, .element-list__item"
    );
    elements.forEach((element) => {
      element.style.opacity = dim ? "0.5" : "1";
    });
  }

  // cerrar popup con ESC
  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.closeDialog();
    }
  }

  setEventListeners() {
    document.addEventListener("click", (event) => {
      const openButton = event.target.closest(
        this._selectors.openButtonElement
      );
      if (openButton) {
        console.log("abrir");
        this.openDialog(event);
      }

      const closeButton = event.target.closest(
        this._selectors.closeButtonElement
      );
      if (closeButton) {
        console.log("cerrar");
        this.closeDialog(event);
      }
    });

    document.addEventListener("keydown", (event) =>
      this._handleEscClose(event)
    );

    document.addEventListener("click", (e) => {
      const dialog = document.getElementById(this.dialogID);
      if (
        dialog &&
        !dialog.contains(e.target) &&
        !document.querySelector(this.openButtonElement).contains(e.target)
      ) {
        this.closeDialog(); // Cierra el popup si se hace clic fuera
      }
    });
  }
}
