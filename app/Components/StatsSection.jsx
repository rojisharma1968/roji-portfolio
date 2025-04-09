"use client";

import dynamic from "next/dynamic";
import { useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import happyAnim from "../../public/images/happy.json";
import workAnim from "../../public/images/work.json";
import projectAnim from "../../public/images/project.json";


const stats = [
  {
    id: 1,
    icon: happyAnim,
    value: 80,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    id: 3,
    icon: workAnim,
    value: 10,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    id: 2,
    icon: projectAnim,
    value: 150,
    suffix: "+",
    label: "Project Complete",
  },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 4000;
    const incrementTime = 50;

    let timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <div className="mt-10 lg:mt-15 border-2 md:py-5 border-dashed border-[var(--color-purple)] mx-auto grid grid-cols-2 md:grid-cols-3 md:gap-10 text-center">
      {stats.map((stat, index, arr) => (
        <div
          key={stat.id}
          className={`flex flex-col w-full py-4 md:py-10 items-center 
            ${
              arr.length - 1 === index
                ? "border-t-2 md:border-0 border-[var(--color-purple)] border-dashed justify-self-center col-span-2 md:col-span-1 md:justify-self-auto"
                : arr.length - 2 === index
                ? "md:border-r-2 border-[var(--color-purple)] border-dashed"
                : "border-r-2 border-[var(--color-purple)] border-dashed"
            }`}
        >
          <Lottie
            animationData={stat.icon}
            loop
            autoplay
            className={`${
              index === 0
                ? "p-5"
                : "p-0"
            } w-auto h-35 md:h-40 mx-auto`}
          />

          <div className="font-[Boldonse] text-3xl md:text-4xl mt-2">
            <Counter value={stat.value} suffix={stat.suffix} />
          </div>
          <p className="text-sm mt-2 md:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
