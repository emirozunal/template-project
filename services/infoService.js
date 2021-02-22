const axios = require("axios").default;
class InfoService {
  constructor(message) {
     }
  async getCharacterInfo(id) {
    return axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((serverResponse) => {
        const characterData = serverResponse.data;

        return characterData;
      })
      .catch((error) => alert(error));
  }
}

export default InfoService;
