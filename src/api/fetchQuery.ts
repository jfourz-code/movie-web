import { axiosInstance } from "@/lib/axios";
import type { SearchingQuery } from "@/types/SearchingQuery";

export const fetchQuery = async (query: string | null) => {
    const response = await axiosInstance.get("/search/multi", {
    params: {
    query,
    language: "en-US",
    page: 1,
    },
        });
    const filter = response.data.results.filter((data: SearchingQuery) => data.media_type !=="person" && data.poster_path !== null);
    return filter;
}