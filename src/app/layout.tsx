import type { Metadata } from "next";
import { Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CursorFollower from "@/components/CursorFollower";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kamala Farms | Sustainable Agriculture & Hydroponics",
    template: "%s | Kamala Farms",
  },
  description:
    "Kamala Farms is a hydroponics company addressing food security, food transparency and accessibility to nutritious food. Turnkey farm setup, training, and management services.",
  keywords: [
    "hydroponics",
    "sustainable agriculture",
    "farm setup",
    "Kamala Farms",
    "Hyderabad",
    "smart farming",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${roboto.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <CursorFollower />
      </body>
    </html>
  );
}