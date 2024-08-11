import axios from "axios";

export const instance = axios.create({
  baseURL: "https://66b5d503b5ae2d11eb64dca9.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});
