"use client";
import { createContext, useContext, useState } from "react";

const PageTransitionContext = createContext();

export const PageTransitionProvider = ({ children }) => {
  const [allowPageAnimations, setAllowPageAnimations] = useState(false);

  return (
    <PageTransitionContext.Provider value={{ allowPageAnimations, setAllowPageAnimations }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => useContext(PageTransitionContext);
