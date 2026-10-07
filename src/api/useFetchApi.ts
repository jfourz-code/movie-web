import { axiosInstance } from "@/lib/axios";
import { useState, useEffect } from "react";

import type { TrendingResponse } from "@/types/TrendingResponse";
import type { HeroSectionResponse } from "@/types/HeroSectionResponse";
import type { Genres } from "@/types/Genres";

export const useFetchApi = () => {
  // const [movies, setMovies] = useState<TrendingResponse[]>([]);
  const [heroSection, setHeroSection] = useState<HeroSectionResponse | null>(null);
  const [genre, setGenre] = useState<Genres[]>([]);
  const [trendingMoviesToday, setTrendingMoviesToday] = useState<
    TrendingResponse[]
  >([]);
  const [trendingTvToday, setTrendingTvToday] = useState<TrendingResponse[]>(
    [],
  );

  // fetch api movie discover
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const response = await axiosInstance.get("/discover/movie?&page=1");
  //     setMovies(response.data.results);
  //   };
  //   fetchApi();
  // }, []);

  // fetch api trending movie for hero section
  useEffect(() => {
    const recomendations = async () => {
      const response = await axiosInstance.get("/trending/movie/week");
      const data = response.data;
      const hero = Math.floor(Math.random() * data.results.length);
      const selected = data.results[hero];
      setHeroSection(selected);
    };
    recomendations();
  }, []);

  // fetch api for genre
  useEffect(() => {
    const genres = async () => {
      const response = await axiosInstance.get("/genre/movie/list?language=en");
      setGenre(response.data.genres);
    };
    genres();
  }, []);

  // fetch api for trending movie today
  useEffect(() => {
    const trendingMovieToday = async () => {
      const response = await axiosInstance.get("/trending/movie/day?language=en-US");
      setTrendingMoviesToday(response.data.results);
    };
    trendingMovieToday();
  }, []);

  // fetch api for trending tv today
  useEffect(() => {
    const trendingTvday = async () => {
      const response = await axiosInstance.get("/trending/tv/day?language=en-US");
      setTrendingTvToday(response.data.results);
    };
    trendingTvday();
  }, []);

  return {
    heroSection,
    genre,
    trendingMoviesToday,
    trendingTvToday,
  };
};
