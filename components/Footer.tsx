"use client";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  return (
    <footer className="relative bg-paper py-10 border-t border-gray-200">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-6 items-center text-small text-gray-500">
        <div className="col-span-12 md:col-span-4 flex items-center gap-2">
          <span className="block w-2.5 h-2.5 bg-accent rounded-sm" aria-hidden="true" />
          <span className="text-ink font-semibold">{tSite("brand")}</span>
          <span className="text-gray-500">·</span>
          <span>{t("expansion")}</span>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-center">
          {tSite("address")}
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          © {new Date().getFullYear()} AFOR · {t("rights")}
        </div>
      </div>
    </footer>
  );
}
