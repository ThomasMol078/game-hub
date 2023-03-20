import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "52dabe2ea2f24750943e700d4872fd98",
  },
});
