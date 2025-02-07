import Popup from "./Popup.js";

export default class PopUpWithForm extends Popup {
  constructor(submitCallback, popUpSelector, selectors) {
    super(selectors);
    this._popUpSelector = popUpSelector;
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    //console.log("this._popUpSelector", this._popUpSelector);
    const inputValues = {};
    const form = document
      .querySelector(this._popUpSelector)
      .querySelector("form");

    const inputs = form.querySelectorAll("input");

    inputs.forEach((input) => {
      inputValues[input.id] = input.value;
    });
    // console.log("input values", inputValues);

    return inputValues;
  }

  closeDialog() {
    super.closeDialog();
    const form = document
      .querySelector(this._popUpSelector)
      .querySelector("form");
  }

  setEventListeners() {
    document.addEventListener("DOMContentLoaded", () => {
      const form = document
        .querySelector(this._popUpSelector)
        .querySelector("form");

      form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío por defecto
        const inputValues = this._getInputValues(); // Obtiene los valores
        this._submitCallback(inputValues); // Llama al callback con los datos
        this.closeDialog();
      });
    });
  }
}
