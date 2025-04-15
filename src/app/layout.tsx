'use client' // 👈 ต้องอยู่บรรทัดแรกสุด


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import smoothscroll from 'smoothscroll-polyfill';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ❌ ต้องลบ metadata ออกไปไว้ที่ `app/metadata.ts` หรือ `generateMetadata()`
// เพราะ `use client` component ไม่สามารถใช้ `export const metadata` ได้
// แนะนำให้ย้าย metadata ไปไว้ในไฟล์แยก เช่น `app/page.tsx` แทน

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
