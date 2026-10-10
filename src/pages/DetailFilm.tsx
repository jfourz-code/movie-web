import Navbar from "@/components/Navbar";
import { useParams } from "react-router";
import { Badge } from "@/components/ui/badge";
import { StarIcon, Eye } from "lucide-react";
import type { Genres } from "@/types/Genres";
import type { Actor } from "@/types/Actor";
import type { Production } from "@/types/Production";
import { useDetailFilm } from "@/hooks/useFetchDetail";
import DetailFilmSkeleton from "@/Skeleton/DetailFilmSkeleton";
import Footer from "@/components/Footer";
import { UserRound } from "lucide-react";

const DetailFilm = () => {

  // get id with useParams
  const { media_type, id } = useParams();
  const { fetchDetail, creditFetch} = useDetailFilm(media_type, id);

  // guard, if the data null show 'Loading..'
  if (fetchDetail.isPending || creditFetch.isPending) {
    return (
      <div>
        < DetailFilmSkeleton />
      </div>
    )
  }

  // duration films start
  const runtime = fetchDetail.data?.runtime ?? 0;

  const hours =  Math.floor(runtime / 60);
  const minute = runtime % 60;
  // duration film end
  

  return ( 
    <div>
  {/* navbar start */}
    < Navbar />
  {/* navbar end */}


  {/* hero section start */}
  <section id="hero" className="relative w-full h-112.5 md:h-167.5 overflow-hidden">

    {/* image hero */}
    <img src={`https://image.tmdb.org/t/p/original/${fetchDetail.data?.backdrop_path || fetchDetail.data?.poster_path}`} alt="" className="absolute inset-0 w-full h-full object-cover"/>

    {/* gradient hero */}
    <div id="gradient" className="absolute inset-0 bg-linear-to-t from-background/98 to-transparent"></div>

    {/* button back start */}
      {/* <div className="absolute left-5 top-5 z-1 bg-gray-800 px-4 py-2 rounded-2xl">
        <Link to={"/discover"}>
          <MoveLeft className=""/>
        </Link>
      </div> */}
    {/* button back end */}


    {/* poster path */}
    <div id="poster" className="absolute flex flex-col gap-10 items-center justify-center w-full h-full md:justify-center md:items-center lg:justify-center lg:items-center"> 
      <img src={`https://image.tmdb.org/t/p/original/${fetchDetail.data?.poster_path}`}  alt="" className="w-50 md:w-75 lg:w-85 xl:w-95 object-cover shadow-xl"/>
    </div>
    {/* poster path */}
  </section>
  {/* hero section end */}


  {/* section mobile & desktop start */}
  <section className="flex flex-col gap-6 md:gap-8 w-full">
    <div id="title" className="flex items-center justify-center">
      <h1 className="text-xl md:text-4xl lg:text-4xl font-black">{fetchDetail.data?.original_title || fetchDetail.data?.name}</h1>
    </div>
    
    {/* rating start */}
    <div id="rating" className="flex justify-center items-center px-3">
      <div className="flex justify-center items-center gap-6 md:justify-evenly lg:justify-evenly p-5 bg-gray-800 w-full max-w-xl rounded-2xl">
      
        <Badge className="bg-yellow-500 text-sm md:text-xl lg:text-xl p-3">
          <StarIcon className="size-2" />
          {fetchDetail.data?.vote_average.toFixed(1)} <span>/10</span>
        </Badge>

        <span>|</span>

        <div className="flex items-center gap-2 text-md md:text-xl lg:text-xl font-medium">
          <Eye className="size-5 md:size-7 lg:size-7" />
          {fetchDetail.data?.popularity.toFixed(3)}
        </div>

        <span>|</span>

        <div>
          {media_type === "movie"? <h1 className="text-md md:text-xl lg:text-xl font-medium">{hours}h{minute}m</h1> : <h1 className="text-md md:text-xl lg:text-xl  font-medium">{fetchDetail.data?.number_of_episodes} Eps</h1>}
        </div>
      </div>
    </div>
    {/* rating end */}

    {/* overview start */}
    <div id="overview" className="flex justify-center items-center px-5">
        <div className="flex flex-col gap-4 w-full w-max-xl">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold"> <span className="text-2xl text-blue-500" >|</span> Overview</h1>
          <p  className="text-md md:text-lg lg:text-lg font-normal">{fetchDetail.data?.overview}</p>
        </div>
    </div>
    {/* overview end */}

    {/* genre start */}
    <div id="genre" className="flex justify-center items-center px-5">
      <div className="flex flex-col gap-4 w-full w-max-xl">
        <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold"> <span className="text-2xl text-blue-500">|</span> Genre </h1>
        
        <div className="grid grid-cols-1 gap-2">
          {fetchDetail.data?.genres.map((data: Genres) => (
          <Badge className="text-sm md:text-md lg:text-md p-3 bg-blue-700" key={data.id} >{data.name}</Badge>
        ))}
        </div>
      </div>
    </div>
    {/* genre end */}

    {/* actor start */}
    <div id="actor" className="flex px-5">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold"> <span className="text-2xl text-blue-500" > | </span> Actors</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
            {creditFetch.data?.cast.slice(0,10).map((actor: Actor) => (
              <div  key={actor.id} className="flex items-center gap-6 w-full rounded-2xl bg-gray-900 p-4">
                {(actor.profile_path !== null) ? (
                  <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt="" className="rounded-full size-16 md:size-17 lg:size-17 object-cover"/>
                ) : (
                  <UserRound strokeWidth={0.4} className="rounded-full size-16 md:size-17 lg:size-17 object-cover"/>
                )}
                
                <div id="name-actor" className="flex flex-col">
                  <h1 className="text-md md:text-lg lg:text-lg font-semibold">{actor.name}</h1>
                  <h3 className="text-sm md:text-md lg:text-md font-normal">{actor.known_for_department}</h3>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* actor end */}

    {/* production start */}
    <div id="production" className="flex justify-center items-center px-5">
        <div className="flex flex-col gap-4 w-full w-max-xl">
          <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold"> <span className="text-2xl text-blue-500">|</span> Production</h1>
          {fetchDetail.data?.production_companies.map((production: Production) => (
            <Badge className="text-sm md:text-md lg:text-md p-3 bg-blue-700" key={production.id}>{production.name} ({production.origin_country})</Badge>
          ))}
        </div>
    </div>
    {/* production end */}
  </section>
  {/* section mobile & desktop end */}

    {/* footer start */}
    < Footer />
    {/* footer end */}
  </div>
  );
};

export default DetailFilm;