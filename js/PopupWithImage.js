import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectors) {
    super(selectors);
  }

  openDialog() {
    super.openDialog();

    const imageButtons = document.querySelectorAll(
      this._selectors.buttonSelector
    );
    const imageModal = document.querySelector(this._selectors.dialogSelector);
    const modalImage = document.querySelector(this._selectors.imageSelector);
    const modalTitle = document.querySelector(this._selectors.titleSelector);

    imageButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const imageURL = this.querySelector(".element__image").src;
        const title =
          this.closest(".element").querySelector("#card-title").textContent;

        modalImage.src = imageURL;
        modalTitle.textContent = title;
        imageModal.show();
      });
    });
  }

  setEventListeners() {
    super.setEventListeners;

    document.addEventListener("DOMContentLoaded", () =>
      document.addEventListener("click", (event) => {
        if (event.target.closest(this._selectors.openButtonElement)) {
          console.log("abrir dialog con imagen");
          this.openDialog();
        }
      })
    );

    document.addEventListener("click", (event) => {
      if (event.target.closest(this._selectors.closeButtonElement)) {
        console.log("cerrar dialog con imagen");
        this.closeDialog();
      }
    });
  }
}
