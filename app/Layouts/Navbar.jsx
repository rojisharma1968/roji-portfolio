"use client";
import { House, CircleUserRound, BriefcaseBusiness, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Hamburger from "../Components/Hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { text: "Home", path: "/", icon: House },
    { text: "About Me", path: "/aboutme", icon: CircleUserRound },
    { text: "Works", path: "/works", icon: BriefcaseBusiness },
    { text: "Contact Me", path: "/contactme", icon: Phone },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // 🔄 Shake animation with pause
  const shakeAnimation = {
    animate: {
      x: [-3, 3, -3, 3, 0], // Left-right shake
      transition: {
        repeat: Infinity, // Infinite loop
        repeatType: "loop",
        duration: 0.4, // 0.4 sec shake duration
        ease: "easeInOut",
        repeatDelay: 0.3, // 2.1 sec pause between shakes
      },
    },
  };

  return (
    <motion.nav className="fixed size-fit md:w-[36rem] top-2 md:bottom-3 md:top-[unset] z-50 right-3 md:left-1/2 md:-translate-x-1/2">
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, borderRadius: "50%" }}
            animate={{ scale: 1, opacity: 1, borderRadius: "0.75rem" }}
            exit={{ scale: 0, opacity: 0, borderRadius: "50%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="menu border-2 w-fit px-3 absolute right-4 -bottom-62 md:hidden border-dashed border-[var(--color-purple)] drop-shadow-2xl flex flex-col justify-center py-3 rounded-xl gap-4 bg-[var(--coloroff-white)] z-40"
          >
            <motion.div
              className="flex flex-col gap-3"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {links.map((link) => (
                <motion.div
                  key={link.text}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.path}
                    className={`flex text-nowrap items-center rounded-lg gap-1 font-medium text-lg py-2 px-3 duration-150 ${
                      pathname === link.path
                        ? "text-white bg-[var(--color-purple)]"
                        : "text-black hover:text-white hover:bg-[var(--color-purple)]"
                    }`}
                  >
                    {link.text === "Contact Me" ? (
                      <motion.div {...shakeAnimation}>
                        <Phone className="shrink-0" />
                      </motion.div>
                    ) : (
                      <link.icon className="shrink-0" />
                    )}
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.3,
          delay: 1,
        }}
        className="hidden md:flex border-2 w-fit px-3 border-dashed border-[var(--color-purple)] drop-shadow-2xl flex-row justify-center py-2 rounded-xl gap-4 bg-[var(--coloroff-white)] z-40"
      >
        {links.map((link) => (
          <Link
            key={link.text}
            href={link.path}
            className={`flex text-nowrap items-center rounded-lg gap-1 font-medium text-lg py-1.5 px-3 duration-150 ${
              pathname === link.path
                ? "text-white bg-[var(--color-purple)]"
                : "text-black hover:text-white hover:bg-[var(--color-purple)]"
            }`}
          >
            {link.text === "Contact Me" ? (
              <motion.div {...shakeAnimation}>
                <Phone className="shrink-0" />
              </motion.div>
            ) : (
              <link.icon className="shrink-0" />
            )}
            {link.text}
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
