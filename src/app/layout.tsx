import type { Metadata } from "next";
import { ReactNode } from "react";
import { Footer, Header } from "@/components";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Place",
  description: "The Place To Be",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en">
    <body className="h-screen w-screen">
      <div className="h-full max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto h-full max-w-7xl flex flex-col items-center justify-start px-2 sm:px-6 lg:px-8">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </body>
  </html>
);

export default RootLayout;
