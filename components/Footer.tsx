"use client";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  return (
    <footer className="relative bg-paper text-ink py-10 px-8 md:px-12">
      <div className="flex items-center justify-between gap-6 flex-wrap text-small text-gray-500">
        <div>
          <span className="font-sans font-bold text-ink">{tSite("brand")}.</span>
          <span className="ml-3">{t("expansion")}</span>
        </div>
        <div>© {new Date().getFullYear()} AFOR · {t("rights")}</div>
      </div>
    </footer>
  );
}
