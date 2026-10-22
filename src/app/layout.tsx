import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Khiratkar | Full-Stack Software Engineer",
  description:
    "Developer portfolio for Aditya Khiratkar, Computer Science undergraduate at Symbiosis Institute of Technology (SIT). Engineering CVRPTW fleet optimization, blockchain procurement, and modern full-stack systems.",
  keywords: [
    "Aditya Khiratkar",
    "Symbiosis Institute of Technology",
    "SIT",
    "Full Stack Developer",
    "Software Engineer",
    "RouteOpt",
    "TenderBlock",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Aditya Khiratkar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF2E6] text-[#0F172A] antialiased selection:bg-[#FF7B82] selection:text-white">
        {children}
      </body>
    </html>
  );
}
