import Popup from "./Popup.js";

export default class PopUpWithForm extends Popup {
  constructor(submitCallback, popUpSelector, selectors) {
    super(selectors);
    this._popUpSelector = popUpSelector;
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    const inputValues = {};
    const form = document
      .querySelector(this._popUpSelector)
      .querySelector("form");
    const inputs = form.querySelectorAll("input");

    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  closeDialog() {
    super.closeDialog();
    const form = document
      .querySelector(this._popUpSelector)
      .querySelector("form");
    form.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    document // Submit callback
      .querySelector(this._popUpSelector)
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const inputValues = this._getInputValues;
        this._submitCallback(inputValues);
      });

    document // close
      .querySelector(this._selectors.closeButtonElement)
      .addEventListener("click", (e) => {
        e.stopPropagation();
        this.closeDialog();
      });
  }
}
