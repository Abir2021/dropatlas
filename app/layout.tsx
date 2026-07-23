import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DropAtlas — Airdrop Guides That Actually Help",
  description:
    "Clear, regularly updated airdrop guides. No trackers, no noise — just practical strategies for LayerZero, Monad, Hyperliquid, Scroll, Berachain and more.",
  keywords: ["airdrop", "crypto airdrop", "guide", "layerzero", "monad", "hyperliquid"],
  openGraph: {
    title: "DropAtlas — Airdrop Guides",
    description: "Practical airdrop strategies updated regularly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-white">
        <Navbar />
        <main className="page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
