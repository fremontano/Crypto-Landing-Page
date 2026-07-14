import axios from "axios";
console.log("URL:", import.meta.env.VITE_API_URL);
console.log("KEY:", import.meta.env.VITE_API_KEY);

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: ` ${import.meta.env.VITE_API_KEY}`,
  },
});