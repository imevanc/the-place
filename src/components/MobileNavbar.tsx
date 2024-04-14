'use client';
import React, { useState, Fragment } from 'react';
import { HiX } from 'react-icons/hi';
import { FC } from 'react';
import { HiBars4 } from 'react-icons/hi2';

export const MobileNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-primary-500 p-4 flex sm:hidden flex-col justify-between items-center">
      <ol className="flex flex-col items-center justify-items-center">
        <li className="text-2xl font-bold">Logo Placeholder</li>

        {isMenuOpen && (
          <Fragment>
            <li className="mb-2">
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary-400"
              >
                Explore by City
              </a>
            </li>

            <li className="mb-2">
              <a
                href="/about"
                className="block mt-2 lg:inline-block lg:mt-0 text-primary-400"
              >
                About
              </a>
            </li>

            <button
              onClick={() => console.log('Sign In clicked')}
              className="block mt-2 lg:inline-block lg:mt-0 text-primary-400"
            >
              Sign In
            </button>
            <button
              onClick={() => console.log('Sign In clicked')}
              className="text-primary-400 mt-4"
            >
              Download the App
            </button>
          </Fragment>
        )}
      </ol>
      <button onClick={toggleMenu} className="lg:hidden mt-2">
        {isMenuOpen ? <HiX size={28} /> : <HiBars4 size={28} />}
      </button>
    </nav>
  );
};
