import axios from "axios";

// const test = "https://warbeasts-api.herokuapp.com";
export const test = 'http://localhost:3001/';

export const api = axios.create({
    baseURL: test, // //process.env.NEXT_PUBLIC_CADASTRO_API_HOST
});