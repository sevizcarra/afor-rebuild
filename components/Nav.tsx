"use client";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("what"), href: "#qué" },
    { label: t("assets"), href: "#activos" },
    { label: t("method"), href: "#método" },
    { label: t("contact"), href: "#contacto" },
  ];

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-paper/95 backdrop-blur border-b border-gray-200" : "bg-transparent",
    )}>
      <nav className="max-w-[1320px] mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        <Link href="/" className={clsx("flex items-center gap-2 transition-colors", scrolled ? "text-ink" : "text-paper")}>
          <span className="block w-2.5 h-2.5 bg-accent rounded-sm" aria-hidden="true" />
          <span className="font-sans font-semibold text-h3 tracking-[-0.01em]">{tSite("brand")}</span>
        </Link>
        <ul className={clsx("hidden md:flex items-center gap-8 text-small transition-colors", scrolled ? "text-gray-700" : "text-paper/85")}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={clsx("transition-colors", scrolled ? "hover:text-ink" : "hover:text-accent")}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <div className={clsx("hidden md:flex items-center gap-2 text-small tabular transition-colors", scrolled ? "text-gray-500" : "text-paper/70")}>
            {LOCALES.map((l, i) => (
              <span key={l} className="contents">
                {i > 0 && <span className={clsx(scrolled ? "text-gray-300" : "text-paper/30")}>/</span>}
                <button
                  onClick={() => router.replace(pathname, { locale: l })}
                  className={clsx(
                    "transition-colors",
                    l === locale
                      ? (scrolled ? "text-ink" : "text-paper")
                      : (scrolled ? "hover:text-gray-700" : "hover:text-paper")
                  )}
                >
                  {tLang(l as "es" | "en")}
                </button>
              </span>
            ))}
          </div>
          <a
            href="#contacto"
            className={clsx(
              "inline-flex items-center gap-1.5 text-small font-medium px-4 py-2 rounded-md transition-colors",
              scrolled
                ? "bg-ink text-paper hover:bg-accent"
                : "bg-paper text-ink hover:bg-accent"
            )}
          >
            {t("contact")} →
          </a>
        </div>
      </nav>
    </header>
  );
}
