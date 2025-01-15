import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectors, imageSelectors) {
    super(selectors);
    this._imageSelectors = imageSelectors;
  }

  openDialog() {
    super.openDialog();

    let imageTemplate = document.querySelector(
      this._imageSelectors.imageTemplateID
    );
    let imageSrc = document.querySelector(this._imageSelectors.imageSrcID).src;
    let titleTemplate = document.querySelector(
      this._imageSelectors.titleTemplateID
    );
    let titleSrc = document.querySelector(
      this._imageSelectors.titleSrcID
    ).textContent;

    imageTemplate.src = imageSrc;
    titleTemplate.textContent = titleSrc;
  }
}
