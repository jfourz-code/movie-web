import Navbar from "@/components/Navbar";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Badge } from "@/components/ui/badge";
import { StarIcon, Eye, MoveLeft } from "lucide-react";
import { Link } from "react-router";
import type { Genres } from "@/types/Genres";
import type { Actor } from "@/types/Actor";
import type { FetchDetail } from "@/types/FetchDetail";
import type { CreditDetail } from "@/types/CreditDetails";


const DetailFilm = () => {

  // filmDetail
  const [fetchDetail, setFetchDetail] = useState<FetchDetail>();
  const [creditFetch, setCreditFetch] = useState<CreditDetail>(null);

  // get id with useParams
  let params = useParams();

  // fetch data filmDetail
  useEffect(() => {
    if (params.media_type === "movie") {
      const movieDetail = async () => {
        const response = await axiosInstance.get(`/movie/${params.id}`);
        setFetchDetail(response.data);
      }
      movieDetail();
    } else if (params.media_type === "tv") {
      const tv = async () => {
        const response = await axiosInstance.get(`/tv/${params.id}`);
        setFetchDetail(response.data);
      }
      tv()
    }
  }, [params.media_type, params.id])


  // fetch credit
  useEffect(() => {
    if (params.media_type === "movie") {
      const creditMovie = async () => {
      const response = await axiosInstance.get(`movie/${params.id}/credits`);
      setCreditFetch(response.data);
    }
    creditMovie();
    } else if (params.media_type === "tv") {
      const creditTv = async () => {
      const response = await axiosInstance.get(`tv/${params.id}/credits`);
      setCreditFetch(response.data);
      }
    creditTv();
    }
  }, [params.id])


  // guard, if the data null show 'Loading..'
  if (!fetchDetail || !creditFetch) {
    return (
      <div>
        <Navbar />
        <div className="h-screen w-full flex justify-center items-center">
          <h1 className="text-3xl font-black">Loading..</h1>
        </div>
      </div>
    )
  }



  // duration films start
  const hours = Math.floor(fetchDetail.runtime / 60);
  const minute = fetchDetail.runtime % 60;
  // duration film end
  
  

  return <div>
  {/* navbar start */}
  < Navbar />
  {/* navbar end */}


  {/* hero section start */}
  <section id="hero" className="relative w-full h-112.5 md:h-167.5 overflow-hidden">

    {/* image hero */}
    <img src={`https://image.tmdb.org/t/p/original/${fetchDetail.backdrop_path}`} alt="" className="absolute inset-0 w-full h-full object-cover"/>

    {/* gradient hero */}
    <div id="gradient" className="absolute inset-0 bg-linear-to-t from-background/98 to-transparent"></div>

    {/* button back start */}
      <div className="absolute left-5 top-5 z-1 bg-gray-800 px-4 py-2 rounded-2xl">
        <Link to={"/discover"}>
          <MoveLeft className=""/>
        </Link>
      </div>
    {/* button back end */}


    {/* poster path */}
    <div id="poster" className="absolute flex flex-col gap-10 items-center justify-center w-full h-full md:justify-start md:items-start md:m-20 lg:m-30"> 
      <img src={`https://image.tmdb.org/t/p/original/${fetchDetail.poster_path}`}  alt="" className="w-50 md:w-60 lg:w-65 xl:w-70 object-cover shadow-xl"/>
    </div>
    {/* poster path */}
  </section>
  {/* hero section end */}


  {/* section mobile start */}
  <section className="flex flex-col gap-6 w-full">
    <div id="title" className="flex items-center justify-center">
      <h1 className="sm:text-2xl md:text-4xl font-black">{fetchDetail.original_title || fetchDetail.name}</h1>
    </div>
    
    {/* rating start */}
    <div id="rating" className="flex justify-center items-center px-3">
      <div className="flex justify-center items-center gap-6 p-5 bg-gray-800 w-full max-w-xl rounded-2xl">
      
        <Badge className="bg-yellow-500 text-sm p-3">
          <StarIcon className="size-2" />
          {fetchDetail.vote_average.toFixed(1)} <span>/10</span>
        </Badge>

        <span>|</span>

        <div className="flex items-center gap-2 text-md font-medium">
          <Eye size={20} />
          {fetchDetail.popularity.toFixed(3)}
        </div>

        <span>|</span>

        <div>
          {params.media_type === "movie"? <h1 className="text-md font-medium">{hours}h{minute}m</h1> : <h1 className="text-md font-medium">{fetchDetail.number_of_episodes} Episode</h1>}
        </div>
      </div>
    </div>
    {/* rating end */}

    {/* overview start */}
    <div id="overview" className="flex justify-center items-center px-5">
        <div className="flex flex-col gap-4 w-full w-max-xl">
          <h1 className="text-xl font-semibold"> <span className="text-2xl text-blue-500" >|</span> Overview</h1>
          <p  className="text-md font-normal">{fetchDetail.overview}</p>
        </div>
    </div>

    <div id="genre" className="flex justify-center items-center px-5">
      <div className="flex flex-col gap-4 w-full w-max-xl">
        <h1 className="text-xl font-semibold"> <span className="text-2xl text-blue-500">|</span> Genre </h1>
        
        <div className="grid grid-cols-1 gap-2">
          {fetchDetail.genres.map((data: Genres) => (
          <Badge className="text-sm p-3 bg-blue-700" key={data.id} >{data.name}</Badge>
        ))}
        </div>
      </div>
    </div>
    {/* overview end */}

    {/* actor start */}
    <div id="actor" className="flex justify-center items-center px-5">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
        <h1 className="text-xl font-semibold"> <span className="text-2xl text-blue-500" > | </span> Actors</h1>

        {creditFetch.cast.slice(0,10).map((actor: Actor) => (
          <div  key={actor.id} className="flex items-center gap-6 w-full rounded-2xl bg-gray-900 p-4">
            <img src="https://github.com/shadcn.png" alt="" className="rounded-full size-16 object-cover"/>
            <div id="name-actor" className="flex flex-col">
              <h1 className="text-md font-semibold">{actor.name}</h1>
              <h3 className="text-sm font-normal">{actor.known_for_department}</h3>
            </div>
        </div>
        ))}
      </div>
    </div>
    {/* actor end */}

    {/* production start */}
    <div id="production" className="flex justify-center items-center px-5">
        <div className="flex flex-col gap-4 w-full w-max-xl">
          <h1 className="text-xl font-semibold"> <span className="text-2xl text-blue-500">|</span> Production</h1>
          {fetchDetail.production_companies.map((production: any) => (
            <Badge className="text-sm p-3 bg-blue-700" key={production.id}>{production.name} ({production.origin_country})</Badge>
          ))}
        </div>
    </div>
    {/* production end */}
  </section>
  {/* section mobile end */}


  </div>;
};

export default DetailFilm;