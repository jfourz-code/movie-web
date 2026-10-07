import { axiosInstance } from "@/lib/axios";
import type { SearchingQuery } from "@/types/SearchingQuery";
import { useEffect, useState } from "react"

export const useFetchQuery = (query: string | null) => {
    const [ result, setResult ] =  useState([]);

    useEffect(() => {
        if (!query) {
            setResult([]);
            return
        }

        const timer = setTimeout(async () => {
            const response = await axiosInstance.get(`/search/multi?query=${query}&language=en-US&page=1`);
            const filtered = response.data.results.filter((data: SearchingQuery) => data.media_type !== "person" && data.poster_path !== null);
            setResult(filtered);
        }, 200);

        return () => clearTimeout(timer);

    }, [query])

    return { result };
}