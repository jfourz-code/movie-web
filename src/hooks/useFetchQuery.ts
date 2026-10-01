import { axiosInstance } from "@/lib/axios";
import type { SearchingQuery } from "@/types/SearchingQuery";
import { useEffect, useState } from "react"

export const useFetchQuery = (query: string) => {
    const [ result, setResult ] =  useState([]);

    useEffect(() => {
        if (!query) {
            setResult([]);
            return
        }

        const timer = setTimeout(async () => {
            const response = await axiosInstance.get(`/search/multi?query=${query}`);
            const filtered = response.data.results.filter((data: SearchingQuery) => data.media_type !== "person");
            setResult(filtered);
        }, 100);

        return () => clearTimeout(timer);

    }, [query])

    return { result };
}