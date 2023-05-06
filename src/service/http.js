import axios from "axios";

const axiosInstacia = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: { "Content-type": "application/json" },
});

//configuração do axios
export default axiosInstacia;
