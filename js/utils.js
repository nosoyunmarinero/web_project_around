import { Card } from "./Card.js";
import { profileAdd, formValidationImage, apiNewCard } from "./script.js";
export { handleCardClick, addNewCard };

//Funcion handleCardClick para la clase card
function handleCardClick(image, title) {
  document.querySelector(".element__modal-image").src = image;
  document.querySelector(".element__modal-title").textContent = title;
}

// Funcion para agregar nuevas cards
const addNewCard = () => {
  const newImageTitle = document.querySelector("#title").value;
  const imageURL = document.querySelector("#imageURL").value;

  apiNewCard._options.name = newImageTitle;
  apiNewCard._options.link = imageURL;

  apiNewCard
    .addNewCard()
    .then((data) => {
      const card = new Card(
        {
          name: data.name,
          link: data.link,
          _id: data._id,
        },
        "#template-selector",
        () => console.log("Click")
      );

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
