import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Orbitron, Poppins, Open_Sans } from "next/font/google";
// @ts-ignore: allow importing global CSS for Next.js layout
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});
 
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Payland - Modern Payment Gateway",
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
        className={`${poppins.className} ${orbitron.variable} ${poppins.variable} ${openSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
