import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Audiowide } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
  metadataBase: new URL("https://afor.cl"),
  title: {
    default: "AFOR — Facilities para minería e industria | Arquitectura e Ingeniería",
    template: "%s | AFOR",
  },
  description:
    "Firma chilena de arquitectura, ingeniería y project management especializada en el desarrollo de facilities para gran minería e industria: oficinas, casas de cambio, salas de control, salas eléctricas y técnicas, RESPEL, almacenamiento y truck shops. Más de 10 años de experiencia técnica con BHP, Codelco, Antofagasta Minerals, ARCADIS y otras ingenierías Tier 1.",
  keywords: [
    "facilities mineras",
    "facilities industriales",
    "arquitectura minería Chile",
    "ingeniería facilities",
    "casas de cambio minería",
    "salas de control",
    "truck shop minería",
    "RESPEL",
    "almacenamiento industrial",
    "project management minería",
    "coordinación BIM",
    "Revit minería",
    "BHP",
    "Codelco",
    "Antofagasta Minerals",
    "ARCADIS",
    "Worley",
    "JRI",
    "ingeniería de detalle",
    "AFOR",
    "consultoría arquitectónica industrial",
  ],
  authors: [{ name: "AFOR" }],
  creator: "AFOR",
  publisher: "AFOR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AFOR — Facilities para minería e industria",
    description:
      "Firma chilena de arquitectura, ingeniería y project management para facilities mineras e industriales. Más de 10 años con BHP, Codelco e ingenierías Tier 1.",
    url: "https://afor.cl",
    siteName: "AFOR",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AFOR — Facilities para minería e industria",
    description: "Firma chilena especializada en facilities mineras e industriales.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${jetbrains.variable} ${audiowide.variable}`}>
      <body>{children}</body>
    </html>
  );
}
