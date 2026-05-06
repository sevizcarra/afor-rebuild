import type { Metadata } from "next";
import { Sora, JetBrains_Mono, Audiowide } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-audiowide",
});

export const metadata: Metadata = {
  title: "AFOR — Facilities para minería e industria",
  description:
    "Firma chilena especializada en el desarrollo de facilities para operaciones mineras e industriales. Más de diez años de experiencia técnica para BHP, Codelco e ingenierías Tier 1.",
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
    description: "Firma chilena especializada en facilities mineras e industriales.",
    url: "https://afor.cl",
    siteName: "AFOR",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sora.variable} ${jetbrains.variable} ${audiowide.variable}`}>
      <body>{children}</body>
    </html>
  );
}
