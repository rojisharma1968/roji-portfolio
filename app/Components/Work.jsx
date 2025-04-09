import React from "react";
import WorkCards from "./WorkCards";
import { SendHorizontal } from "lucide-react";
import Link from "next/link";

const Work = () => {
  return (
    <div className="bg-[var(--bgcolor)] relative z-[2] py-10 md:py-22 px-5 md:px-10">
      <h2 className="font-[Boldonse] text-white text-center md:text-left text-2xl md:text-4xl leading-[2]">
        Featured Projects
      </h2>
      <WorkCards />
      <Link href='/works' className="flex mx-auto justify-center gap-3 group bg-[var(--color-purple)] tracking-wider w-full md:w-fit text-white disabled:bg-[#BBA8FF] cursor-pointer px-7 py-3 text-base font-[Boldonse] rounded-lg mt-10">
             
      See All Projects
                  <SendHorizontal
                    className="group-active:-rotate-45 group-hover:-rotate-45 duration-150"
                    size={28}
                  />
      </Link>
    </div>
  );
};

export default Work;
