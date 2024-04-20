/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";
import { copy } from "@/copy";
import Link from "next/link";

const { nav } = copy.common;

export const Navbar: FC = () => (
  <nav className="w-full hidden sm:flex justify-between items-center h-16 px-4">
    <ol className="flex justify-center items-center">
      <li className="text-xl font-bold">
        <Link href="/">
          <img
            className="rounded-2xl w-[70%]"
            src="/assets/the-place-logo.png"
            alt="the place logo"
          />
        </Link>
      </li>
      <li className="mr-4">
        <Link href="/about" className="text-gray-700">
          {nav.about}
        </Link>
      </li>
      <li className="mx-4">
        <Link href="/explore" className="text-gray-700">
          {nav.explore}
        </Link>
      </li>
    </ol>
    <button
      onClick={() => console.log("Sign In clicked")}
      className="bg-primary-500 px-4 py-2 rounded cursor-pointer"
    >
      {nav.signIn}
    </button>
  </nav>
);
