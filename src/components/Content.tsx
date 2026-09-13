import Navbar from "./Navbar";
import { Badge } from "@/components/ui/badge";
import { StarIcon, Play, Bookmark } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardTitle } from "@/components/ui/card";
import { useFetchApi } from "@/api/useFetchApi";

const Content = () => {
  const { movies, heroSection } = useFetchApi();

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
        <div className="absolute flex flex-col gap-3 top-65 md:top-48 left-5 md:left-8">
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
              {heroSection?.release_date} | PG-13
            </h1>
          </div>
          {/* star for mobile end */}

          {/* title film for mobile and dekstop start */}
          <div id="title-film">
            <h1 className="text-2xl md:text-4xl font-black">
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

            {/* badge pg */}
            <Badge className="bg-background/95 font-bold rounded-sm">
              PG-13
            </Badge>

            <h1 id="duration" className="text-sm">
              2h 46m |<span className="text-blue-200"> Sci-Fi</span> |
              <span className="text-blue-200"> Adventure</span>
            </h1>
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
            <Badge className="pt-4 pb-4 pl-3 pr-3 bg-blue-500 text-background rounded-md font-semibold">
              <Play />
              Watch
            </Badge>
            <Badge className="pt-4 pb-4 pl-3 pr-3 bg-hover/50 rounded-md font-semibold">
              <Bookmark />
              List
            </Badge>
          </div>

          {/* little information for dekstop */}
          <div className="hidden md:flex gap-2 items-center text-sm">
            <div id="director">
              <p className="text-sm text-hover/90">
                Director: <span className="text-white">Denis Villenueve</span>
              </p>
            </div>
            <p className="text-hover/90">|</p>
            <div id="staring" className="text-sm text-hover/90">
              <p>
                Starring:{" "}
                <span className="text-white">
                  Timothe Chalemet, Zendaya, Rebecca
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section hero end */}
      {/* section carousel film start */}
      <section className="w-full flex justify-center items-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-8xl mx-auto"
        >
          <CarouselContent className="-ml-1">
            {movies.map((data) => (
              <CarouselItem
                key={data.id}
                className="pl-1 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
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
                      className="rounded-none! aspect-3/5 object-cover"
                    />
                  </Card>
                  <div id="title-film" className="ml-3 text-md mt-3">
                    <h1 className="font-bold">{data.title}</h1>
                    <p className="font-extralight text-sm">
                      {data.release_date}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      {/* section carousel film end */}
    </div>
  );
};

export default Content;
