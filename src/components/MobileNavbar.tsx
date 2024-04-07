'use client';
import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FC } from 'react';

export const MobileNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <ol className="flex items-center">
        <li className="text-2xl font-bold mr-4">Logo Placeholder</li>
        <button onClick={toggleMenu} className="lg:hidden">
          {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        <div
          className={`lg:flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'}`}
        ></div>
        <li className="mr-4">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white">
            Explore by City
          </a>
        </li>

        <li>
          <a
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
          >
            About
          </a>
        </li>
      </ol>
      <button
        onClick={() => console.log('Sign In clicked')}
        className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
      >
        Sign In
      </button>
      <div className="block mt-4 lg:inline-block lg:mt-0">
        <button
          onClick={() => console.log('Sign In clicked')}
          className="text-white mr-4"
        >
          Download the App
        </button>
        <button onClick={toggleMenu} className="lg:hidden">
          <HiX size={24} />
        </button>
      </div>
    </nav>
  );
};
