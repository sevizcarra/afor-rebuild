"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/content";
import clsx from "clsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      // El logo del nav aparece cuando ya pasaste el ~85% del viewport (saliendo del hero)
      setPastHero(y > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-paper/95 backdrop-blur-md border-b border-gray-200" : "bg-paper/0"
      )}
    >
      <nav className={clsx("container-edge flex items-center justify-between transition-all duration-500", scrolled ? "h-16" : "h-20")}>
        {/* Logo: oculto en hero, aparece al hacer scroll fuera */}
        <div className="min-w-[80px]">
          <AnimatePresence>
            {pastHero && (
              <motion.a
                href="#top"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={clsx(
                  "font-brand tracking-[0.04em] text-2xl transition-colors duration-300 hover:text-accent inline-block",
                  scrolled ? "text-ink" : "text-paper"
                )}
              >
                {SITE.brand}
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={clsx(
                  "relative text-small font-normal transition-colors duration-300 group py-2",
                  scrolled ? "text-ink/70 hover:text-ink" : "text-paper/80 hover:text-paper"
                )}
              >
                {l.label}
                <span className="absolute left-0 right-0 bottom-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className={clsx(
            "text-small px-5 py-2.5 transition-all duration-300",
            scrolled ? "bg-accent text-paper hover:bg-ink" : "bg-accent text-paper hover:bg-paper hover:text-ink"
          )}
        >
          Hablemos
        </a>
      </nav>
    </header>
  );
}
