import Navbar from "./Navbar";
import { Badge } from "@/components/ui/badge";
import { StarIcon, Play, Bookmark, Info } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardTitle } from "@/components/ui/card";
import { useFetchApi } from "@/api/useFetchApi";
import { Link } from "react-router";
import { Skeleton } from "@/components/ui/skeleton";

const Content = () => {
  const { heroSection, genre, trendingMoviesToday, trendingTvToday } =
    useFetchApi();

  // for found name genre
  const genresId = heroSection?.genre_ids.map((id) => {
    const found = genre.find((item) => item.id === id);
    return found?.name;
  });


  if (!heroSection) {
    return (
      <div>
        <Navbar />
        {/* section hero start */}
      <section
        id="hero"
        className="relative w-full h-112.5 md:h-167.5 overflow-hidden" 
      >
        <Skeleton
          className="absolute inset-0 w-full h-full object-cover bg-gray-700 rounded-none"
        />

        {/* star and data film */}
        <div className="absolute flex flex-col gap-3 top-65 md:top-60 left-5 md:left-8">
          <div id="star-and-date-film" className="flex gap-3 items-center">
            {/* star for mobile start */}
            <Skeleton
              id="star"
              className="md:hidden flex gap-1 items-center bg-gray-600"
            >
            </Skeleton>
            {/* star for mobile end */}

            {/* star for mobile start */}
            <Skeleton id="datefilm" className="md:hidden text-sm bg-gray-500">
            </Skeleton>
          </div>
          {/* star for mobile end */}

          {/* title film for mobile and dekstop start */}
          <div id="title-film">
            <Skeleton className="text-2xl md:text-5xl font-black bg-gray-500 w-2xl h-12 ">
            </Skeleton>
          </div>
          {/* title film for mobile and dekstop end */}

          {/* star for dekstop start */}
          <div className="hidden md:flex items-center gap-2">
            {/* badge star */}
            <Skeleton className="font-black bg-gray-500">
            </Skeleton>

            {/* badge year */}
            <Skeleton className="bg-gray-700 font-bold rounded-sm">
            </Skeleton>

            <div id="genre" className="flex gap-1">
              <Skeleton className="text-sm text-blue-200 bg-gray-500">
              </Skeleton>
              <Skeleton className="text-sm text-blue-200 bg-gray-500">
              </Skeleton>
            </div>
          </div>
          {/* star for dekstop end */}

          {/* description film */}
          <div id="description-film">
            <Skeleton className="line-clamp-1 md:line-clamp-3 leading-relaxed text-sm font-light max-w-xl w-88 h-6 md:max-w-2xl md:w-2xl md:h-17 bg-gray-500 ">
            </Skeleton>
          </div>

          {/* button watch and list */}
          <div id="button" className="flex gap-3 items-center">
              <Skeleton className="pt-4 pb-4 pl-3 pr-3 text-background rounded-md font-semibold bg-gray-500 w-24 h-9">
                
              </Skeleton>
            {/* <Badge className="pt-4 pb-4 pl-3 pr-3 bg-hover/50 rounded-md font-semibold">
              <Bookmark />
              List
            </Badge> */}
          </div>
        </div>
      </section>
      {/* section hero end */}
      </div>
    )
  }

  return (
    <div className="relative h-screen">
      {/* navbar */}
      <Navbar />
      {/* content */}

      {/* section hero start */}
      <section
        id="hero"
        className="relative w-full h-112.5 md:h-167.5 overflow-hidden"
      >
        <img
          src={`https://image.tmdb.org/t/p/original${heroSection?.backdrop_path}`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* gradient */}
        <div
          id="gradient"
          className="absolute inset-0 bg-linear-to-t from-background/98 to-transparent"
        ></div>

        {/* star and data film */}
        <div className="absolute flex flex-col gap-3 top-65 md:top-60 left-5 md:left-8">
          <div id="star-and-date-film" className="flex gap-3 items-center">
            {/* star for mobile start */}
            <h1
              id="star"
              className="md:hidden flex gap-1 items-center text-yellow-500"
            >
              <StarIcon className="size-5" />{" "}
              {heroSection?.vote_average.toFixed(1)}
            </h1>
            {/* star for mobile end */}

            {/* star for mobile start */}
            <h1 id="datefilm" className="md:hidden text-sm">
              {heroSection?.release_date}
            </h1>
          </div>
          {/* star for mobile end */}

          {/* title film for mobile and dekstop start */}
          <div id="title-film">
            <h1 className="text-2xl md:text-5xl font-black">
              {heroSection?.title}
            </h1>
          </div>
          {/* title film for mobile and dekstop end */}

          {/* star for dekstop start */}
          <div className="hidden md:flex items-center gap-2">
            {/* badge star */}
            <Badge className="bg-background/95 font-black">
              <StarIcon className="text-yellow-500" />{" "}
              {heroSection?.vote_average.toFixed(1)}{" "}
              <span className="font-medium text-hover/90">/10</span>
            </Badge>

            {/* badge year */}
            <Badge className="bg-background/95 font-bold rounded-sm">
              {heroSection?.release_date}
            </Badge>

            <div id="genre" className="flex gap-1">
              <h1 className="text-sm text-blue-200">
                {" "}
                {genresId ? `${genresId[0]} |` : ""}{" "}
              </h1>
              <h1 className="text-sm text-blue-200">
                {" "}
                {genresId ? `${genresId[1]} ` : ""}{" "}
              </h1>
            </div>
          </div>
          {/* star for dekstop end */}

          {/* description film */}
          <div id="description-film">
            <p className="line-clamp-1 md:line-clamp-3 leading-relaxed text-sm font-light max-w-xl  md:max-w-2xl">
              {heroSection?.overview}
            </p>
          </div>

          {/* button watch and list */}
          <div id="button" className="flex gap-3 items-center">
            <Link to={`/discover/${heroSection?.media_type}/${heroSection?.id}`}>
              <Badge className="pt-4 pb-4 pl-3 pr-3 bg-blue-500 text-background rounded-md font-semibold">
                <Info />
                See More
              </Badge>
            </Link>
            
            {/* <Badge className="pt-4 pb-4 pl-3 pr-3 bg-hover/50 rounded-md font-semibold">
              <Bookmark />
              List
            </Badge> */}
          </div>
        </div>
      </section>
      {/* section hero end */}

      {/* section carousel movie start (trending today) */}
      <section className="flex flex-col gap-4 p-6 justify-center items-center">
        <h1 className="w-full text-xl md:text-3xl  ml-3 font-bold">
          {" "}
          <span className="text-blue-200">|</span> Trending Movie Today
        </h1>
        <div className="w-full flex justify-center items-center">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full max-w-8xl mx-auto"
          >
            <CarouselContent className="-ml-1">
              {trendingMoviesToday.map((data) => (
                <CarouselItem
                  key={data.id}
                  className="pl-1 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <Link to={`/discover/${data.media_type}/${data.id}`}>
                    <div className="p-1">
                    <Card className="overflow-hidden p-0">
                      <CardTitle className="absolute flex gap-2 ml-3 mt-3">
                        <Badge className="text-yellow-500">
                          <StarIcon /> {data.vote_average.toFixed(1)}
                        </Badge>
                      </CardTitle>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                        alt=""
                        className="rounded-none! aspect-4/6 object-cover"
                      />
                    </Card>
                    <div id="title-film" className="ml-3 text-md mt-3">
                      <h1 className="font-bold">{data.title}</h1>
                      <p className="font-extralight text-sm">
                        {data.release_date.substring(0, 4)}
                        <span className="capitalize">
                          {" "}
                          · {data.media_type}
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="right-0 rounded-md size-15  border-none bg-transparent hover:bg-background" />
            <CarouselPrevious className="left-0 rounded-md size-15 border-none bg-transparent hover:bg-background" />
          </Carousel>
        </div>
      </section>
      {/* section carousel movie end (trending today) */}

      {/* section carousel tv start (trending today) */}
      <section className="flex flex-col gap-4 p-6 justify-center items-center">
        <h1 className="w-full text-xl md:text-3xl  ml-3 font-bold">
          {" "}
          <span className="text-blue-200">|</span> Trending Tv Today
        </h1>
        <div className="w-full flex justify-center items-center">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full max-w-8xl mx-auto"
          >
            <CarouselContent className="-ml-1">
              {trendingTvToday.map((data) => (
                <CarouselItem
                  key={data.id}
                  className="pl-1 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <Link to={`/discover/${data.media_type}/${data.id}`}>
                  <div className="p-1">
                    <Card className="overflow-hidden p-0">
                      <CardTitle className="absolute flex gap-2 ml-3 mt-3">
                        <Badge className="text-yellow-500">
                          <StarIcon /> {data.vote_average.toFixed(1)}
                        </Badge>
                      </CardTitle>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                        alt=""
                        className="rounded-none! aspect-4/6 object-cover"
                      />
                    </Card>
                    <div id="title-film" className="ml-3 text-md mt-3">
                      <h1 className="font-bold">{data.name}</h1>
                      <p className="font-extralight text-sm">
                        {data.first_air_date.substring(0, 4)}
                        <span className="capitalize">
                          {" "}
                          · {data.media_type}
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="right-0 rounded-md size-15  border-none bg-transparent hover:bg-background" />
            <CarouselPrevious className="left-0 rounded-md size-15 border-none bg-transparent hover:bg-background" />
          </Carousel>
        </div>
      </section>
      {/* section carousel tv end (trending today) */}
    </div>
  );
};

export default Content;
