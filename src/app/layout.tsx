import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "BIT Automation | Simplifying Complexity, Delivering Innovation",
  description: "We provide intelligent automation, industrial IoT, smart manufacturing, energy monitoring, and digital transformation solutions for modern industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased bg-[#0B1220] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
