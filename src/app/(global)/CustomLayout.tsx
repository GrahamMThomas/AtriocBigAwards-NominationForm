"use client";
import React from "react";
import { useScreen } from "./ScreenContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { screenWidth } = useScreen();

  if (screenWidth < 480) {
    return <div className="bg-cover bg-mobile h-screen">{children}</div>;
  } else {
    return <div className="bg-cover bg-desktop h-screen">{children}</div>;
  }
}
