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

  const active = HERO_IMAGES[idx];

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-ink flex flex-col justify-end">
      {/* ======= FOTO — cubre toda la section, el banner translucido la deja ver ======= */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.8, ease: "easeInOut" }, scale: { duration: ROTATE_MS / 1000, ease: "linear" } }}
            className="absolute inset-0"
          >
            <img src={active.src} alt={active.alt} className="h-full w-full object-cover" loading={idx === 0 ? "eager" : "lazy"} />
          </motion.div>
        </AnimatePresence>

        {/* Gradient sutil arriba para que el nav respire */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/50 to-transparent pointer-events-none" />
      </div>

      {/* ======= BANNER INFERIOR — ink opaco, ficha editorial ======= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-ink/80 backdrop-blur-md"
      >
        {/* linea superior — progreso del slide activo */}
        <div className="absolute -top-px left-0 right-0 h-px bg-paper/10">
          <motion.div
            key={idx}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
            className="h-px bg-accent"
          />
        </div>

        <div className="container-edge py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* IZQ — TITULO + CTAs */}
            <div className="lg:col-span-7">
              <h1
                className="font-display text-paper"
                style={{
                  fontSize: "clamp(40px, 5vw, 72px)",
                  fontWeight: 500,
                  lineHeight: "1.05",
                  letterSpacing: "-0.025em",
                }}
              >
                Making ideas grow.
              </h1>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
                <a
                  href={HERO.ctaPrimary.href}
                  className="inline-flex items-center gap-3 bg-accent text-paper px-7 py-3.5 hover:bg-paper hover:text-ink transition-colors duration-300 group text-body"
                >
                  <span>{HERO.ctaPrimary.label}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
                <a href={HERO.ctaSecondary.href} className="text-small text-paper/70 hover:text-accent transition-colors duration-300 px-2 font-light">
                  {HERO.ctaSecondary.label}
                </a>
              </div>
            </div>

            {/* DER — Eyebrow, subtitle, controles */}
            <div className="lg:col-span-5 lg:border-l lg:border-paper/10 lg:pl-12 space-y-6">
              <span className="block text-label uppercase tracking-[0.2em] font-mono text-accent">
                {HERO.eyebrow}
              </span>
              <p className="text-small text-paper/80 font-light leading-relaxed">
                {HERO.subtitle}
              </p>

              {/* Indicadores clickeables — sin metadata */}
              <div className="pt-6 border-t border-paper/10 flex justify-end gap-1.5">
                {HERO_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={clsx(
                      "h-1 transition-all duration-500",
                      i === idx ? "w-8 bg-accent" : "w-3 bg-paper/25 hover:bg-paper/50"
                    )}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
