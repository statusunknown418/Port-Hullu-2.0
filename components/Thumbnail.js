import { ThumbUpIcon } from "@heroicons/react/outline";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Thumbnail = ({ allProps }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="p-2 group cursor-pointer transition-all transform  sm:hover:scale-105 ease-in group-hover:z-50 overflow-hidden">
      <Image
        src={
          `${BASE_URL}${allProps.backdrop_path || allProps.poster_path}` ||
          `${BASE_URL}${allProps.poster_path}`
        }
        layout="responsive"
        height={1080}
        width={1920}
      />
      <div className="p-3">
        <p className="truncate max-w-md font-normal text-[1rem]">{allProps.overview}</p>
        <h2 className="text-xl font-medium transition-all duration-150 ease-in-out group-hover:font-bold ">
          {allProps.title || allProps.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300  text-[1rem] font-light">
          {allProps.media_type && `${allProps.media_type}`} ⨠{" "}
          {allProps.release_date || allProps.first_air_date} ⨠{" "}
          <ThumbUpIcon className="h-5 mx-3" /> {allProps.vote_count}
        </p>
      </div>
    </div>
  );
};
