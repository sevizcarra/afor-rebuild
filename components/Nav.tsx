"use client";
import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import clsx from "clsx";

const LOCALES = ["es", "en", "pt"] as const;

export default function Nav() {
  const t = useTranslations("nav");
  const tSite = useTranslations("site");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const tLang = useTranslations("languages");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.min(Math.max(scrolled, 0), 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Barra de scroll accent arriba */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
        <div className="h-full bg-accent transition-[width] duration-100" style={{ width: `${progress * 100}%` }} />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="px-6 md:px-10 pt-6 flex items-center justify-between">
          {/* Logo left */}
          <Link href="/" aria-label="aFor" className="font-brand text-ink text-base tracking-[0.05em] flex items-baseline gap-1">
            aFor<span className="text-accent align-baseline">.</span>
          </Link>

          {/* Atajos de seccion - sutiles */}
          <div className="hidden md:flex items-center gap-6 mr-6 text-[13px] tracking-[-0.005em]">
            <a href="#nosotros" className="text-ink/55 hover:text-ink transition-colors">{t("about")}</a>
            <a href="#proyectos" className="text-ink/55 hover:text-ink transition-colors">{t("projects")}</a>
            <a href="#servicios" className="text-ink/55 hover:text-ink transition-colors">{t("services")}</a>
          </div>

          {/* Idiomas + Contacto */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 mr-2">
              {LOCALES.map((l, i) => (
                <span key={l} className="contents">
                  {i > 0 && <span className="text-ink/25 mono-cap">·</span>}
                  <button
                    onClick={() => router.replace(pathname, { locale: l })}
                    className={clsx(
                      "mono-cap transition-colors",
                      l === locale ? "text-ink" : "text-ink/40 hover:text-ink/70"
                    )}
                  >{tLang(l as "es" | "en" | "pt")}</button>
                </span>
              ))}
            </div>
            <a href="#contacto" className="chip !bg-anthracite-soft/80 !text-ink backdrop-blur border border-ink/10">
              {t("contact")} <span className="text-accent">→</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
