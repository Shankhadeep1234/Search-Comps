import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8f7c11eea52116be01a4949fe3adf4959122431c06bb520883dff7abf4712926"
  }
});
