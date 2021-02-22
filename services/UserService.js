const axios = require("axios").default;
class UserService {
  constructor() {}
  async createSignUp(signUpData) {
    return axios
      .post("http://54.78.219.186:8000/api/v1/signup/", signUpData)
      .then((serverResponse) => {
        return serverResponse.data;
      })
      .catch((error) => console.log(error));
  }
}
export default UserService;
