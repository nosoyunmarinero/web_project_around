/* Cards iniciales */
export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._image = data.link;
    this._title = data.name;
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

    this._element.querySelector(".element__title").textContent = this._title;
    const imgElement = this._element.querySelector(".element__image");
    imgElement.src = this._image;

    const likeButton = this._element.querySelector(".element__button-like");
    const likeIcon = this._element.querySelector(".element__like-button");

    //Like button
    likeButton.addEventListener("click", () => {
      this.toggleLike();
      if (this.isLiked) {
        likeIcon.src = "./images/heart-on.svg";
        fetch("https://around-api.es.tripleten-services.com/v1/cards", {
          method: "GET",
          headers: {
            authorization: "354781f2-b486-4ab1-9379-468b53f9329e",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const card = data.find((element) => element.name === this._title);
            console.log(card);

            if (card.isLiked === false) {
              fetch(
                `https://around-api.es.tripleten-services.com/v1/cards/${card}`,
                {
                  method: "PUT",
                  headers: {
                    authorization: "354781f2-b486-4ab1-9379-468b53f9329e",
                    "Content-Type": "aplication/json",
                  },
                  body: JSON.stringify({
                    isLiked: true,
                  }),
                }
              )
                .then((res) => res.json())
                .then((updatedData) => {
                  console.log(updatedData);
                });
            }
          });
      } else {
        likeIcon.src = "./images/heart.svg";
      }
    });

    return this._element;
  }
}
