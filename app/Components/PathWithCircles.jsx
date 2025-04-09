"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePageTransition } from "../context/allowPageAnimations";

const pathData = `M0 451.777C144.571 470.573 236.053 507.357 430 650.277C623.947 793.198 744.5 632.777 766.5 448.277C788.5 263.777 813.255 9.50003 1029 9.5C1090.5 9.49999 1195.68 79.3789 1182 214.277C1165.5 377 1014.83 503.229 1066 629C1119.5 760.5 1343.09 746.551 1399 590.277C1446.5 457.5 1460 241.277 1567 232.277C1674 223.277 1682.23 368.192 1698.5 442.5`;
const mbPathData = `M0 92.4999C0 92.4999 11 92.4999 18 93.4999C41.3565 96.8366 47.4244 121.079 71 122C113.296 123.653 126.335 6.72044 168.5 3.00001C219.5 -1.5 203 92.4999 239 107C278.608 122.953 271.854 21.6226 310 26C340.5 29.5 342.5 93.4999 342.5 93.4999`;

const circles = [
  { cx: 432, cy: 651.2 },
  { cx: 754, cy: 517.277 },
  { cx: 1031, cy: 10 },
  { cx: 1182, cy: 220 },
  { cx: 1090, cy: 668.5 },
  { cx: 1395, cy: 600 },
  { cx: 1580, cy: 232 },
  { cx: 1700.5, cy: 450 },
];

const mbCircles = [
  { cx: 18, cy: 94 },
  { cx: 71, cy: 122 },
  { cx: 175, cy: 4 },
  { cx: 240, cy: 107 },
  { cx: 308, cy: 26 },
  { cx: 342, cy: 100.5 },
];

const PathWithCircles = () => {
  const { allowPageAnimations } = usePageTransition();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateSize(); // Initial check
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <svg
      viewBox={isMobile ? "0 0 360 110" : "0 0 1776 785"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMinYMid meet"
    >
      <motion.path
        d={isMobile ? mbPathData : pathData}
        stroke="#8463FF"
        strokeWidth={isMobile ? "5" : "18"}
        fill="none"
        initial={{ pathLength: 0 }}
        animate={allowPageAnimations ? { pathLength: 1 } : {}}
        transition={{ duration: 4, ease: "easeInOut" }}
        strokeLinecap="round"
      />

      {(isMobile ? mbCircles : circles).map((circle, i) => (
        <motion.circle
          key={i}
          cx={circle.cx}
          cy={circle.cy}
          r={isMobile ? "6" : "12"}
          fill="white"
          stroke="#8463FF"
          strokeWidth={isMobile ? "2.5" : "5"}
          initial={{ scale: 0, opacity: 0 }}
          animate={allowPageAnimations ? { scale: 1, opacity: 1 } : {}}
          transition={{
            delay: (i + 1) * 0.5,
            duration: 0.4,
            type: "spring",
            stiffness: 300,
          }}
        />
      ))}
    </svg>
  );
};

export default PathWithCircles;
