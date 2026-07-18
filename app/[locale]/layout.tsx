import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { DM_Sans, Inter_Tight, JetBrains_Mono, Audiowide, Instrument_Serif } from "next/font/google";
import { routing } from "@/i18n/routing";
import "../globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
  weight: ["500", "600", "700"],
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

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument-serif",
  style: ["normal", "italic"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  return {
    metadataBase: new URL("https://afor.cl"),
    title: t("metaTitle"),
    description: t("metaDescription"),
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
      "remodelación interior minería",
      "mantención de facilities",
      "AFOR",
    ],
    authors: [{ name: "AFOR" }],
    creator: "AFOR",
    publisher: "AFOR",
    robots: { index: true, follow: true },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: "https://afor.cl",
      siteName: "AFOR",
      locale: locale === "es" ? "es_CL" : locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://afor.cl/${locale === "es" ? "" : locale}`,
      languages: {
        "es-CL": "https://afor.cl",
        "en-US": "https://afor.cl/en",
        "pt-BR": "https://afor.cl/pt",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${dmSans.variable} ${interTight.variable} ${jetbrains.variable} ${audiowide.variable} ${instrumentSerif.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
