"use client";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import clsx from "clsx";

const LOCALES = ["es", "en"] as const;

function LanguageSwitcher({ scrolled }: { scrolled: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("languages");

  return (
    <div className="hidden md:flex items-center gap-3 text-small">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => router.replace(pathname, { locale: l })}
          className={clsx(
            "transition-colors duration-300 font-mono tracking-wider",
            l === locale
              ? scrolled ? "text-accent" : "text-accent"
              : scrolled ? "text-ink/40 hover:text-ink" : "text-paper/40 hover:text-paper"
          )}
        >
          {t(l as "es" | "en")}
        </button>
      ))}
    </div>
  );
}

export default function Nav() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("about"), href: "#nosotros" },
    { label: t("projects"), href: "#proyectos" },
    { label: t("services"), href: "#servicios" },
    { label: t("contact"), href: "#contacto" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        scrolled ? "bg-paper/95 backdrop-blur-md border-b border-gray-200" : "bg-transparent"
      )}
    >
      <nav className={clsx("container-edge flex items-center justify-between transition-all duration-500", scrolled ? "h-16" : "h-20")}>
        <Link
          href="/"
          className={clsx(
            "font-brand tracking-[0.05em] text-lg transition-colors duration-300",
            scrolled ? "text-ink" : "text-paper"
          )}
        >
          {tSite("brand")}
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={clsx(
                  "text-small font-normal transition-colors duration-300",
                  scrolled ? "text-ink/70 hover:text-accent" : "text-paper/80 hover:text-paper"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <LanguageSwitcher scrolled={scrolled} />
          <a
            href="#contacto"
            className={clsx(
              "text-small transition-colors duration-300",
              scrolled ? "text-ink hover:text-accent" : "text-paper hover:text-accent"
            )}
          >
            {t("cta")}
          </a>
        </div>
      </nav>
    </header>
  );
}
