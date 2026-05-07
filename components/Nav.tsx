"use client";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import clsx from "clsx";

const LOCALES = ["es", "en"] as const;

function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("languages");

  return (
    <div className="flex items-center justify-center gap-3 text-small">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => router.replace(pathname, { locale: l })}
          className={clsx(
            "transition-colors duration-300 font-mono tracking-wider",
            l === locale ? "text-ink" : "text-gray-300 hover:text-ink"
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
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500 bg-paper",
        scrolled ? "border-b border-gray-200" : ""
      )}
    >
      <nav className={clsx("container-edge flex flex-col items-center justify-center gap-3 transition-all duration-500 py-4", scrolled ? "py-3" : "py-5")}>
        <Link
          href="/"
          className="font-brand tracking-[0.05em] text-lg text-ink transition-colors duration-300"
        >
          {tSite("brand")}
        </Link>

        <ul className="hidden md:flex items-center justify-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-small font-normal text-ink hover:opacity-60 transition-opacity duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <LanguageSwitcher />
      </nav>
    </header>
  );
}
