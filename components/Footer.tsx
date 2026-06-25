"use client";
import { useTranslations } from "next-intl";

const SITE_EMAIL = "contacto@afor.cl";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  return (
    <footer className="bg-paper py-10 border-t border-gray-200">
      <div className="container-edge flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-small">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="block w-2 h-2 bg-bhp" aria-hidden="true" />
          <span className="font-brand text-base tracking-[0.05em] text-ink">
            aFor<span className="text-accent">.</span>
          </span>
          <span className="text-gray-500">{tSite("address")}</span>
        </div>
        <div className="flex items-center gap-6 text-gray-500 flex-wrap">
          <a
            href="https://intranet.afor.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            {t("links.team")}
            <span className="text-accent">↗</span>
          </a>
          <a href={`mailto:${SITE_EMAIL}`} className="hover:text-accent transition-colors">{SITE_EMAIL}</a>
          <span>© {new Date().getFullYear()} AFOR · {t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}
