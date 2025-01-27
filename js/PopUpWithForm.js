import Popup from "./Popup.js";

export default class PopUpWithForm extends Popup {
  constructor(handleSubmit, popUpSelector) {
    this._popUpSelector = popUpSelector;
    this._handleSubmit = handleSubmit;
  }

  _getInputValues() {
    const inputValues = {};
    const inputs = this._form
      .querySelector(this._popUpSelector)
      .querySelectorAll("input");
    inputs.forEach((input) => {
      inputValues[input.name] = input.value; // Asignamos el valor de cada input a su nombre
    });
    return inputValues; // Retornamos el objeto con los valores
  }

  _handleSubmit(inputValues) {}

  setEventListeners() {
    super.setEventListeners();
    this._popUpSelector.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputValues = this._getInputValues;
    });
  }
}
