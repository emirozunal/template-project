const axios = require("axios").default;
class PostService {
  constructor(message) {}
  async createPost(postData) {
    return axios
      .post("https://jsonplaceholder.typicode.com/posts", postData)
      .then((serverResponse) => {
        return serverResponse.data;
      })
      .catch((error) => console.log(error));
  }
}
export default PostService;

//hello getle gel
