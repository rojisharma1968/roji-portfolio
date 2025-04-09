'use client'
import { motion } from "motion/react";
import { usePageTransition } from "../context/allowPageAnimations";


const PageHeading = ({ text }) => {
  const { allowPageAnimations } = usePageTransition();
  const words = text.split(" ");

  return (
    <div className="w-[75vw] mx-auto md:w-full">
      <h1 className="text-2xl text-white overflow-hidden md:text-4xl lg:text-6xl font-[Boldonse] leading-[1.6] text-center">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-2">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                className="inline-block"
                initial={{ y: 200 }}
                animate={allowPageAnimations ? { y: 0 } : {}}
                transition={{
                  duration: 0.35,
                  ease: [0.83, 0, 0.17, 1],
                  delay: (wordIndex * 6 + charIndex) * 0.02,
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default PageHeading;
