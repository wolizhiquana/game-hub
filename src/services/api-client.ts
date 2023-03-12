import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9e97f7a728c74e289fd5ee4d772c7eb7",
  },
});
