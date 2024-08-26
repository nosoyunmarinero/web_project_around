/* Scrip para abir el edit form
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


/* Funcion para abrir dialog */

function openDialog(dialogID) {
  const dialog = document.getElementById(dialogID);
  if (dialog) {
    dialog.show();
    opacityPage(true);
  }
}

/* Funcion cerrar dialog */

function closeDialog(dialogID) {
  const dialog = document.getElementById(dialogID);
  if (dialog) {
    dialog.close();
    opacityPage(false);
  }
}

/* Funcion oscurecer pagina */
function opacityPage(dim) {
  const elements = document.querySelectorAll(
    ".profile, .header, .elements, .footer"
  );
  elements.forEach((element) => {
    element.style.opacity = dim ? "0.5" : "1";
  });
}

/* Funcion color del boton Guardar */
function toggleSaveButton(input1ID, input2ID, saveButtonID) {
  const inputField1 = document.getElementById(input1ID);
  const inputField2 = document.getElementById(input2ID);
  const saveButton = document.getElementById(saveButtonID);

  if (inputField1.value.trim() !== "" && inputField2.value.trim() !== "") {
    saveButton.style.backgroundColor = "black";
    saveButton.style.color = "white";
  } else {
    saveButton.style.backgroundColor = "transparent";
    saveButton.style.color = "#c4c4c4";
  }
}

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
}

formElement.addEventListener("submit", handleProfileFormSubmit);

/* Scrip para corazon */
const likeButtons = document.querySelectorAll(".element__button");

likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const heartIcon = button.querySelector("img");

    if (heartIcon.src.includes("heart.svg")) {
      heartIcon.src = "/images/heartOn.svg";
    } else {
      heartIcon.src = "/images/heart.svg";
    }
  });
});

/* Profile edit */
const profileEdit = {
  open: openDialog,
  close: closeDialog,
  opacity: opacityPage,
  colorButton: toggleSaveButton,
};

document.getElementById("edit-button-open").addEventListener("click", () => {
  profileEdit.open("modal-profile");
});

document.getElementById("edit-button-close").addEventListener("click", () => {
  profileEdit.close("modal-profile");
});

document.getElementById("name").addEventListener("input", () => {
  profileEdit.colorButton("name", "job", "save-button");
});

document.getElementById("job").addEventListener("input", () => {
  profileEdit.colorButton("name", "job", "save-button");
});
