import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectors, imageSelectors) {
    super(selectors);
    this._imageSelectors = imageSelectors;
  }

  openDialog() {
    super.openDialog();
    const imageSelector = document.querySelector(
      this._imageSelectors.imageSelector
    );
    const titleSelector = document.querySelector(this._selectors.titleSelector);
  }

  setEventListeners() {
    super.setEventListeners;

    document.addEventListener("click", (event) => {
      if (event.target.closest(this._selectors.openButtonElement)) {
        console.log("abrir dialog con imagen");
        this.openDialog();
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest(this._selectors.closeButtonElement)) {
        console.log("cerrar dialog con imagen");
        this.closeDialog();
      }
    });
  }
}
