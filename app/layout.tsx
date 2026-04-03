import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { HomeNav } from "@/components/sections/home-nav";
import { Footer } from "@/components/sections/footer";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const fontSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abla Creative Design & Digital Studio",
  description:
    "Abla is a full-service creative studio delivering brand strategy, product design, and digital experiences that drive results. Let’s build something remarkable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontSerif.variable} antialiased`}
      >
        <HomeNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
