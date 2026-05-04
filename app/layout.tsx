import type { Metadata } from "next";
import { Audiowide, Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-audiowide",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "AFOR — Making ideas grow",
  description:
    "Firma chilena de arquitectura, ingeniería y project management para gran minería e industria. Diez años de experiencia. Sin overhead, sin diluir.",
  keywords: [
    "arquitectura industrial",
    "ingeniería de minería",
    "project management Chile",
    "BHP",
    "Codelco",
    "AFOR",
  ],
  authors: [{ name: "AFOR" }],
  openGraph: {
    title: "AFOR — Making ideas grow",
    description: "Firma dedicada al proyecto del cliente. Diez años en gran minería e industria.",
    url: "https://afor.cl",
    siteName: "AFOR",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${audiowide.variable} ${inter.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
