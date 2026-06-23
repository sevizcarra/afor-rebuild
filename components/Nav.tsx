"use client";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import clsx from "clsx";

const LOCALES = ["es", "en"] as const;

export default function Nav() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const tLang = useTranslations("languages");

  const links = [
    { label: t("what"), href: "#qué" },
    { label: t("assets"), href: "#activos" },
    { label: t("method"), href: "#método" },
    { label: t("contact"), href: "#contacto" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-paper">
      <nav className="grid grid-cols-12 gap-6 items-center px-8 md:px-12 py-6 border-b border-paper/20">
        <Link href="/" className="col-span-3 font-sans font-semibold text-h4 tracking-[-0.01em]">
          {tSite("brand")}
        </Link>
        <ul className="col-span-6 hidden md:flex items-center justify-center gap-10 text-small">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-paper/80 hover:text-paper transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="col-span-3 flex items-center justify-end gap-3 text-small tabular">
          {LOCALES.map((l, i) => (
            <span key={l} className="contents">
              {i > 0 && <span className="text-paper/30">/</span>}
              <button
                onClick={() => router.replace(pathname, { locale: l })}
                className={clsx("transition-colors", l === locale ? "text-paper" : "text-paper/40 hover:text-paper/70")}
              >
                {tLang(l as "es" | "en")}
              </button>
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
}
