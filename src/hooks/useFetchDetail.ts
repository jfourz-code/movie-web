import { useState, useEffect } from "react";
import { getDetail, getCredits } from "@/api/apiFilmDetail";
import type { FetchDetail } from "@/types/FetchDetail";
import type { CreditDetail } from "@/types/CreditDetails";


export const useDetailFilm = (mediaType?: string, id?: string) => {
    const [fetchDetail, setFetchDetail] = useState<FetchDetail | null>(null);
    const [creditFetch, setCreditFetch] = useState<CreditDetail | null>(null);

    useEffect(() => {
        if (!mediaType || !id) return;

        const fetchData = async () => {
            const [detail, credit] = await Promise.all([
                getDetail(mediaType, id),
                getCredits(mediaType, id)
            ]);
            setFetchDetail(detail);
            setCreditFetch(credit);
        };
        fetchData();
    }, [mediaType, id])

    return { fetchDetail, creditFetch }
};