"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { usePathname } from "next/navigation";

const LocomotiveScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);
  const pathname = usePathname(); 

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("locomotive-scroll").then((module) => {
      locoScroll.current = new module.default({
        el: scrollRef.current,
        smooth: true,
      });
    });

    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
    };
  }, []);


  useEffect(() => {
    if (locoScroll.current) {
      setTimeout(() => {
        locoScroll.current.scrollTo(0, { duration: 0 }); 
      }, 100); 
    }
  }, [pathname]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default LocomotiveScrollProvider;
