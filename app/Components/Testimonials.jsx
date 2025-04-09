"use client"; // Force client-side execution

import React, { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Using ChatRobin, our friendly sales assistant has truly given me a spectacular experience. It hit the mark right step by step. I'll be back again for my second walk through.",
    author: "Arjun Mehta",
    rating: 5,
    backgroundColor: "bg-black",
    rotation: "-rotate-6",
  },
  {
    id: 2,
    text: "Super personalized, organized and easy to work with. These guys made a valuable go-to for major project. I would recommend anytime.",
    author: "Maya Kapoor",
    rating: 5,
    backgroundColor: "bg-indigo-100",
    rotation: "rotate-3",
  },
  {
    id: 3,
    text: "I recently used these guys for our company conference. They were exceptional!",
    author: "Kabir Sharma",
    rating: 5,
    backgroundColor: "bg-blue-100",
    rotation: "rotate-6",
  },
  {
    id: 4,
    text: "Really useful system. We got an amazing service for our company hotel bookings for our up and coming events.",
    author: "Sanya Verma",
    rating: 5,
    backgroundColor: "bg-yellow-100",
    rotation: "-rotate-3",
  },
  {
    id: 5,
    text: "Sorted accommodations in Southern Arizona. They were very timely and the most professional. Excellent rates and more. Recommend their service everywhere.",
    author: "Rohan Malhotra",
    rating: 5,
    backgroundColor: "bg-lime-100",
    rotation: "rotate-1",
  },
  {
    id: 6,
    text: "Their team was incredibly professional and ensured our travel plans were seamless. Highly recommend their expertise!",
    author: "Ananya Bose",
    rating: 5,
    backgroundColor: "bg-pink-100",
    rotation: "-rotate-2",
  },
  {
    id: 7,
    text: "The level of attention to detail was phenomenal. They made sure we had everything we needed without any hassle.",
    author: "Rhea Tandon",
    rating: 5,
    backgroundColor: "bg-purple-100",
    rotation: "-rotate-5",
  },
  {
    id: 8,
    text: "We had an amazing experience! Their dedication to customer satisfaction is unmatched. Highly recommended!",
    author: "Aditya Chauhan",
    rating: 5,
    backgroundColor: "bg-emerald-100",
    rotation: "rotate-2",
  },
];

const Testimonials = () => {
  const [positions, setPositions] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);
  const containerRef = useRef(null); // Ref for constraints

  // Track screen width
  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    setPositions(
      testimonials.map((_, index) => {
        const isMobile = screenWidth < 768;
        return {
          x: Math.round(
            Math.cos((index * Math.PI * 2) / testimonials.length) *
              (isMobile ? 80 : 120)
          ),
          y: Math.round(
            Math.sin((index * Math.PI * 2) / testimonials.length) *
              (isMobile ? 50 : 70)
          ),
        };
      })
    );
  }, [screenWidth]);

  if (positions.length === 0) return null;

  return (
    <section
      ref={containerRef}
      className="relative py-10 md:py-15 px-5 md:px-10 bg-[var(--coloroff-white)] overflow-hidden"
    >
      <div className="text-center">
        <h2 className="font-[Boldonse] text-center text-black text-2xl md:text-4xl leading-[2]">
          What Our Clients Say
        </h2>
      </div>

      <div className="relative w-full max-w-4xl mx-auto h-[500px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`card absolute cursor-grab w-50 sm:w-80 p-6 rounded-xl shadow-lg ${testimonial.backgroundColor} text-left transform ${testimonial.rotation}`}
              style={{
                top: `calc(50% + ${positions[index].y}px - ${
                  screenWidth >= 660 ? 115 : 120
                }px)`,
                left: `calc(50% + ${positions[index].x}px - ${
                  screenWidth >= 660 ? 150 : 100
                }px)`,
                zIndex: testimonial.id,
              }}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              whileDrag={{ scale: 1.1, zIndex: 50 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileHover={{ scale: 1.05, zIndex: 20 }}
            >
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    className="text-yellow-500"
                  />
                ))}
              </div>
              <p
                className={`mb-4 text-sm md:text-base pointer-events-none ${
                  testimonial.backgroundColor === "bg-black"
                    ? "text-white"
                    : "text-black"
                }`}
              >
                {testimonial.text}
              </p>
              <p
                className={`font-medium pointer-events-none ${
                  testimonial.backgroundColor === "bg-black"
                    ? "text-white"
                    : "text-black"
                }`}
              >
                {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
