/* eslint-disable @next/next/no-img-element */
'use client';
import { FC, ReactElement } from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { copy } from '@/copy';

const footerLinks: Array<{ href: string; icon: ReactElement }> = [
  { href: 'https://www.facebook.com', icon: <FaFacebook /> },
  { href: 'https://www.instagram.com', icon: <FaInstagram /> },
  { href: 'https://www.x.com', icon: <FaXTwitter /> },
];

const { footer } = copy.common;

export const Footer: FC<{
  companyName: string;
}> = ({ companyName }) => {
  return (
    <footer className="w-full bg-primary-300 relative bottom-0 py-4 px-4">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <span className="text-secondary-900">
          &copy; {new Date().getFullYear()} {companyName} {footer.msg}
        </span>
        <div className="md:w-[10%] flex justify-between items-center mb-4 md:mb-0 order-first md:order-last">
          {footerLinks.map(({ icon, href }, idx) => (
            <Link
              key={href + idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-3 text-2xl text-secondary-800 hover:text-primary-900"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
