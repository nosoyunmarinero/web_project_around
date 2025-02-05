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

    const modalImage = document.querySelector(this._selectors.imageSelector);
    const modalTitle = document.querySelector(this._selectors.titleSelector);

    const imageURL = document.querySelector(".element__image").src;
    console.log("imageURL", imageURL);
    const title = document.querySelector("#card-title").textContent;
    console.log("title", title);

    modalImage.src = imageURL;
    modalTitle.textContent = title;
  }

  setEventListeners() {
    super.setEventListeners();

    document.addEventListener("click", (event) => {
      if (event.target.closest(this._selectors.openButtonElement)) {
        console.log("abrir dialog con imagen");
        this.openDialog();
      }
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest(this._selectors.closeButtonElement)) {
        console.log("cerrar dialog con imagen");
        super.closeDialog();
      }
    });
  }
}
