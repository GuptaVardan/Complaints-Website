"use client"
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Complaints Website",
//   description: "A website for complaints",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AuthProvider>

        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
