import { getDetail, getCredits } from "@/api/apiFilmDetail";
import type { FetchDetail } from "@/types/FetchDetail";
import type { CreditDetail } from "@/types/CreditDetails";
import { useQuery } from "@tanstack/react-query";


export const useDetailFilm = (mediaType?: string, id?: string) => {
    const fetchDetail = useQuery<FetchDetail | null>({
        queryKey: ["detail-fetch", mediaType, id],
        queryFn: () => getDetail(mediaType, id),
    })

    const creditFetch = useQuery<CreditDetail | null>({
        queryKey: ["credit-fetch", mediaType, id],
        queryFn: () => getCredits(mediaType, id),
    })

    return { fetchDetail, creditFetch }
};