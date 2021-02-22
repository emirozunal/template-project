const axios = require("axios").default;
class EpisodesService {
  constructor() {}
  async getSeriesEpisodes() {
    return axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((serverResponse) => {
        const episodetest = serverResponse.data.results.map((res) => ({
          name: res.name,
          air_date: res.air_date,
          episode: res.episode,
        }));
        return episodetest;
      })
      .catch((error) => alert(error));
  }
}

export default EpisodesService;
