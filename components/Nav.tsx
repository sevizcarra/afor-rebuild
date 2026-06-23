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
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-8 md:px-12 py-8">
        <Link href="/" className="font-sans font-bold text-ink text-h4 tracking-[-0.02em]">
          {tSite("brand")}.
        </Link>
        <div className="flex items-center gap-8 md:gap-12">
          <ul className="hidden md:flex items-center gap-8 text-small text-ink/80">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-ink transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-small">
            {LOCALES.map((l, i) => (
              <span key={l} className="contents">
                {i > 0 && <span className="text-ink/30">/</span>}
                <button
                  onClick={() => router.replace(pathname, { locale: l })}
                  className={clsx("transition-colors", l === locale ? "text-ink" : "text-ink/40 hover:text-ink/70")}
                >
                  {tLang(l as "es" | "en")}
                </button>
              </span>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
