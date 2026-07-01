"use client";
import { useTranslations } from "next-intl";

const SITE_EMAIL = "contacto@afor.cl";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  return (
    <footer className="bg-anthracite text-paper py-10 border-t border-paper/10">
      <div className="px-6 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-brand text-paper text-sm tracking-[0.05em]">
            aFor<span className="text-accent">.</span>
          </span>
          <span className="mono-cap text-paper/50">{tSite("address")}</span>
        </div>
        <div className="flex items-center gap-5 mono-cap text-paper/50 flex-wrap">
          <a
            href="https://intranet.afor.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors inline-flex items-center gap-1.5"
          >
            {t("links.team")} <span>↗</span>
          </a>
          <a href={`mailto:${SITE_EMAIL}`} className="hover:text-accent transition-colors">{SITE_EMAIL}</a>
          <span>© {new Date().getFullYear()} · {t("rights")}</span>
        </div>
      </div>
    </footer>
  );
}
