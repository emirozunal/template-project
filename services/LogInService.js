const axios = require("axios").default;
class LogInService {
  constructor() {}
  async createLogIn(logInData) {
    return axios
      .post("http://54.78.219.186:8000/api/v1/login/", logInData)
      .then((serverResponse) => {
        return serverResponse.data;
      })
      .catch((error) => console.log(error));
  }
}

export default LogInService;
