import { axiosInstance } from "@/lib/axios"

// api fetch for herosection 
export const getFetchHeroSection = async () => {
    const response = await axiosInstance.get("/trending/movie/week");
    return response.data.results[0];
}

// api fetch for trending movie today 
export const getTrendingMovieToday = async () => {
    const response = await axiosInstance.get("/trending/movie/day?language=en-US");
    return response.data.results;
}

// api fetch for trending tv today
export const getTrendingTvToday = async () => {
    const response = await axiosInstance.get("/trending/tv/day?language=en-US");
    return response.data.results;
}

// api fetch for genre for movie hero section
export const getGenre = async () => {
    const response = await axiosInstance.get("/genre/movie/list?language=en");
    return response.data.genres;
}