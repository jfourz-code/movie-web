import { useFetchQuery } from "@/api/debounce";
import { fetchQuery } from "@/api/fetchQuery";
import { useQuery } from "@tanstack/react-query";

export const useFetchFilm = (query: string | null) => {
    const debounce =  useFetchQuery(query)

    const searchQuery = useQuery({
        queryKey: ["search", debounce],
        queryFn: () => fetchQuery(debounce),
        enabled: debounce.trim().length > 0,
    })    

    return { result: searchQuery.data ?? [],
            loading: searchQuery.isPending,
            }
}