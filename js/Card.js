/* Cards iniciales */
export class Card {
  constructor(data, templateSelector) {
    this._image = data.image;
    this._title = data.title;
    this.isLiked = false;
    this._templateSelector = templateSelector;
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
  }

  _getTemplate() {
    const template = document.querySelector(this._templateSelector);

    const cardElement = template.content
      .querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".element__title").textContent = this._title;
    this._element.querySelector(".element__image").src = `${this._image}`;

    return this._element;
  }
}
