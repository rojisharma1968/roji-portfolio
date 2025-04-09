"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion"; // MotionOne se Framer Motion pe shift kiya

const Skills = () => {
  const constraintRef = useRef(null);
  const timeoutRef = useRef(null);
  const hasMounted = useRef(false);

  const skillIcons = [
    "figmalogo.svg",
    "photoshop.svg",
    "html.svg",
    "css.svg",
    "javascript.svg",
    "tailwindcss.svg",
    "Shopify.svg",
    "reactjs.svg",
    "NextJs.svg",
    "wordpress.svg",
    "github.svg",
    "woocommerce.svg",
  ];

  const [draggingSet, setDraggingSet] = useState(new Set());
  const controlsArray = useRef(skillIcons.map(() => useAnimation()));

  const startResetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (draggingSet.size === 0) {
      timeoutRef.current = setTimeout(() => {
        if (!hasMounted.current) return;

        controlsArray.current.forEach((controls) =>
          controls.start({
            x: 0,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 },
          })
        );
      }, 3000);
    }
  };

  const handleDragStart = (index) => {
    setDraggingSet((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return newSet;
    });
  };

  const handleDragEnd = (index) => {
    setDraggingSet((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  useEffect(() => {
    startResetTimer();
  }, [draggingSet]);

  useEffect(() => {
    hasMounted.current = true;
    return () => {
      hasMounted.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!hasMounted.current) return;
      controlsArray.current.forEach((controls) =>
        controls.start({
          x: 0,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 30 },
        })
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={constraintRef}
      className="relative z-[1] bg-[var(--coloroff-white)] py-10 md:py-15 px-5 md:px-10 overflow-hidden"
    >
      <h2 className="font-[Boldonse] text-center text-black text-2xl md:text-4xl leading-[2]">
        Crafted With These Tools
      </h2>

      <div
        className="w-full md:w-fit grid grid-cols-3 sm:grid-cols-6 gap-5 justify-center border border-[var(--color-purple)] border-dashed mx-auto mt-5 px-5 py-5"
      >
        {skillIcons.map((icon, index) => (
          <motion.div
            key={icon}
            drag
            dragConstraints={constraintRef}
            dragElastic={0.5}
            onDragStart={() => handleDragStart(index)}
            onDragEnd={() => handleDragEnd(index)}
            animate={controlsArray.current[index]}
            whileDrag={{ scale: 1.1, zIndex: 10 }}
            className="size-full sm:size-20 md:size-24 py-3 flex items-center pointer-events-auto px-3 justify-center bg-white border border-dashed border-[var(--color-purple)] rounded-lg cursor-grab"
            style={{ touchAction: "none" }}
          >
            <Image
              src={`/images/${icon}`}
              alt={icon}
              width={60}
              height={60}
              className="object-contain size-auto pointer-events-none"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
