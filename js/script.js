/* Cards iniciales */

const initialCards = [
  {
    description: "Chichén Itzá",
    link: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Monte Fuji",
    link: "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Tromsø",
    link: "https://images.unsplash.com/photo-1669887961943-54dd571fb287?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Bali",
    link: "https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=1049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Brujas",
    link: "https://images.unsplash.com/photo-1554413360-fa283dd6a1ec?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description: "Cholula",
    link: "https://images.unsplash.com/photo-1667277310912-585fb643f7c8?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

/*  <-------------------Funciones--------------------->

/* Función para cargar las tarjetas iniciales */
function loadInitialCards() {
  const elementsSection = document.querySelector(".elements");
  elementsSection.innerHTML = "";

  initialCards.forEach((card) => {
    const cardHTML = `
      <div class="element">
      <button class="element__button-image" id="open-image">
        <img src="${card.link}" alt="${card.description}" class="element__image" />
        </button>
          <button class="element__button-delete" id="delete-image">
            <img src="/images/thrashcan.svg" alt= "Delete button" class="element__image-delete" />
          </button>
        <div class="element__description">
          <p id="card-title">${card.description}</p>
            <button class="element__button">
              <img src="/images/heart.svg" alt="Like button" />
            </button>
          </div>
      </div>
    `;
    elementsSection.innerHTML += cardHTML;
  });
}

document.addEventListener("DOMContentLoaded", loadInitialCards);

/* Funcion para abrir dialog */

function openDialog(dialogID) {
  const dialog = document.getElementById(dialogID);
  if (dialog) {
    dialog.show();
    opacityPage(true);
  }
}

/* Funcion cerrar dialog */

function closeDialog(dialogID, formID) {
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

/* Función para agregar cards */
function addCard(evt, titleID, imageURLID) {
  evt.preventDefault();

  const title = document.getElementById(titleID).value;
  const imageURL = document.getElementById(imageURLID).value;

  const newCardHTML = `
    <div class="element">
    <button class="element__button-image" id="open-image">
      <img src="${imageURL}" alt="${title}" class="element__image" />
      </button>
      <button class="element__button-delete" id="delete-image">
            <img src="/images/thrashcan.svg" alt= "Delete button" class="element__image-delete" />
          </button>
      <div class="element__description">
        <p id="card-title">${title}</p>
        <button class="element__button">
          <img src="/images/heart.svg" alt="Like button" />
        </button>
      </div>
    </div>
  `;

  document
    .querySelector(".elements")
    .insertAdjacentHTML("afterbegin", newCardHTML);

  closeDialog("modal-add", "profile-form");
}

/* Funcion para eliminar cards */
function deleteCard(event) {
  const cardToDelete = event.target.closest(".element");
  if (cardToDelete) {
    cardToDelete.remove();
  }
}

/*Funcion para abrir imagenes*/

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
  profileEdit.open("modal-edit");
});

document.getElementById("edit-button-close").addEventListener("click", () => {
  profileEdit.close("modal-edit");
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
    profileEdit.close("modal-edit");
  });

/*Profile Add */
const profileAdd = {
  open: openDialog,
  close: closeDialog,
  opacity: opacityPage,
  colorButton: toggleSaveButton,
  add: addCard,
};

document.getElementById("add-button-open").addEventListener("click", () => {
  profileAdd.open("modal-add");
});

document.getElementById("add-button-close").addEventListener("click", () => {
  profileAdd.close("modal-add");
});

document.getElementById("title").addEventListener("input", () => {
  profileAdd.colorButton("title", "imageURL", "save-button-add");
});

document.getElementById("imageURL").addEventListener("input", () => {
  profileAdd.colorButton("title", "imageURL", "save-button-add");
});

document.getElementById("save-button-add").addEventListener("click", (evt) => {
  profileAdd.add(evt, "title", "imageURL");

  const dialog = document.getElementById("modal-add");

  const form = dialog.querySelector("form");
  if (form) {
    form.reset();
  }

  profileAdd.colorButton("title", "imageURL", "save-button-add");
});

/* Profile delete*/
document.addEventListener("click", function (event) {
  if (event.target.matches(".element__button-delete *")) {
    deleteCard(event);
  }
});

/*Profile show*/
const profileShow = {
  open: openDialog,
};

document.getElementById("open-image").addEventListener("click", () => {
  profileShow.open("image-dialog");
});

/* Script para likear */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".elements").addEventListener("click", (event) => {
    const likeButton = event.target.closest(".element__button");
    if (likeButton) {
      const heartIcon = likeButton.querySelector("img");
      if (heartIcon.src.includes("heartOn.svg")) {
        heartIcon.src = "/images/heart.svg";
      } else {
        heartIcon.src = "/images/heartOn.svg";
      }
    }
  });
});
