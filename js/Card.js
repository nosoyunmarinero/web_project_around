/* Cards iniciales */
export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._image = data.link;
    this._title = data.name;
    this._id = data._id;
    this.isLiked = false;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  //Cambiar like
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
    //Title
    this._element.querySelector(".element__title").textContent = this._title;
    //Image
    const imgElement = this._element.querySelector(".element__image");
    imgElement.src = this._image;
    // Id
    this._element.id = this._id;

    //Like
    const likeButton = this._element.querySelector(".element__button-like");
    const likeIcon = this._element.querySelector(".element__like-button");

    //Like button
    likeButton.addEventListener("click", () => {
      this.toggleLike();
      if (this.isLiked) {
        likeIcon.src = "./images/heart-on.svg";
        const cardId = docume;
        console.log(cardId);
      } else {
        likeIcon.src = "./images/heart.svg";
      }
    });

    return this._element;
  }
}
