import React from 'react';
import { NextPage } from "next/types";
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const Navbar = dynamic(() => import('@/Components/Navbar'), { ssr: false });

interface HomepageProps {
  children: ReactNode;
}

const Homepage: NextPage<HomepageProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Homepage;
