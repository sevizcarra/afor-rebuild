"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO, HERO_IMAGES, SITE } from "@/lib/content";
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
    <section id="top" className="relative h-screen w-full overflow-hidden bg-ink flex flex-col">
      {/* ======= ZONA FOTO con AFOR + slogan superpuesto ======= */}
      <div className="relative flex-1 overflow-hidden">
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

        {/* Gradient sutil arriba para legibilidad de wordmark + nav */}
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-ink/55 via-ink/15 to-transparent pointer-events-none" />

        {/* AFOR + SLOGAN sobre la foto */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-32 md:top-40 left-0 right-0 z-10"
        >
          <div className="container-edge">
            <h1
              className="font-brand text-paper tracking-[0.04em] leading-none"
              style={{ fontSize: "clamp(72px, 11vw, 180px)" }}
            >
              {SITE.brand}
            </h1>
            <p className="mt-4 md:mt-6 font-mono text-small md:text-body text-paper/85 uppercase tracking-[0.25em]">
              {SITE.slogan}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ======= BANNER INFERIOR — ficha editorial ======= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-ink"
      >
        {/* Linea superior - progreso del slide */}
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

            {/* IZQ — titular de posicionamiento + CTAs */}
            <div className="lg:col-span-7">
              <h2
                className="font-display font-light text-paper"
                style={{
                  fontSize: "clamp(28px, 3.6vw, 52px)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.02em",
                }}
              >
                Firma dedicada<br className="hidden sm:block" /> al proyecto del cliente.
              </h2>
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

            {/* DER — eyebrow + descripcion detallada + indicadores */}
            <div className="lg:col-span-5 lg:border-l lg:border-paper/10 lg:pl-12 space-y-6">
              <span className="block text-label uppercase tracking-[0.2em] font-mono text-accent">
                {HERO.eyebrow}
              </span>
              <p className="text-small text-paper/75 font-light leading-relaxed">
                Diez años en gran minería e industria. Sin overhead, sin diluir. El senior que firma es el que ejecuta.
              </p>

              {/* Indicadores clickeables del carrusel */}
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
