import React from "react";
import Labels from "./Labels";
import PathWithCircles from "./PathWithCircles";


const Banner = () => {
  return (
    <div className="w-full h-[120vw] md:h-[60vh] xl:h-screen relative">
      <Labels />
      <PathWithCircles />
      <h1 className="selection:!bg-transparent absolute left-1/2 text-white font-[Boldonse] top-1/2 w-full text-center -translate-x-1/2 text-[7vw] -translate-y-1/2">Frontend Developer</h1>
    </div>
  );
};

export default Banner;
