"use client";
import { motion } from "motion/react";

const Hamburger = ({ isOpen, setIsOpen }) => {
  const barCommon = "w-8 h-[3px] bg-black rounded origin-center";

  return (
    <button
      className="flex items-center drop-shadow-lg md:hidden bg-[var(--coloroff-white)] text-lg px-3 py-2 gap-4 rounded-lg"
      onClick={() => setIsOpen(!isOpen)}
    >
      Menu
      <span className="relative pointer-events-none w-5 h-5 flex items-center justify-center overflow-visible">
        <motion.span
          className={`${barCommon} absolute w-full `}
          animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        <motion.span
          className={`${barCommon} absolute w-full `}
          animate={isOpen ? { scaleX: 0 } : { scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className={`${barCommon} absolute w-full `}
          animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </span>
    </button>
  );
};

export default Hamburger;
