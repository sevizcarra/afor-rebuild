"use client";
import { useTranslations } from "next-intl";

const SITE_EMAIL = "contacto@afor.cl";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  return (
    <footer className="bg-paper py-10 border-t border-gray-200">
      <div className="container-edge flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-small">
        <div className="flex items-center gap-3">
          <span className="block w-2 h-2 bg-bhp" aria-hidden="true" />
          <span className="font-brand text-base tracking-[0.05em] text-ink">{tSite("brand")}<span className="text-accent">.</span></span>
          <span className="text-gray-500">{tSite("address")}</span>
        </div>
        <div className="flex items-center gap-6 text-gray-500">
          <a href={`mailto:${SITE_EMAIL}`} className="hover:text-accent transition-colors">{SITE_EMAIL}</a>
          <span>© {new Date().getFullYear()} AFOR · {t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}
