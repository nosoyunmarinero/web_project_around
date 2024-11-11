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
        <img src="${card.link}" alt="${card.description}" class="element__image"/>
        </button>
          <button class="element__button-delete" id="delete-image">
            <img src="./images/thrashcan.svg" alt= "Delete button" class="element__image-delete" />
          </button>
        <div class="element__description">
          <p id="card-title">${card.description}</p>
            <button class="element__button" onclick="toggleLike(this)">
              <img src="./images/heart.svg" class="element__like-button "alt="Like button"/>
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

/* Función para cambiar la información del perfil */
const saveInfo = (
  evt,
  field1ID,
  field2ID,
  displayField1ID,
  displayField2ID
) => {
  evt.preventDefault();

  const field1 = document.getElementById(field1ID);
  const field2 = document.getElementById(field2ID);

  const field1Value = field1.value;
  const field2Value = field2.value;

  const displayField1 = document.getElementById(displayField1ID);
  const displayField2 = document.getElementById(displayField2ID);

  displayField1.textContent = field1Value;
  displayField2.textContent = field2Value;
};

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
            <img src="./images/thrashcan.svg" alt= "Delete button" class="element__image-delete" />
          </button>
      <div class="element__description">
        <p id="card-title">${title}</p>
        <button class="element__button" onclick=toggleLike()>
          <img src="./images/heart.svg" alt="Like button" />
        </button>
      </div>
    </div>
  `;

  document
    .querySelector(".elements")
    .insertAdjacentHTML("afterbegin", newCardHTML);

  setupImageModal(
    ".element__button-image",
    "#modal-image",
    "#dialog-image",
    "#dialog-title",
    "#dialog-close-button"
  );

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

function setupImageModal(
  buttonSelector,
  dialogSelector,
  imageSelector,
  titleSelector,
  closeButtonSelector
) {
  const imageButtons = document.querySelectorAll(buttonSelector);
  const imageModal = document.querySelector(dialogSelector);
  const modalImage = document.querySelector(imageSelector);
  const modalTitle = document.querySelector(titleSelector);
  const closeModalButton = document.querySelector(closeButtonSelector);

  imageButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const imageURL = this.querySelector(".element__image").src;
      const title =
        this.closest(".element").querySelector("#card-title").textContent;

      modalImage.src = imageURL;
      modalTitle.textContent = title;
      imageModal.show();
      opacityPage(true);
    });
  });

  closeModalButton.addEventListener("click", function () {
    imageModal.close();
    opacityPage(false);
  });

  imageModal.addEventListener("click", function (event) {
    if (event.target === imageModal) {
      imageModal.close();
      opacityPage(false);
    }
  });
}

/* Funcion para desactivar boton */

const toggleSaveButton = (input1ID, input2ID, buttonID) => {
  const inp1 = document.getElementById(input1ID);
  const inp2 = document.getElementById(input2ID);
  const btn = document.getElementById(buttonID);

  const validarInputs = () => {
    if (!inp1.validity.valid || !inp2.validity.valid) {
      btn.disabled = true;
      btn.style.backgroundColor = "transparent";
      btn.style.color = "#c4c4c4";
    } else {
      btn.disabled = false;
      btn.style.backgroundColor = "black";
      btn.style.color = "white";
    }
  };

  inp1.addEventListener("input", validarInputs);
  inp2.addEventListener("input", validarInputs);

  validarInputs();
};

document.addEventListener("DOMContentLoaded", () => {
  toggleSaveButton("name", "job", "save-button");
});

/*       <-------------------Codigo--------------------->        */

/* Profile edit */
const profileEdit = {
  open: openDialog,
  close: closeDialog,
  opacity: opacityPage,
  info: saveInfo,
  btn: toggleSaveButton,
};

document.getElementById("edit-button-open").addEventListener("click", () => {
  profileEdit.open("modal-edit");
});

document.getElementById("edit-button-close").addEventListener("click", () => {
  profileEdit.close("modal-edit");
});

document.getElementById("modal-edit").addEventListener("keydown", (e) => {
  if (e.key === "Escape") profileEdit.close("modal-edit");
});

document.getElementById("name").addEventListener("input", () => {
  profileEdit.btn("name", "job", "save-button");
});

document.getElementById("job").addEventListener("input", () => {
  profileEdit.btn("name", "job", "save-button");
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
  add: addCard,
  btn: toggleSaveButton,
};

document.getElementById("add-button-open").addEventListener("click", () => {
  profileAdd.open("modal-add");
});

document.getElementById("add-button-close").addEventListener("click", () => {
  profileAdd.close("modal-add");
});

document.getElementById("modal-add").addEventListener("keydown", (e) => {
  if (e.key === "Escape") profileAdd.close("modal-add");
});

document.getElementById("title").addEventListener("input", () => {
  profileAdd.btn("title", "imageURL", "save-button-add");
});

document.getElementById("imageURL").addEventListener("input", () => {
  profileAdd.btn("title", "imageURL", "save-button-add");
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

/*Image show*/
document.addEventListener("DOMContentLoaded", function () {
  setupImageModal(
    ".element__button-image",
    "#modal-image",
    "#dialog-image",
    "#dialog-title",
    "#dialog-close-button"
  );
});

/*Script para ancho de imagen*/
document.addEventListener("DOMContentLoaded", () => {
  const popImage = document.getElementById("dialog-image");

  popImage.onload = () => {
    if (popImage.naturalWidth > popImage.naturalHeight) {
      // Imagen horizontal
      popImage.classList.add("element__modal_horizontal-image");
      popImage.classList.add("element__modal_horizontal-content");
      popImage.classList.remove("element__modal_vertical-image");
      popImage.classList.remove("element__modal_vertical-content");
    } else if (popImage.naturalHeight > popImage.naturalWidth) {
      // Imagen vertical
      popImage.classList.add("element__modal_vertical-image");
      popImage.classList.add("element__modal_vertical-content");
      popImage.classList.remove("element__modal_horizontal-image");
      popImage.classList.remove("element__modal_horizontal-content");
    }
  };
});

/* Script para likear SE DEBE RESCRIBIR*/
function toggleLike(button) {
  const img = button.querySelector("img"); // Selecciona la imagen dentro del botón

  if (img.src.includes("heart.svg")) {
    img.src = "./images/heart-on.svg"; // Cambia la imagen si es el corazón vacío
  } else {
    img.src = "./images/heart.svg"; // Cambia la imagen si es el corazón lleno
  }
}
