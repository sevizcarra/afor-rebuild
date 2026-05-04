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
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-navy-deep/80 backdrop-blur-md border-b border-gray-line"
          : "bg-transparent"
      )}
    >
      <nav className="container-edge h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl text-off-white tracking-wider">
          {SITE.brand}
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-body-sm text-off-white/80 hover:text-off-white transition-colors uppercase tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="btn-primary text-body-sm py-3 px-5">
          Hablemos
        </a>
      </nav>
    </header>
  );
}
