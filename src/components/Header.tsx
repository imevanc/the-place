"use client";
import { FC } from "react";
import { Navbar } from "./Navbar";
import { MobileNavbar } from "./MobileNavbar";
import { useScreenMatcher } from "@/hooks";

export const Header: FC = () => {
  const { screenMatches: isTabletOrAbove } =
    useScreenMatcher("(min-width: 768px)");
  return (
    <header className="z-40 w-full sticky top-0 flex items-center justify-center bg-white">
      {isTabletOrAbove ? <Navbar /> : <MobileNavbar />}
    </header>
  );
};
