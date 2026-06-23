"use client";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  return (
    <footer className="relative bg-paper text-ink py-8 px-8 md:px-12 border-t border-ink/15">
      <div className="grid grid-cols-12 gap-6 items-center label text-gray-500 tabular">
        <div className="col-span-12 md:col-span-4 flex items-center gap-3">
          <span className="block w-1.5 h-1.5 bg-copper" aria-hidden="true" />
          <span className="text-ink font-semibold">{tSite("brand")}</span>
          <span className="text-gray-500 normal-case tracking-normal">{t("expansion")}</span>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-center text-gray-500 normal-case tracking-normal">
          {tSite("address")}
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          © {new Date().getFullYear()} · {t("rights")}
        </div>
      </div>
    </footer>
  );
}
