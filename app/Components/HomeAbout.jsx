'use client'
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import StatsSection from "./StatsSection";

const HomeAbout = () => {
  const h2Ref = useRef(null);


  const { scrollYProgress } = useScroll({
    target: h2Ref,
    offset: ["start 90%", "end 20%"], 
  });


  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150, 
    damping: 20,   
    mass: 1,
  });

  const text =
    "A frontend developer who loves to create breathtaking yet usable digital experiences. High on performance in JavaScript, React, WordPress, and Shopify, working with responsive interfaces and attractive designs for web pages. Functionality merged with creativity gives rise to a real sense of smoothness and flawless performance, from the user's perspective.";

  const words = text.split(" ");

  return (
    <div className="relative">
      <div className="bg-[var(--coloroff-white)] rounded-t-2xl md:rounded-t-4xl relative z-[2] py-10 md:py-15 px-5 md:px-10">
      
        <h2
          ref={h2Ref}
          className="font-[Boldonse] text-base md:text-2xl lg:text-4xl 2xl:text-5xl leading-[2] relative flex flex-wrap"
        >
          {words.map((word, index) => {
            const progressStart = (index - 5) / words.length; 
            const progressEnd = Math.min((index + 5) / words.length, 1);

            const color = useTransform(
              smoothProgress,
              [progressStart, progressEnd],
              ["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 1)"]
            );

            return (
              <motion.span key={index} style={{ color }} className="mr-2">
                {word}
              </motion.span>
            );
          })}
        </h2>

        <StatsSection />
      </div>
    </div>
  );
};

export default HomeAbout;
