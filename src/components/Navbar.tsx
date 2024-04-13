"use client";
import { FC } from "react";

export const Navbar: FC = () => (
  <nav className="w-full hidden sm:flex justify-between items-center bg-white h-16 px-4 shadow-md">
    <ol className="flex items-center">
      <li className="text-xl font-bold mr-4">Logo Placeholder</li>
      <li className="mr-4">
        <a href="#" className="text-gray-700">
          About
        </a>
      </li>
      <li>
        <a href="#" className="text-gray-700">
          Explore by City
        </a>
      </li>
    </ol>
    <button
      onClick={() => console.log("Sign In clicked")}
      className="bg-primary-500 px-4 py-2 rounded cursor-pointer"
    >
      Sign In
    </button>
  </nav>
);
