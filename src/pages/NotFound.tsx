import { FaceSlightlyFrowning } from "lucide-react";

const NotFound = () => {

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen w-full">
      <FaceSlightlyFrowning className="size-13"/>
      <h1 className="text-2xl md:text-3xl font-bold">Error 404 Not Found</h1>
    </div>
  );
};

export default NotFound;
