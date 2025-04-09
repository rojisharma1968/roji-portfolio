import React from "react";
import Banner from "./Components/Banner";
import HomeAbout from "./Components/HomeAbout";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";
import Testimonials from "./Components/Testimonials";

const page = () => {
  return (
    <main className="bg-[var(--bgcolor)]">
      <Banner />
      <HomeAbout />
      <Timeline />
      <Skills />
      <Work />
      <Testimonials/>
    </main>
  );
};

export default page;
