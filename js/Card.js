/* Cards iniciales */
export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._image = data.link;
    this._title = data.name;
    this.isLiked = false;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    const imgElement = this._element.querySelector(".element__image");
    imgElement.src = this._image;

    const likeButton = this._element.querySelector(".element__button-like");
    const likeIcon = this._element.querySelector(".element__like-button");

    likeButton.addEventListener("click", () => {
      this.toggleLike();
      if (this.isLiked) {
        likeIcon.src = "./images/heart-on.svg";
      } else {
        likeIcon.src = "./images/heart.svg";
      }
    });

    return this._element;
  }
}
