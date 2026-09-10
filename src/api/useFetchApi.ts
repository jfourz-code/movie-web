import { useState, useEffect } from "react";

export const useFetchApi = () => {
  const [movies, setMovies] = useState<any[]>([]);

  const apiReadTokken = import.meta.env.VITE_API_TMDB_KEY;

  useEffect(() => {
    const fetchApi = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiReadTokken}`,
        },
      };

      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie",
        options,
      );

      const data = await response.json();

      setMovies(data.results);
    };

    fetchApi();
  }, []);

  return {
    movies,
  };
};
