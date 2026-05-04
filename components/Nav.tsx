"use client";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/content";
import clsx from "clsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-navy-deep/85 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav className={clsx("container-edge flex items-center justify-between transition-all duration-500", scrolled ? "h-14" : "h-20")}>
        {/* Logo */}
        <a href="#top" className="font-display text-xl text-off-white tracking-[0.2em]">
          {SITE.brand}
        </a>

        {/* Menu centrado */}
        <ul className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-body-sm text-off-white/70 hover:text-off-white font-normal tracking-wide transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA con borde fino, no relleno */}
        <a
          href="#contacto"
          className="text-body-sm text-off-white px-5 py-2 border border-off-white/30 hover:border-orange hover:text-orange transition-colors duration-300 tracking-wide"
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
