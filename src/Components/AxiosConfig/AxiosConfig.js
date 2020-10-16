import axios from "axios";

const instance = axios.create({
  baseURL: "https://aqueous-spire-54324.herokuapp.com",
});

export default instance;
