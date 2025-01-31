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
    } else {
      console.log("no se encontro algun value");
    }
  }

  setUserInfo() {
    const userData = this.getUserInfo();

    const name = userData.name;
    const job = userData.job;
    const nameField = document.querySelector(
      this._infoSelectors.nameCotainerID
    );
    const jobField = document.querySelector(this._infoSelectors.jobCotainerID);

    nameField.textContent = name;
    jobField.textContent = job;
  }
}
