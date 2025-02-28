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
    const avatarElement = document.querySelector(
      this._infoSelectors.avatarSelector
    );

    nameElement.textContent = newUserData.name;
    jobElement.textContent = newUserData.job;
    avatarElement.src = newUserData.avatar;
  }

  //API Calls
  getProfileInfo() {
    fetch("https://around-api.es.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "354781f2-b486-4ab1-9379-468b53f9329e",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setUserInfo({
          name: data.name,
          job: data.about,
          avatar: data.avatar,
        });
      });
  }
}
