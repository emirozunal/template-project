// HTTP Service ---> Endpoint
// HTTP METHOD ----> GET? POST? UPDATE?......
// ----> Query ?
// ----> Params ?
// ----> Header ?
// ----> BODY ?

/*
  task
  RickAndMorty Service
  Get characters and choose first character with name and image
  Create a new page RickAndMorty
  Create a new Comonents
 [ Image - Name ] optional ->>> alive dead, location

 https://rickandmortyapi.com/api/character
*/
const token = "8fceec3175e6b7ad504dff72a802e9093a3ee33f";
const axios = require("axios").default;
class HelloService {
  constructor(message) {}
  async getHello() {
    return axios
      .get("http://54.78.219.186:8000/api/v1/hello/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((serverResponse) => {
        return serverResponse;
      })
      .catch((error) => console.log(error.response));
  }
  getSearchQueries() {
    return axios
      .get("http://54.78.219.186:8000/api/v1/search/")
      .then((serverResponse) => {
        return {
          query: serverResponse.data.data.searched_items[0].query,
          username: serverResponse.data.data.searched_items[0].username,
        };
      })
      .catch((error) => alert(error));
  }
}
export default HelloService;
