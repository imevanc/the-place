"use client";
import { FC, Fragment } from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface FooterProps {
  companyName: string;
}

export const Footer: React.FC<FooterProps> = ({ companyName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white relative bottom-0 flex flex-col items-center justify-center md:flex-row md:items-end py-4 px-6 md:justify-between">
      <div className="md:w-1/3 md:mb-0 mb-2 md:text-right">
        <div className="mr-3 inline-block">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-secondary-800 hover:text-primary-600" />
          </Link>
        </div>
        <div className="mr-3 inline-block">
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-secondary-800 hover:text-primary-600" />
          </Link>
        </div>
        <div className="inline-block">
          <Link href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="text-2xl text-secondary-800 hover:text-primary-600" />
          </Link>
        </div>
      </div>
      <div className="md:w-1/3 text-center md:text-right">
        <img
          src="assets/the-place-logo.png"
          alt="Company Logo"
          className="w-24 h-auto mx-auto border rounded-full border-primary-700 md:ml-2 hidden md:block"
        />
        <p className="text-primary-400">
          &copy; {currentYear} {companyName}The Place. All rights reserved.
        </p>
      </div>
      <div className="md:w-1/3"></div>
    </footer>
  );
};

