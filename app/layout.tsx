import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Burger from "@/components/Burger/Burger";

const interSans = Inter({
  variable: "--font-Inter-sans-serif",
});

export const metadata: Metadata = {
  title: "NEBO | Whether App",
  description: "Created on next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interSans.variable} h-full antialiased`}>
      <body>
        <TanStackProvider>
          <main>{children}</main>
          <Burger />
        </TanStackProvider>
      </body>
    </html>
  );
}
