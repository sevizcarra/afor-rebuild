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
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { n: "01", label: t("about"), href: "#nosotros" },
    { n: "02", label: t("projects"), href: "#proyectos" },
    { n: "03", label: t("services"), href: "#servicios" },
    { n: "04", label: t("contact"), href: "#contacto" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        scrolled ? "bg-paper text-ink hairline-soft-b" : "bg-transparent text-paper"
      )}
    >
      <nav className="container-edge">
        <div className={clsx("grid grid-cols-12 gap-4 items-center transition-all duration-500", scrolled ? "h-14" : "h-20")}>
          <Link href="/" className={clsx("col-span-3 font-brand tracking-[0.05em] text-lg")}>
            {tSite("brand")}
          </Link>
          <ul className={clsx("col-span-6 hidden md:flex items-center justify-center gap-8 text-small")}>
            {links.map((l) => (
              <li key={l.href} className="flex items-baseline gap-1.5">
                <span className={clsx("text-[10px] tabular", scrolled ? "text-gray-500" : "text-paper/50")}>{l.n}</span>
                <a
                  href={l.href}
                  className={clsx(
                    "transition-colors",
                    scrolled ? "text-gray-700 hover:text-ink" : "text-paper/85 hover:text-paper"
                  )}
                >{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="col-span-3 flex items-center justify-end gap-5">
            <div className="hidden md:flex items-center gap-2 text-small tabular">
              {LOCALES.map((l, i) => (
                <span key={l} className="contents">
                  {i > 0 && <span className={clsx(scrolled ? "text-gray-300" : "text-paper/30")}>/</span>}
                  <button
                    onClick={() => router.replace(pathname, { locale: l })}
                    className={clsx(
                      "transition-colors",
                      l === locale
                        ? (scrolled ? "text-ink" : "text-paper")
                        : (scrolled ? "text-gray-400 hover:text-gray-700" : "text-paper/40 hover:text-paper/70")
                    )}
                  >{tLang(l as "es" | "en")}</button>
                </span>
              ))}
            </div>
            <a
              href="#contacto"
              className={clsx(
                "text-small transition-colors",
                scrolled ? "text-ink hover:text-accent" : "text-paper hover:text-accent"
              )}
            >
              {t("cta")} →
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
