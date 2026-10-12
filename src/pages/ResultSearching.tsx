import { useSearchParams } from "react-router";
import { Badge } from "@/components/ui/badge";
import { StarIcon, Search} from "lucide-react";
import { Card, CardTitle } from "@/components/ui/card";
import { useFetchFilm } from "@/hooks/useFetchQuery";
import { Link } from "react-router";
import type { TrendingResponse } from "@/types/TrendingResponse";
import Footer from "@/components/Footer";
import { Spinner } from "@/components/ui/spinner";


const ResultSearching = () => {
    const [searchParams] = useSearchParams();

    const queryUser = searchParams.get("query");

    const { result, loading} = useFetchFilm(queryUser);

    if (loading) {
        return (
            <div>
                <div id="result-searching" className="flex flex-col mt-7 gap-2 md:gap-3 lg:gap-4 p-6">
                    <h1 className="text-md  md:text-lg  lg:text-2xl font-bold">{`Search Results for "${queryUser}"`}</h1>
                    <h3 className="text-sm  md:text-md  lg:text-xl font-semibold">{result.length} results found</h3>
                </div>
                <div className="flex mt-40 justify-center items-center">
                    <Spinner className="size-12"/>
                </div>
            </div>
        )}


    if (result.length <= 0) {
        return (
            <div>
                <div id="result-searching" className="flex flex-col mt-7 gap-2 md:gap-3 lg:gap-4 p-6">
                    <h1 className="text-md  md:text-lg  lg:text-2xl font-bold">{`Search Results for "${queryUser}"`}</h1>
                    <h3 className="text-sm  md:text-md  lg:text-xl font-semibold">{result.length} results found</h3>
                </div>
                <div className="flex flex-col gap-5 mt-40 justify-center items-center text-md md:text-xl lg:text-2xl font-bold">
                    <Search className="size-10 md:size-15"/>
                    <h1>No Result Found</h1>
                </div>
            </div>
    )}


    return (
        <div>

        <div id="result-searching" className="flex flex-col mt-7 gap-2 md:gap-3 lg:gap-4 p-6">
            <h1 className="text-md  md:text-lg  lg:text-2xl font-bold">{`Search Results for "${queryUser}"`}</h1>
            <h3 className="text-sm  md:text-md  lg:text-xl font-semibold">{result.length} results found</h3>
        </div>

        <div id="list-film-result" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3">
            {result.map((result: TrendingResponse) => (
            <Link to={`/discover/${result.media_type}/${result.id}`} key={result.id}>
                <div className="p-1" key={result.id}>
                    <Card className="overflow-hidden p-0">
                    <CardTitle className="absolute flex gap-2 ml-3 mt-3">
                        <Badge className="text-yellow-500">
                        <StarIcon /> {result.vote_average.toFixed(1)}
                        </Badge>
                    </CardTitle>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
                        alt=""
                        className="rounded-none! aspect-4/6 object-cover"
                    />
                    </Card>
                    <div id="title-film" className="ml-3 text-md mt-3">
                    <h1 className="font-bold">{result.title || result.name}</h1>
                    <p className="font-extralight text-sm">
                        {result.release_date?.substring(0,4) || result.first_air_date?.substring(0,4)}
                        <span className="capitalize">
                        {" "}
                        · {result.media_type}
                        </span>{" "}
                    </p>
                    </div>
                </div>
                </Link>
            ))}
        </div>

        {/* footer start */}
        < Footer />
        {/* footer end */}
        </div>
    )
}

export default ResultSearching;