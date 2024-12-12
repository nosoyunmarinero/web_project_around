export default class FormValidator {
  constructor(form, settings) {
    this.form = form;
    this.settings = settings;
  }

  showInputError(inputElement) {
    const errorElement = this.form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add("form__input-error_active");
  }
  hideInputError(inputElement) {
    const errorElement = this.form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.textContent = "";
  }

  checkInputValidity(inputList, buttonElement) {
    !inputElement.validity.valid
      ? this.showInputError(inputElement)
      : this.hideInputError(inputElement);
  }
  hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputList.validity.valid;
    });
  }
}
