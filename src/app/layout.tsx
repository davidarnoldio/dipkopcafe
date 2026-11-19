import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DIPKOP Coffee & Matcha — Indonesian Specialty Coffee & Ceremonial Matcha",
  description:
    "A dark botanical sanctuary for Indonesian single-origin coffee, ceremonial Uji matcha, and unhurried daily moments at DIPKOP Coffee & Matcha.",
  keywords: [
    "DIPKOP",
    "DIPKOP Coffee & Matcha",
    "Indonesian specialty coffee",
    "ceremonial matcha",
    "dirty matcha",
    "botanical coffee shop",
  ],
  openGraph: {
    title: "DIPKOP Coffee & Matcha",
    description:
      "Coffee, Matcha & Moments. An editorial Indonesian coffee & matcha house.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#172820] text-[#F5F1E8] font-sans">
        {children}
      </body>
    </html>
  );
}
