import { useEffect, useState } from "react"

export const useFetchQuery = (query: string | null) : string => {
    const [ result, setResult ] =  useState<string>(query ?? "");

    useEffect(() => {
        const timer = setTimeout(() => {
            setResult(query ?? "")
        }, 200)
        return () => clearTimeout(timer);

    }, [query])

    return result;
}