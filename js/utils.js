/* Funcion para eliminar cards */
export default function deleteCard(event) {
  const cardToDelete = event.target.closest(".element");
  if (cardToDelete) {
    cardToDelete.remove();
  }
}

/* Profile delete*/
document.addEventListener("click", function (event) {
  if (event.target.matches(".element__button-delete *")) {
    deleteCard(event);
  }
});
