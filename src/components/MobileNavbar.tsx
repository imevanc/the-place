"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FC } from "react";

export const MobileNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-2xl font-bold mr-4">Logo Placeholder</div>
        <button onClick={toggleMenu} className="lg:hidden">
          {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>
      <div className={`lg:flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
        {/* <Link href="/">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            Explore by City
          </a>
        </Link>
        <Link href="/about">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            About
          </a>
        </Link>
        <Link href="/signin">
          <a className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
            Sign In
          </a>
        </Link> */}
        <div className="block mt-4 lg:inline-block lg:mt-0">
          <a href="#" className="text-white mr-4">
            Download the App
          </a>
          <button onClick={toggleMenu} className="lg:hidden">
            <HiX size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};