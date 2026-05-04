import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono, Audiowide } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const interTight = Inter_Tight({ subsets: ["latin"], display: "swap", variable: "--font-inter-tight" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-jetbrains-mono" });
const audiowide = Audiowide({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-audiowide" });

export const metadata: Metadata = {
  title: "AFOR — Making ideas grow",
  description:
    "Diseñamos facilities para minería e industria: oficinas, casas de cambio, salas de control, RESPEL y truck shops. Diez años de criterio aplicado para BHP, Codelco e ingenierías Tier 1.",
  keywords: [
    "facilities minería",
    "facilities industriales",
    "salas de control",
    "casas de cambio",
    "truck shop",
    "RESPEL",
    "BHP",
    "Codelco",
    "AFOR",
  ],
  authors: [{ name: "AFOR" }],
  openGraph: {
    title: "AFOR — Facilities para minería e industria",
    description: "Firma chilena especializada en facilities mineras e industriales. Diez años de criterio. Sin overhead, sin diluir.",
    url: "https://afor.cl",
    siteName: "AFOR",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${interTight.variable} ${jetbrains.variable} ${audiowide.variable}`}>
      <body>{children}</body>
    </html>
  );
}
