import FormValidator from "./FormValidator.js";
export default class UserInfo {
  constructor(infoSelectors) {
    this._infoSelectors = infoSelectors;
  }

  getUserInfo() {
    const nameElement = document.querySelector(
      this._infoSelectors.nameSelector
    );
    const jobElement = document.querySelector(this._infoSelectors.jobSelector);

    if (nameElement && jobElement) {
      const currentInfo = {
        name: nameElement.textContent,
        job: jobElement.textContent,
      };
      return currentInfo;
    }
  }

  setUserInfo(newUserData) {
    const nameElement = document.querySelector(
      this._infoSelectors.nameSelector
    );
    const jobElement = document.querySelector(this._infoSelectors.jobSelector);

    nameElement.textContent = newUserData.name;
    jobElement.textContent = newUserData.job;

    if (newUserData.avatar) {
      const avatarElement = document.querySelector(
        this._infoSelectors.avatarSelector
      );
      avatarElement.src = newUserData.avatar;
    }

    //Actualizacion del servidor

    fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        authorization: "354781f2-b486-4ab1-9379-468b53f9329e",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUserData.name,
        about: newUserData.job,
      }),
    })
      .then((res) => res.json())
      .then((data) => {});
  }

  //API Calls
  getProfileInfo(formValidator = null) {
    fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "354781f2-b486-4ab1-9379-468b53f9329e",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Actualizar la información del perfil en la página
        this.setUserInfo({
          name: data.name,
          job: data.about,
          avatar: data.avatar,
        });

        // Actualizar los valores del formulario si existen los elementos
        const inputName = document.querySelector("#name");
        const inputJob = document.querySelector("#job");

        if (inputName && inputJob) {
          inputName.value = data.name;
          inputJob.value = data.about;

          // Si se proporcionó un validador, usarlo en lugar de crear uno nuevo
          if (formValidator) {
            formValidator.toggleSaveButton(
              formValidator.inputList,
              formValidator.buttonElement
            );
          }
        }
      })
      .catch((error) => {
        console.error("Error al obtener información del perfil:", error);
      });
  }

  setAvatar(newAvatarData) {
    const avatarElement = document.querySelector(
      this._infoSelectors.avatarSelector
    );

    avatarElement.src = newAvatarData.avatarURL;

    //Actualizacion del servidor
    fetch("https://around-api.es.tripleten-services.com/v1/users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: "354781f2-b486-4ab1-9379-468b53f9329e",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: newAvatarData.avatarURL,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
}
