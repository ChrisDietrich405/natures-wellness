import axios from "axios";

export const BASE_URL = "http://localhost:3002/";

export const api = axios.create({
  baseURL: BASE_URL, // //process.env.NEXT_PUBLIC_CADASTRO_API_HOST
});
