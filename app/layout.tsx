import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Orbit } from "next/font/google";
// @ts-ignore: allow importing global CSS for Next.js layout
import "./globals.css";
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _orbit = Orbit({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-orbit",
});
export const metadata: Metadata = {
  title: "PayFlow - Modern Payment Gateway",
  description: "Secure, fast, and elegant payment processing",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${_geist.className} ${_orbit.variable}   font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
