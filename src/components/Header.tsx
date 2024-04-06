import { FC } from "react";
import { Navbar } from "./Navbar";

export const Header: FC = () => (
  <header className="z-40 w-full sticky top-0 flex items-center justify-center bg-white">
    <Navbar />
  </header>
);
