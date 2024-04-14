import React from "react";
import type { NextPage } from "next/types";
import { copy } from "@/copy";

const { heading, paragraph } = copy.home;

const Homepage: NextPage = () => {
  return (
    <main className="w-full m-6 max-w-5xl px-6 sm:px-4">
      <div className="flex flex-col md:flex-row items-center md:justify-between md:gap-x-8">
        <div className="max-w-3xl w-full md:pt-4">
          <div className="mx-auto max-w-prose">
            <h1 className="mt-2 block text-left text-3xl font-bold leading-8 tracking-tight text-primary-600 sm:text-4xl lg:text-5xl">
              {heading.top}
              <br />
              <span className="text-secondary-600">{heading.bottom}</span>
            </h1>
            <p className="mt-8 text-lg text-left leading-8 text-secondary-500 sm:text-xl lg:text-2xl">
              {paragraph}
            </p>
          </div>
        </div>
        <div className="pt-4">
          <img
            className="rounded-xl h-auto w-full md:w-[40rem] lg:w-[48rem] md:h-64 lg:h-72 md:rounded-3xl md:shadow-2xl"
            src="/assets/girl-on-phone.jpg"
            alt="girl on phone"
          />
        </div>
      </div>
    </main>
  );
};

export default Homepage;
