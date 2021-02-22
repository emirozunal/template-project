const axios = require("axios").default;
class SeriesService {
  constructor(message) {}
  async getSeriesCharacters() {
    return axios
      .get("https://rickandmortyapi.com/api/character")
      .then((serverResponse) => {
        const emirtest = serverResponse.data.results.map((res) => ({
          name: res.name,
          image: res.image,
          id: res.id,
        }));
        return emirtest;
      })
      .catch((error) => alert(error));
  }
}

export default SeriesService;

// "https://rickandmortyapi.com/api/episode"
