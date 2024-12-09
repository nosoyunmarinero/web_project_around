export class Card {
  constructor(data, templateSelector) {
    this._image = image;
    this._title = title;
  }

  _getTemplate() {
    document
      .querySelector(".elements")
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate;

    this._element.getElementById("card__title").textContent = this._title;
    this._element.querySelector(".element__image").src = `${this._image}`;

    return this._element;
  }
}

item.forEach((item) => {
  const card = new Card(item.image, item.title);
  const cardElement = card.generateCard();

  document.querySelector(".element-list__item").append(cardElement);
});
