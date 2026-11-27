import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mtaani Love Connect | Location-Based Dating for Kenya",
  description: "Connect with people nearby in Kenya. Match by county, interests, and more. Nairobi, Mombasa, Kisumu, and beyond.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-rose-50 to-orange-50`}>{children}</body>
    </html>
  );
}
