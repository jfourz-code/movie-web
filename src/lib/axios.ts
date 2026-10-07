import axios from "axios";

const apiKeyToken = import.meta.env.VITE_API_TMDB_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${apiKeyToken}`,
  },
});