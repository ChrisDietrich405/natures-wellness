

export const BASE_URL = "/api";

export const api = axios.create({
  baseURL: BASE_URL,
});
import axios from "axios";