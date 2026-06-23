"use client";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  return (
    <footer className="relative bg-ink text-paper py-10 border-t border-paper/30">
      <div className="grid grid-cols-12 gap-6 px-6 md:px-10 items-center">
        <div className="col-span-12 md:col-span-4 flex items-center gap-3">
          <span className="block w-2 h-2 bg-accent" aria-hidden="true" />
          <span className="font-sans font-black text-paper uppercase tracking-tight">{tSite("brand")}</span>
          <span className="label text-paper/50 ml-2 hidden md:inline">{t("expansion")}</span>
        </div>
        <div className="col-span-12 md:col-span-8 md:text-right label text-paper/50">
          © {new Date().getFullYear()} AFOR · {t("rights")}
        </div>
      </div>
    </footer>
  );
}
