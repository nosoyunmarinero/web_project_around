import { Card } from "./Card.js";
import { initialCards } from "./constants.js";
import { profileAdd, formValidationImage } from "./script.js";
export { handleCardClick, addNewCard };

/* Funcion para eliminar cards */
export default function deleteCard(event) {
  const cardToDelete = event.target.closest(".element");
  if (cardToDelete) {
    cardToDelete.remove();
  }
}
document.addEventListener("click", function (event) {
  if (event.target.matches(".element__button-delete *")) {
    deleteCard(event);
  }
});

//Funcion handleCardClick para la clase card
function handleCardClick(image, title) {
  document.querySelector(".element__modal-image").src = image;
  document.querySelector(".element__modal-title").textContent = title;
}
// Funcion para agregar nuevas cards
const addNewCard = () => {
  const newImageTitle = document.querySelector("#title").value;
  const imageURL = document.querySelector("#imageURL").value;

  const newCardData = {
    title: newImageTitle,
    image: imageURL,
  };

  initialCards.push(newCardData);
  const card = new Card(newCardData, "#template-selector");

  const cardElement = card.generateCard();
  document.querySelector(".element-list__item").prepend(cardElement);

  profileAdd.closeDialog();
  document.querySelector("#add-card-form").reset();

  // Restablecer la validación del formulario
  formValidationImage.setEventListener();
  formValidationImage.toggleSaveButton(
    formValidationImage.inputList,
    formValidationImage.buttonElement
  );
};
