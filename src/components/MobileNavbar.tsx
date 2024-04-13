'use client';
import React, { useState, Fragment } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FC } from 'react';

export const MobileNavbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-primary-500 p-4 flex sm:hidden justify-between items-center">
      <ol className="flex items-center justify-items-center">
        <li className="text-2xl font-bold mr-6">Logo Placeholder</li>

        {isMenuOpen && (
          <Fragment>
            <li className="mr-4">
              <a
                href="/"
                className="block mt-4 lg:inline-block lg:mt-0 text-primary-400"
              >
                Explore by City
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="block mt-2 lg:inline-block lg:mt-0 text-primary-400 mr-4"
              >
                About
              </a>
            </li>

            <button
              onClick={() => console.log('Sign In clicked')}
              className="block mt-4 lg:inline-block lg:mt-0 text-primary-400 mr-4"
            >
              Sign In
            </button>
            <button
              onClick={() => console.log('Sign In clicked')}
              className="text-primary-400 mr-4 mt-4"
            >
              Download the App
            </button>
          </Fragment>
        )}
      </ol>
      <button onClick={toggleMenu} className="lg:hidden">
        {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
      </button>
      {/* <button onClick={toggleMenu} className="lg:hidden">
        <HiX size={24} />
      </button> */}
    </nav>
  );
};
