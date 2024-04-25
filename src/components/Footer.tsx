/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, ReactElement } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { copy } from "@/copy";

const { footer } = copy.common;

const getIcon = (name: string): ReactElement => {
  switch (name) {
    case "Facebook":
    default:
      return <FaFacebook />;
    case "Instagram":
      return <FaInstagram />;
    case "X":
      return <FaXTwitter />;
  }
};

const footerLinks = footer.socials.map(({ href, name }) => ({
  href,
  name,
  icon: getIcon(name),
}));

export const Footer: FC<{
  companyName: string;
}> = ({ companyName }) => {
  return (
    <footer className="w-full bg-primary-300 flex flex-col md:flex-row justify-between items-center py-4 px-4">
      <span className="text-secondary-900">
        &copy; {new Date().getFullYear()} {companyName} {footer.msg}
      </span>
      <div className="lg:w-[10%] flex justify-between items-center mb-4 md:mb-0 order-first md:order-last">
        {footerLinks.map(({ href, name, icon }, idx) => (
          <div key={href + idx}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-3 text-2xl text-secondary-800 hover:text-secondary-900"
            >
              {icon}
              <span className="sr-only">{name}</span>
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
};
