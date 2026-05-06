"use client";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/content";
import clsx from "clsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        scrolled ? "bg-paper/95 backdrop-blur-md border-b border-gray-200" : "bg-transparent"
      )}
    >
      <nav className={clsx("container-edge flex items-center justify-between transition-all duration-500", scrolled ? "h-16" : "h-20")}>
        <a
          href="#top"
          className={clsx(
            "font-brand text-lg tracking-[0.05em] transition-colors duration-300",
            scrolled ? "text-ink" : "text-paper"
          )}
        >
          {SITE.brand}
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
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
        <a
          href="#contacto"
          className={clsx(
            "text-small transition-colors duration-300",
            scrolled ? "text-ink hover:text-accent" : "text-paper hover:text-accent"
          )}
        >
          Hablemos →
        </a>
      </nav>
    </header>
  );
}
