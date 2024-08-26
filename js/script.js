/* Scrip para abir el edit form*/
const editButtonOpen = document.querySelector("#edit-button-open");
const editButtonClose = document.querySelector("#edit-button-close");
const profileEdit = document.querySelector("#modal");

const profileNameElement = document.getElementById("profile-name");
const profileJobElement = document.getElementById("profile-job");

editButtonOpen.addEventListener("click", () => {
  inputFieldName.value = profileNameElement.textContent;
  inputFieldJob.value = profileJobElement.textContent;

  toggleSaveButton();

  profileEdit.show();
  document.querySelector(".header").style.opacity = "0.5";
  document.querySelector(".profile").style.opacity = "0.5";
  document.querySelector(".elements").style.opacity = "0.5";
  document.querySelector(".footer").style.opacity = "0.5";
});

editButtonClose.addEventListener("click", () => {
  profileEdit.close();
  document.querySelector(".header").style.opacity = "1";
  document.querySelector(".profile").style.opacity = "1";
  document.querySelector(".elements").style.opacity = "1";
  document.querySelector(".footer").style.opacity = "1";
});

/* Scrip color del boton Guardar */
const inputFieldName = document.querySelector(".profile__edit-form-input_name");
const inputFieldJob = document.querySelector(".profile__edit-form-input_job");
const saveButton = document.getElementById("save-button");

function toggleSaveButton() {
  if (inputFieldName.value.trim() !== "" && inputFieldJob.value.trim() !== "") {
    saveButton.style.backgroundColor = "black";
    saveButton.style.color = "white";
  } else {
    saveButton.style.backgroundColor = "transparent";
    saveButton.style.color = "#c4c4c4";
  }
}

inputFieldName.addEventListener("input", toggleSaveButton);
inputFieldJob.addEventListener("input", toggleSaveButton);
toggleSaveButton();

/* Scrip para cambiar info del perfil*/
let formElement = document.querySelector("#profile-form");
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.getElementById("name");
  let jobInput = document.getElementById("job");

  let nameValue = nameInput.value;
  let jobValue = jobInput.value;

  let profileName = document.querySelector("#profile-name");
  let profileJob = document.querySelector("#profile-job");

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;

  profileEdit.close();
  document.querySelector(".header").style.opacity = "1";
  document.querySelector(".profile").style.opacity = "1";
  document.querySelector(".elements").style.opacity = "1";
  document.querySelector(".footer").style.opacity = "1";
}

formElement.addEventListener("submit", handleProfileFormSubmit);

/* Scrip para corazon */
const likeButtons = document.querySelectorAll(".element__button");

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const heartIcon = button.querySelector("img");

    if (heartIcon.src.includes("heart.svg")) {
      heartIcon.src = "../images/heart-on.svg";
    } else {
      heartIcon.src = "../images/heart.svg";
    }
  });
});

/* SPRINT 8 */

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const elementsSection = document.querySelector(".elements");
const cards = elementsSection.querySelectorAll(".element");

initialCards.forEach((card) => {
  const imgElement = cards.querySelector(".element__image");
  const descriptionElement = cards.querySelector(".element__description p");

  imgElement.src = card.link;
  imgElement.alt = card.name;
  descriptionElement.textContent = card.name;
});
