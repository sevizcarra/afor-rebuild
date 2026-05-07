"use client";
import { useTranslations } from "next-intl";

const SITE_EMAIL = "contacto@afor.cl";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  return (
    <footer className="bg-paper py-20 border-t border-gray-200">
      <div className="container-edge max-w-3xl mx-auto text-center">
        <div className="font-brand text-2xl text-ink tracking-[0.05em]">{tSite("brand")}</div>
        <p className="mt-4 text-small text-ink leading-relaxed">{tSite("slogan")}</p>

        <div className="my-10 flex items-center justify-center gap-3">
          <span className="block h-1 w-1 rounded-full bg-gray-300" />
          <span className="block h-1 w-1 rounded-full bg-gray-300" />
          <span className="block h-1 w-1 rounded-full bg-gray-300" />
        </div>

        <ul className="space-y-3 text-small">
          <li><a href="/AFOR_Dossier_2025.pdf" className="text-ink hover:opacity-60 transition-opacity">{t("links.dossier")}</a></li>
          <li><a href={`mailto:${SITE_EMAIL}`} className="text-ink hover:opacity-60 transition-opacity">{SITE_EMAIL}</a></li>
        </ul>

        <div className="mt-14 pt-8 border-t border-gray-200 text-small text-gray-500 space-y-2">
          <div>© {new Date().getFullYear()} AFOR. {t("rights")}</div>
          <div>{tSite("address")}</div>
        </div>
      </div>
    </footer>
  );
}
