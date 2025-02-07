import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectors) {
    super(selectors);
  }

  openDialog(event) {
    super.openDialog();

    // Asegurarnos de que event.target existe
    const clickedButton = event.target;

    // Verificar si el clickedButton es parte de una card
    const clickedCard = clickedButton.closest(".element-list__item .element");

    if (clickedCard) {
      const imgElement = clickedCard.querySelector(".element__image").src;
      const titleElement =
        clickedCard.querySelector(".element__title").textContent;

      const imgContainer = document.querySelector(".element__modal-image");
      const titleContainer = document.querySelector(".element__modal-title");

      imgContainer.src = imgElement;
      titleContainer.textContent = titleElement;
    }
  }

  setEventListeners() {
    super.setEventListeners();

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
  }
}
