//Likear las imagenes
export function toggleLikeButton(cardElement, cardInstance) {
  const likeButton = cardElement.querySelector(".element__button-like");
  const likeIcon = cardElement.querySelector(".element__like-button");

  likeButton.addEventListener("click", () => {
    cardInstance.toggleLike();
    if (cardInstance.isLiked) {
      likeIcon.src = "./images/heart-on.svg";
    } else {
      likeIcon.src = "./images/heart.svg";
    }
  });
}
