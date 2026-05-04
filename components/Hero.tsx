"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO, HERO_IMAGES } from "@/lib/content";
import clsx from "clsx";

const ROTATE_MS = 8000;

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-ink">
      {/* Fotos rotando */}
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.8, ease: "easeInOut" }, scale: { duration: ROTATE_MS / 1000, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img src={HERO_IMAGES[idx].src} alt={HERO_IMAGES[idx].alt} className="h-full w-full object-cover" loading={idx === 0 ? "eager" : "lazy"} />
        </motion.div>
      </AnimatePresence>

      {/* Overlay base sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-ink/15" />

      {/* Contenedor full height — banner se posiciona abajo */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32">
        {/* BANNER full width — mas visible para que aporte estructura */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-paper/18 backdrop-blur-md border-y border-paper/20 py-14 md:py-20"
        >
          <div className="container-edge max-w-5xl">
            <span className="block text-label uppercase tracking-[0.2em] font-mono font-normal text-accent mb-10">
              {HERO.eyebrow}
            </span>
            <h1
              className="font-display font-light text-paper"
              style={{
                fontSize: "clamp(48px, 6.5vw, 96px)",
                lineHeight: "1.05",
                letterSpacing: "-0.02em",
              }}
            >
              {HERO.title[0]}<br />{HERO.title[1]}
            </h1>
            <p className="mt-8 text-body text-paper/85 max-w-2xl font-light leading-relaxed md:text-lead">
              {HERO.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href={HERO.ctaPrimary.href}
                className="inline-flex items-center gap-3 bg-accent text-paper px-7 py-3.5 hover:bg-ink transition-colors duration-300 group text-body font-normal"
              >
                <span>{HERO.ctaPrimary.label}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a href={HERO.ctaSecondary.href} className="text-small text-paper/75 hover:text-accent transition-colors duration-300 px-2 font-light">
                {HERO.ctaSecondary.label}
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Indicador minimal */}
      <div className="absolute bottom-10 left-0 right-0 z-10 container-edge flex items-end justify-between">
        <div className="flex gap-3">
          {HERO_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={clsx("h-px w-10 transition-colors duration-700", i === idx ? "bg-accent" : "bg-paper/30")}
              aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
        <span className="font-mono text-small text-paper/50 tabular-nums tracking-wider">
          {String(idx + 1).padStart(2, "0")} <span className="opacity-40">/ {String(HERO_IMAGES.length).padStart(2, "0")}</span>
        </span>
      </div>
    </section>
  );
}
