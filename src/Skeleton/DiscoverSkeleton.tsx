import Navbar from "../components/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const DiscoverSkeleton = () => {
    return (
        <div>
        <Navbar />
        {/* section hero start */}
        <section
        id="hero"
        className="relative w-full h-112.5 md:h-167.5 overflow-hidden" 
        >
        <Skeleton
            className="absolute inset-0 w-full h-full object-cover bg-background rounded-none"
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

        {/* section carousel movie start (trending today) */}
        <section className="flex flex-col gap-4 p-6 justify-center items-center">
        <Skeleton className="w-full text-xl md:text-3xl ml-3 font-bold h-9 bg-gray-500 rounded-md">
            {" "}
            <span className="text-blue-200"></span>
        </Skeleton>
        <div className="w-full flex justify-center items-center">
            <Carousel
            opts={{
                align: "start",
                loop: false,
            }}
            className="w-full max-w-8xl mx-auto"
            >
            <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem
                    key={i}
                    className="pl-1 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                    <Skeleton className="p-1 aspect-4/6 bg-gray-500">
                    </Skeleton>
                </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>
        </div>
        </section>
        {/* section carousel movie end (trending today) */}

        {/* section carousel tv start (trending today) */}
        <section className="flex flex-col gap-4 p-6 justify-center items-center">
        <Skeleton className="w-full text-xl md:text-3xl ml-3 font-bold h-9 bg-gray-500 rounded-md">
            {" "}
            <span className="text-blue-200"></span>
        </Skeleton>
        <div className="w-full flex justify-center items-center">
            <Carousel
            opts={{
                align: "start",
                loop: false,
            }}
            className="w-full max-w-8xl mx-auto"
            >
            <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem
                    key={i}
                    className="pl-1 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                    <Skeleton className="p-1 aspect-4/6 bg-gray-500">
                    </Skeleton>
                </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>
        </div>
        </section>
        {/* section carousel tv end (trending today) */}
        </div>
    )
}

export default DiscoverSkeleton;