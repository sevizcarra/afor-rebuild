"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO, HERO_IMAGES } from "@/lib/content";
import clsx from "clsx";

const ROTATE_MS = 7000;

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-navy-deep">
      {/* Background images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.6, ease: "easeInOut" }, scale: { duration: ROTATE_MS / 1000, ease: "linear" } }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGES[idx].src}
            alt={HERO_IMAGES[idx].alt}
            className="h-full w-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay sutil */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,16,36,0.35) 0%, rgba(15,16,36,0.05) 40%, rgba(15,16,36,0.75) 100%)",
        }}
      />

      {/* Content - alineado a la izquierda con mas respiro */}
      <div className="relative z-10 h-full container-edge flex flex-col justify-end pb-24 md:pb-32">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-orange mb-8"
        >
          {HERO.eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-medium text-off-white max-w-5xl"
          style={{
            fontSize: "clamp(56px, 8vw, 120px)",
            lineHeight: "1.02",
            letterSpacing: "-0.025em",
          }}
        >
          {HERO.title[0]}
          <br />
          {HERO.title[1]}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-body-lg text-off-white/80 max-w-2xl font-light"
        >
          {HERO.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row sm:items-center gap-8"
        >
          <a
            href={HERO.ctaPrimary.href}
            className="inline-flex items-center gap-3 text-off-white border-b border-off-white/40 pb-1 hover:border-orange hover:text-orange transition-colors duration-300"
          >
            {HERO.ctaPrimary.label}
            <span className="text-orange">→</span>
          </a>
          <a href={HERO.ctaSecondary.href} className="text-body text-off-white/60 hover:text-off-white transition-colors">
            {HERO.ctaSecondary.label}
          </a>
        </motion.div>
      </div>

      {/* Indicador del carrusel - mas fino */}
      <div className="absolute bottom-10 left-0 right-0 z-10 container-edge flex items-end justify-between">
        <div className="flex gap-4">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={clsx(
                "h-px w-12 transition-colors duration-500",
                i === idx ? "bg-orange" : "bg-off-white/20"
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <span className="font-mono text-body-sm text-off-white/40 tracking-wider">
          {String(idx + 1).padStart(2, "0")} / {String(HERO_IMAGES.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
