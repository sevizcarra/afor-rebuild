import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      "infraestructura no procesante",
      "non-process infrastructure",
      "casas de cambio",
      "salas de control",
      "comedores industriales",
      "talleres mineros",
      "bodegas mineras",
      "BHP",
      "ARCADIS",
      "AFOR",
    ],
    authors: [{ name: "AFOR" }],
    robots: { index: true, follow: true },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: "https://afor.cl",
      siteName: "AFOR",
      locale: locale === "es" ? "es_CL" : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://afor.cl/${locale === "es" ? "" : locale}`,
      languages: {
        "es-CL": "https://afor.cl",
        "en-US": "https://afor.cl/en",
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
    <html lang={locale} className={inter.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
