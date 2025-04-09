"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const labels = [
  {
    text: "I’m Roji",
    className: "font-[Boldonse] text-base md:text-2xl absolute top-[30%] left-8 md:left-[7.5%] md:top-[28%] py-2 md:py-3",
  },
  {
    text: "Problem Solving",
    className: "text-base absolute left-5 md:left-10 top-5 md:top-10 py-1",
  },
  {
    text: "User Interface",
    className: "text-base absolute left-5 md:left-10 bottom-5 md:bottom-10 py-1",
  },
  {
    text: "User Experience",
    className: "text-base absolute right-5 md:right-20 top-16 md:top-[4.5rem] py-1",
  },
  {
    text: "HTML",
    className: "text-base absolute right-10 md:right-[7.5rem] bottom-10 md:bottom-[4.5rem] py-1",
  },
];

const Labels = () => {
  const [visibleTextIndex, setVisibleTextIndex] = useState(0);
  const [completedIndexes, setCompletedIndexes] = useState([]);

  useEffect(() => {
    if (visibleTextIndex < labels.length) {
      const delay = labels[visibleTextIndex].text.length * 50 + 600;
      const timeout = setTimeout(() => {
        setCompletedIndexes((prev) => [...prev, visibleTextIndex]);
        setVisibleTextIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [visibleTextIndex]);

  return (
    <>
      {labels.map((label, index) => {
        const characters = label.text.split("");
        const isTyping = index === visibleTextIndex;
        const isCompleted = completedIndexes.includes(index);

        return (
          <span
            key={index}
            className={`border-2 border-dashed border-[var(--color-purple)] text-white px-4 whitespace-nowrap overflow-hidden ${label.className}`}
            style={{
              position: "absolute",
              display: "inline-block",
            }}
          >
            {/* Lock size */}
            <span className="invisible block">{label.text}</span>

            {/* Typing Animation */}
            {isTyping && (
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ whiteSpace: "pre" }}
              >
                {characters.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.05,
                      delay: i * 0.05,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            )}

            {/* Final static text after animation */}
            {isCompleted && (
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                {label.text}
              </span>
            )}
          </span>
        );
      })}
    </>
  );
};

export default Labels;
