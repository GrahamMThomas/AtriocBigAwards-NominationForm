"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ScreenContextProps {
  screenWidth: number;
}

const ScreenContext = createContext<ScreenContextProps | undefined>(undefined);

export function ScreenProvider({ children }: { children: React.ReactNode }) {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Initial setup

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ screenWidth }}>
      {children}
    </ScreenContext.Provider>
  );
}

export function useScreen() {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }
  return context;
}
