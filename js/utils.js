import { Card } from "./Card.js";
import { profileAdd, formValidationImage } from "./script.js";
export { handleCardClick, addNewCard };
import Popup from "./Popup.js";

/* Funcion para eliminar cards */
export default function deleteCard(event) {
  const cardToDelete = event.target.closest(".element");

  if (cardToDelete) {
    cardToDelete.remove();
    fetch(
      `https://around-api.es.tripleten-services.com/v1/cards/${cardToDelete.id}`,
      {
        method: "DELETE",
        headers: {
          authorization: "354781f2-b486-4ab1-9379-468b53f9329e",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("Tarjeta eliminada", cardToDelete.id);
      })
      .catch((err) => console.error("Error al eliminar la tarjeta:", err));
  }
}
//Event listener para eliminar cards
const deleteDialog = document.querySelector("#modal-delete");
document.addEventListener("click", function (event) {
  if (event.target.matches(".element__button-delete *")) {
    console.log("Botón de eliminar clicado");
    deleteDialog.show();
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

  fetch("https://around-api.es.tripleten-services.com/v1/cards", {
    method: "POST",
    headers: {
      authorization: "354781f2-b486-4ab1-9379-468b53f9329e",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newImageTitle,
      link: imageURL,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const card = new Card(
        {
          name: data.name,
          link: data.link,
          _id: data._id,
        },
        "#template-selector",
        () => console.log("Card clicked!")
      );

      console.log("Card instance:", card);

      const cardElement = card.generateCard();
      cardElement.setAttribute("id", data._id);
      document.querySelector(".element-list__item").prepend(cardElement);

      profileAdd.closeDialog();
      document.querySelector("#add-card-form").reset();

      formValidationImage.setEventListener();
      formValidationImage.toggleSaveButton(
        formValidationImage.inputList,
        formValidationImage.buttonElement
      );
    })
    .catch((err) => console.error("Error en el POST:", err));
};
