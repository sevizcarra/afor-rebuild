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
          <img src={active.src} alt={active.alt} className="h-full w-full object-cover" loading={idx === 0 ? "eager" : "lazy"} />
        </motion.div>
      </AnimatePresence>

      {/* Overlay base muy sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-ink/30" />

      {/* METADATA del proyecto activo — esquina superior derecha */}
      <div className="absolute top-24 right-0 left-0 z-10">
        <div className="container-edge flex justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-right"
            >
              <div className="font-mono text-small text-paper/55 tracking-widest mb-2 tabular-nums">
                {String(idx + 1).padStart(2, "0")} <span className="opacity-50">/ {String(HERO_IMAGES.length).padStart(2, "0")}</span>
              </div>
              <div className="font-display font-light text-paper text-h4 leading-tight">
                {active.project}
              </div>
              <div className="font-mono text-small text-accent uppercase tracking-widest mt-1">
                {active.client} <span className="text-paper/40">·</span> {active.year}
              </div>
              {/* indicadores como dots clickeables */}
              <div className="flex gap-2 justify-end mt-4">
                {HERO_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={clsx(
                      "h-1.5 transition-all duration-500",
                      i === idx ? "w-8 bg-accent" : "w-1.5 bg-paper/30 hover:bg-paper/60"
                    )}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CONTENIDO inferior */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        {/* BANNER OSCURO con grid asimetrico */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-ink/45 backdrop-blur-md border-t border-paper/15"
        >
          {/* linea acento naranja — borde superior izq */}
          <div className="absolute top-0 left-0 h-px w-32 bg-accent" />

          <div className="container-edge py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              {/* IZQ 7/12 — titulo + CTAs */}
              <div className="lg:col-span-7">
                <h1
                  className="font-display font-light text-paper"
                  style={{
                    fontSize: "clamp(48px, 6.5vw, 96px)",
                    lineHeight: "1.0",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {HERO.title[0]}<br />{HERO.title[1]}
                </h1>
                <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
                  <a
                    href={HERO.ctaPrimary.href}
                    className="inline-flex items-center gap-3 bg-accent text-paper px-7 py-3.5 hover:bg-paper hover:text-ink transition-colors duration-300 group text-body"
                  >
                    <span>{HERO.ctaPrimary.label}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                  <a href={HERO.ctaSecondary.href} className="text-small text-paper/75 hover:text-accent transition-colors duration-300 px-2 font-light">
                    {HERO.ctaSecondary.label}
                  </a>
                </div>
              </div>

              {/* DER 5/12 — eyebrow + subtitle */}
              <div className="lg:col-span-5 lg:pb-2">
                <span className="block text-label uppercase tracking-[0.2em] font-mono text-accent mb-6">
                  {HERO.eyebrow}
                </span>
                <p className="text-body text-paper/85 font-light leading-relaxed">
                  {HERO.subtitle}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
