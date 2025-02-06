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

      // Aquí puedes hacer lo que necesites con los elementos de la card
      console.log("Imagen:", imgElement);
      console.log("Título:", titleElement);

      const imgContainer = document.querySelector(".element__modal-image");
      const titleContainer = document.querySelector(".element__modal-title");

      imgContainer.src = imgElement;
      titleContainer.textContent = titleElement;
    }
  }

  setEventListeners() {
    super.setEventListeners();

    const closeButtons = document.querySelectorAll(
      this._selectors.closeButtonElement
    );

    const openButtons = document.querySelectorAll(
      this._selectors.openButtonElement
    );

    openButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        console.log("abrir card");
        this.openDialog(event); // Aquí pasamos el 'event'
      });
    });

    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("Cerrar card");
        this.closeDialog();
      });
    });
  }
}
