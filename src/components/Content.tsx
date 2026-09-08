import Navbar from "./Navbar";
import { Badge } from "@/components/ui/badge";
import { StarIcon, Play, Bookmark } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardTitle } from "@/components/ui/card";

const Content = () => {
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
          src="https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
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
            {/* 4k Dolby badge for mobile start */}
            <Badge
              className="md:hidden bg-hover/45 text-blue-500 rounded-md pt-4 pb-4 pl-2 pr-2 text-bold"
              variant="secondary"
            >
              4K DOLBY
            </Badge>
            {/* 4k Dolby badge for mobile end */}

            {/* 4k Dolby badge for desktop start */}
            <Badge
              className="hidden md:flex  bg-hover/45 text-blue-500 rounded-md pt-4 pb-4 pl-2 pr-2 text-bold"
              variant="secondary"
            >
              4K ULTRA HD | DOLBY ATMOS
            </Badge>
            {/* 4k Dolby badge for desktop end */}

            {/* star for mobile start */}
            <h1
              id="star"
              className="md:hidden flex gap-1 items-center text-yellow-500"
            >
              <StarIcon className="size-5" /> 8.6
            </h1>
            {/* star for mobile end */}

            {/* star for mobile start */}
            <h1 id="datefilm" className="md:hidden text-sm">
              2024 | PG-13
            </h1>
          </div>
          {/* star for mobile end */}

          {/* title film for mobile and dekstop start */}
          <div id="title-film">
            <h1 className="text-2xl md:text-4xl font-black">DUNE: PART TWO</h1>
            <p className="hidden md:inline">LONG LIVE THE FIGHTERS</p>
          </div>
          {/* title film for mobile and dekstop end */}

          {/* star for dekstop start */}
          <div className="hidden md:flex items-center gap-2">
            {/* badge star */}
            <Badge className="bg-background/95 font-black">
              <StarIcon className="text-yellow-500" /> 8.6{" "}
              <span className="font-medium text-hover/90">/10</span>
            </Badge>

            {/* badge year */}
            <Badge className="bg-background/95 font-bold rounded-sm">
              2024
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              veritatis praesentium itaque reiciendis quo tenetur impedit sequi,
              hic repellendus ab quos perferendis beatae neque ea, rerum
              quibusdam cum. Odit, possimus.
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
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="p-1">
                  <Card className="overflow-hidden p-0">
                    <CardTitle className="absolute flex gap-2 ml-3 mt-3">
                      <Badge className="text-yellow-500">
                        <StarIcon /> 8.6
                      </Badge>
                    </CardTitle>
                    <img
                      src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
                      alt=""
                      className="rounded-none"
                    />
                  </Card>
                  <div id="title-film" className="ml-3 text-md mt-3">
                    <h1 className="font-bold">Fast X</h1>
                    <p className="font-extralight">2023</p>
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
