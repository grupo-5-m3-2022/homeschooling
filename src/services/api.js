import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-home-schooling.herokuapp.com/",
});

export default api;
