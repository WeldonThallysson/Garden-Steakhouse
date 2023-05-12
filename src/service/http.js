import axios from "axios";

const axiosInstacia = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "Content-type": "application/json" },
});

//configuração do axios
export default axiosInstacia;
