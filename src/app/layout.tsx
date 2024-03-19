import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "The Place",
  description: "The Place To Be",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">{children}</body>
    </html>
  );
}
