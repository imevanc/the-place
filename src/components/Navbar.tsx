/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";
import Link from "next/link";
import { copy } from "@/copy";
import { useTabs } from "@/hooks";

const { nav } = copy.common;

export const Navbar: FC = () => {
  const tabs = useTabs();
  const classname: string =
    "inline-flex items-center border-b-2 text-gray-900 text-lg font-medium p-2";
  ("border-primary-500");
  const selected: string = `${classname} border-primary-500`;
  const nonSelected: string = `${classname} border-transparent hover:border-secondary-700 hover:text-secondary-800`;

  const logoClassname: string = tabs.home
    ? "rounded-2xl w-[70%] scale-110 ring-2 ring-primary-500"
    : "rounded-2xl w-[70%] scale-110 hover:ring-2 hover:ring-gray-900";

  return (
    <nav className="w-full hidden sm:flex justify-between items-center h-16 px-4 mt-2">
      <ol className="flex justify-center items-center">
        <li>
          <Link href="/">
            <img
              className={logoClassname}
              src="/assets/the-place-logo.png"
              alt={nav.logo.alt}
            />
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/about" className={tabs.about ? selected : nonSelected}>
            {nav.about}
          </Link>
        </li>
        <li className="mx-4">
          <Link
            href="/explore"
            className={tabs.explore ? selected : nonSelected}
          >
            {nav.explore}
          </Link>
        </li>
      </ol>
      <button
        onClick={() => console.log("Sign In clicked")}
        className="bg-primary-500 px-5 py-3 rounded-full text-lg font-normal text-gray-800 hover:text-gray-900 hover:ring-2 hover:ring-primary-500"
      >
        {nav.signIn}
      </button>
    </nav>
  );
};
