"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { usePageTransition } from "../context/allowPageAnimations";


const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const { setAllowPageAnimations } = usePageTransition();
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(true);
    setAllowPageAnimations(false);
    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      document.body.style.overflow = "";
      
      setTimeout(() => {
        setAllowPageAnimations(true);
      }, 100);
    }, 800);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, [pathname, setAllowPageAnimations]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition-screen"
            className="fixed inset-0 bg-[var(--bgcolor)] z-50"
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: isTransitioning ? 0 : 1 }}
        transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
        className={`w-full ${isTransitioning ? "absolute inset-0" : "relative"}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransition;
