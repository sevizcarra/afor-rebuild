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

      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/30" />

      <div className="relative z-10 h-full container-edge flex flex-col justify-end pb-24 md:pb-32 max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="label text-accent mb-10"
        >
          {HERO.eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display font-medium text-paper"
        >
          {HERO.title[0]}<br />{HERO.title[1]}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-lead text-paper/85 max-w-2xl font-light leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row sm:items-center gap-6"
        >
          {/* CTA principal con fondo naranja - mas presencia */}
          <a
            href={HERO.ctaPrimary.href}
            className="inline-flex items-center gap-3 bg-accent text-paper px-7 py-4 hover:bg-ink transition-colors duration-300 group text-body font-medium"
          >
            <span>{HERO.ctaPrimary.label}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a href={HERO.ctaSecondary.href} className="text-small text-paper/70 hover:text-accent transition-colors duration-300 px-2">
            {HERO.ctaSecondary.label}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-10 container-edge flex items-end justify-between">
        <div className="flex gap-3">
          {HERO_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)}
              className={clsx("h-px w-10 transition-colors duration-700", i === idx ? "bg-accent" : "bg-paper/20")}
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
