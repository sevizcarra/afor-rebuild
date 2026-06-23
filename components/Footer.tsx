"use client";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  return (
    <footer className="relative bg-copper text-paper py-8 px-8 md:px-12 border-t border-paper/40">
      <div className="grid grid-cols-12 gap-6 items-center label text-paper/70 tabular">
        <div className="col-span-12 md:col-span-4">
          <span className="text-paper font-semibold">{tSite("brand")}</span>
          <span className="ml-3 text-paper/60 normal-case tracking-normal">{t("expansion")}</span>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-center text-paper/60 normal-case tracking-normal">
          {tSite("address")}
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right text-paper/60">
          © {new Date().getFullYear()} · {t("rights")}
        </div>
      </div>
    </footer>
  );
}
