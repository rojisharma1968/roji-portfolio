"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  User,
  MessageCircle,
  FileText,
  Code,
  Bug,
  CheckCircle,
  HandHelping,
} from "lucide-react";

const timelineData = [
  {
    step: "Contact",
    desc: "Client can contact via website form, email, or phone number.",
    icon: User,
  },
  {
    step: "Discussion",
    desc: "Understand project requirements and expectations.",
    icon: MessageCircle,
  },
  {
    step: "Proposal",
    desc: "Send a detailed plan with timeline & pricing.",
    icon: FileText,
  },
  {
    step: "Design & Development",
    desc: "Start creating UI & coding the project.",
    icon: Code,
  },
  {
    step: "Testing & Revisions",
    desc: "Fix issues and refine the product.",
    icon: Bug,
  },
  {
    step: "Delivery",
    desc: "Hand over final project & complete payment.",
    icon: CheckCircle,
  },
  {
    step: "Support",
    desc: "Provide ongoing support & maintenance if needed.",
    icon: HandHelping,
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="relative py-16 md:py-20 px-5 md:px-10 bg-[var(--bgcolor)] overflow-hidden text-gray-900"
    >
      <h2 className="font-[Boldonse] text-center text-white text-2xl mb-12 md:text-4xl leading-[2]">
        My Work Process
      </h2>

      <div className="relative flex flex-col items-center w-full max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 w-1.5 bg-white transform -translate-x-1/2 h-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-purple)] rounded-full shadow-md" />
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-[var(--color-purple)]"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-purple)] rounded-full shadow-md" />
        </div>

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          const progressStart = index / timelineData.length;
          const progressEnd = (index + 0.5) / timelineData.length; // Faster reveal

          const initialX = isLeft ? -50 : 50; // Smoother entry
          const translateX = useTransform(
            scrollYProgress,
            [progressStart, progressEnd],
            [initialX, 0]
          );
          const opacity = useTransform(
            scrollYProgress,
            [progressStart, progressEnd],
            [0, 1] // Appear faster
          );
          const scale = useTransform(
            scrollYProgress,
            [progressStart, progressEnd],
            [0.9, 1] // Slight scaling effect
          );

          return (
            <motion.div
              key={index}
              style={{ opacity, translateX, scale }}
              className={`relative ${
                index === 0 ? "my-10" : "mb-10"
              } w-full max-w-lg bg-white shadow-lg p-6 rounded-xl border border-[var(--color-purple)] border-dashed transition-all duration-500 hover:shadow-xl ${
                isLeft ? "ml-auto" : "mr-auto"
              }`}
            >
              <div className="flex justify-between items-center gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.step}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-[1.2] md:text-base">
                    {item.desc}
                  </p>
                </div>
                <span className="w-14 h-14 shrink-0 flex items-center justify-center bg-[var(--color-purple)] text-white rounded-full shadow-md">
                  {<item.icon size={28} />}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
