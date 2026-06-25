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
    { label: t("about"), href: "#nosotros" },
    { label: t("projects"), href: "#proyectos" },
    { label: t("services"), href: "#servicios" },
    { label: t("contact"), href: "#contacto" },
  ];

  return (
    <header className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-paper text-ink hairline-soft-b" : "bg-transparent text-paper",
    )}>
      <nav className="container-edge flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-brand text-lg tracking-[0.05em]">
          {tSite("brand")}
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-small">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={clsx("transition-colors", scrolled ? "text-gray-700 hover:text-accent" : "text-paper/85 hover:text-accent")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 text-small tabular">
          {LOCALES.map((l, i) => (
            <span key={l} className="contents">
              {i > 0 && <span className={clsx(scrolled ? "text-gray-300" : "text-paper/30")}>·</span>}
              <button
                onClick={() => router.replace(pathname, { locale: l })}
                className={clsx(
                  "transition-colors uppercase",
                  l === locale ? (scrolled ? "text-ink" : "text-paper") : (scrolled ? "text-gray-400 hover:text-gray-700" : "text-paper/40 hover:text-paper/70")
                )}
              >{tLang(l as "es" | "en")}</button>
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
}
