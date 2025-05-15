import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebTech Finals",
  description: "A Next.js application for WebTech Finals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex gap-6">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/USERS" className="hover:text-gray-300">Users</Link>
              <Link href="/POSTS" className="hover:text-gray-300">Posts</Link>
              <Link href="/DASHBOARD" className="hover:text-gray-300">Dashboard</Link>
            </div>
          </nav>
          <main className="container mx-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
