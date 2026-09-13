import { axiosInstance } from "@/lib/axios";
import { useState, useEffect } from "react";

import type { moviesResponse } from "@/types/movieResponse";
import type { heroSectionResponse } from "@/types/heroSectionResponse";

export const useFetchApi = () => {
  const [movies, setMovies] = useState<moviesResponse[]>([]);
  const [heroSection, setHeroSection] = useState<heroSectionResponse>();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axiosInstance.get("/discover/movie");

      console.log(response);

      setMovies(response.data.results);
    };

    fetchApi();
  }, []);

  useEffect(() => {
    const recomendations = async () => {
      const response = await axiosInstance.get("/trending/movie/week");

      const data = response.data;

      console.log(data);

      const hero = Math.floor(Math.random() * data.results.length);

      const selected = data.results[hero];

      setHeroSection(selected);
    };
    recomendations();
  }, []);

  return {
    movies,
    heroSection,
  };
};
