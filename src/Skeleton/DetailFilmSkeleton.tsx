import Navbar from "@/components/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { StarIcon, Eye} from "lucide-react";
import type { Genres } from "@/types/Genres";
import type { Actor } from "@/types/Actor";
import type { Production } from "@/types/Production";



const DetailFilmSkeleton = () => {
    return (
        <div>
            <Navbar/>

            {/* hero section start */}
            <section id="hero" className="relative w-full h-112.5 md:h-167.5 overflow-hidden">


            {/* button back start */}
            {/* <div className="absolute left-5 top-5 z-1 bg-gray-800 px-4 py-2 rounded-2xl">
            <Link   Link to={"/discover"}>
            <MoveLeft className=""/>
            </Link>
            </div> */}
            {/* button back end */}


            {/* poster path */}
            <div id="poster" className="absolute flex flex-col gap-10 items-center justify-center w-full h-full md:justify-center md:items-center lg:justify-center lg:items-center"> 
                <Skeleton className="w-50 h-75 md:w-75 md:h-113 lg:w-85 lg:h-128 xl:w-95 xl:h-143 object-cover rounded-none bg-gray-500 shadow-xl"/>
            </div>
            {/* poster path */}
            </section>
            {/* hero section end */}


            {/* section mobile & desktop start */}
            <section className="flex flex-col gap-6 md:gap-8 w-full">
            <div id="title" className="flex items-center justify-center">
                <Skeleton className="text-xl h-10 w-71 md:text-4xl md:w-127 lg:text-4xl font-black rounded-md bg-gray-500"></Skeleton>
            </div>
                
            </section>
        {/* section mobile & desktop end */}
        </div>
    )
}

export default DetailFilmSkeleton;