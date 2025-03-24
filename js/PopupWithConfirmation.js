import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(selectors) {
    super(selectors);
    this._clickedButton = null;
    this._clickedButtonID = null;
  }

  openDialog(e) {
    super.openDialog();

    const clickedCard = e.target;
    this._clickedButton = clickedCard.closest(".element-list__item .element");
    this._clickedButtonID = this._clickedButton.id;
    console.log(this._clickedButtonID);
  }

  closeDialog() {
    super.closeDialog();
  }

  setEventListeners() {
    // Abrir dialog confirmacion
    document.addEventListener("click", (e) => {
      const openButton = e.target.closest(this._selectors.openButtonElement);
      if (openButton) {
        console.log("abrir confirmacion");
        this.openDialog(e);
      }
    });
    // Cerrar dialog confirmacion
    document
      .querySelector(this._selectors.closeButtonElement)
      .addEventListener("click", () => {
        console.log("cerrar confirmacion");
        this.closeDialog();
      });

    // Cerrar dialog confirmacion con escape
    document.addEventListener("keydown", (event) => {
      this._handleEscClose(event);
    });
    // Eliminar tarjeta
    document
      .querySelector(this._selectors.confirmButtonElement)
      .addEventListener("click", () => {
        this.deleteCard();
        this.closeDialog();
      });
  }
}
