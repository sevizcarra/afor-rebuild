"use client";
import { useTranslations } from "next-intl";

const SITE_EMAIL = "contacto@afor.cl";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  return (
    <footer className="bg-ink py-20">
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <div className="font-brand text-2xl text-paper tracking-[0.05em]">{tSite("brand")}</div>
            <p className="mt-4 text-small text-paper/55 leading-relaxed">{tSite("slogan")}</p>
          </div>
          <ul className="md:text-right space-y-3 text-small">
            <li><a href="/AFOR_Dossier_2025.pdf" className="text-paper/70 hover:text-accent transition-colors">{t("links.dossier")}</a></li>
            <li><a href="https://intranet.afor.cl" className="text-paper/70 hover:text-accent transition-colors">{t("links.team")}</a></li>
            <li><a href={`mailto:${SITE_EMAIL}`} className="text-paper/70 hover:text-accent transition-colors">{SITE_EMAIL}</a></li>
          </ul>
        </div>
        <div className="border-t border-paper/15 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-small text-paper/45">
          <span>© {new Date().getFullYear()} AFOR. {t("rights")}</span>
          <span>{tSite("address")}</span>
        </div>
      </div>
    </footer>
  );
}
