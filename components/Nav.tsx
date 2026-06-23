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
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/80 backdrop-blur-md">
      <nav className="grid grid-cols-12 items-center px-6 md:px-10 h-14 border-b border-paper/15">
        <Link href="/" className="col-span-2 font-sans font-black text-paper text-h4 tracking-[-0.02em] uppercase">
          {tSite("brand")}
        </Link>
        <ul className="col-span-8 hidden md:flex items-center justify-center gap-10 mono label text-paper/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="col-span-2 flex items-center justify-end gap-3 mono label">
          {LOCALES.map((l) => (
            <button
              key={l}
              onClick={() => router.replace(pathname, { locale: l })}
              className={clsx(
                "transition-colors",
                l === locale ? "text-paper" : "text-paper/30 hover:text-paper/70"
              )}
            >
              {tLang(l as "es" | "en")}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
