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
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.85;
      setPastHero(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const links = [
    { label: t("about"), href: "#nosotros" },
    { label: t("projects"), href: "#proyectos" },
    { label: t("services"), href: "#servicios" },
    { label: t("contact"), href: "#contacto" },
  ];

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      pastHero ? "bg-paper text-ink hairline-soft-b" : "bg-transparent text-paper",
    )}>
      <nav className="container-edge flex items-center justify-between h-16">
        {/* Wordmark del nav: invisible en hero, aparece al scrollear pasando el video */}
        <Link
          href="/"
          aria-label="aFor"
          className={clsx(
            "flex items-center gap-2 font-brand text-lg tracking-[0.05em] transition-all duration-500",
            pastHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
          )}
        >
          aFor<span className="text-accent">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-small">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={clsx("transition-colors", pastHero ? "text-gray-700 hover:text-accent" : "text-paper/85 hover:text-accent")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 text-small tabular">
          {LOCALES.map((l, i) => (
            <span key={l} className="contents">
              {i > 0 && <span className={clsx(pastHero ? "text-gray-300" : "text-paper/30")}>·</span>}
              <button
                onClick={() => router.replace(pathname, { locale: l })}
                className={clsx(
                  "transition-colors uppercase",
                  l === locale
                    ? (pastHero ? "text-ink" : "text-paper")
                    : (pastHero ? "text-gray-400 hover:text-gray-700" : "text-paper/40 hover:text-paper/70")
                )}
              >{tLang(l as "es" | "en")}</button>
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
}
