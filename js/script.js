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
        <-------------------Funciones--------------------->

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

/* Función para cambiar la información del perfil */
function saveInfo(evt, field1ID, field2ID, displayField1ID, displayField2ID) {
  evt.preventDefault();

  const field1 = document.getElementById(field1ID);
  const field2 = document.getElementById(field2ID);

  const field1Value = field1.value;
  const field2Value = field2.value;

  const displayField1 = document.getElementById(displayField1ID);
  const displayField2 = document.getElementById(displayField2ID);

  displayField1.textContent = field1Value;
  displayField2.textContent = field2Value;
}

/*       <-------------------Codigo--------------------->        */

/* Profile edit */
const profileEdit = {
  open: openDialog,
  close: closeDialog,
  opacity: opacityPage,
  colorButton: toggleSaveButton,
  info: saveInfo,
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

document
  .getElementById("save-button")
  .addEventListener("click", function (evt) {
    saveInfo(evt, "name", "job", "profile-name", "profile-job");
  });

/* Script para likear */
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
