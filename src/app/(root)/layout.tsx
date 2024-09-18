import type { Metadata } from "next";
import "../globals.css";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/organisms/Navbar";

export const metadata: Metadata = {
  title: "Unfollow Finder",
  description: "Find who does not follow you back.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased light ${GeistMono.className}`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
