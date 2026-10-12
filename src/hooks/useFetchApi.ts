import type { TrendingResponse } from "@/types/TrendingResponse";
import type { HeroSectionResponse } from "@/types/HeroSectionResponse";
import type { Genres } from "@/types/Genres";
import { useQuery } from "@tanstack/react-query";
import { getFetchHeroSection, getTrendingMovieToday, getTrendingTvToday, getGenre } from "../api/fetchApi";

export const useFetchApi = () => {
  // fetch api trending movie for hero section
  const heroSectionQuery = useQuery<HeroSectionResponse | null>({
    queryKey: ["hero-section"],
    queryFn: getFetchHeroSection,
  })

  // fetch api for genre
  const genreQuery = useQuery<Genres[]>({
    queryKey: ["genres-movie"],
    queryFn: getGenre,
  })

  // fetch api for trending movie today
  const trendingMoviesTodayQuery = useQuery<TrendingResponse[]>({
    queryKey: ["trending-movie-day"],
    queryFn: getTrendingMovieToday,
  })

  // fetch api for trending tv today
  const trendingTvTodayQuery = useQuery<TrendingResponse[]>({
    queryKey: ["trending-tv-day"],
    queryFn: getTrendingTvToday,
  })

  return {
    heroSection : heroSectionQuery.data,
    genre : genreQuery.data,
    trendingMoviesToday : trendingMoviesTodayQuery.data,
    trendingTvToday : trendingTvTodayQuery.data,

    isPending: heroSectionQuery.isPending || genreQuery.isPending || trendingMoviesTodayQuery.isPending || trendingTvTodayQuery.isPending,
    isError: heroSectionQuery.isError || genreQuery.isError || trendingMoviesTodayQuery.isError || trendingTvTodayQuery.isError
  };
};
