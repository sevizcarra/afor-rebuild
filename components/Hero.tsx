"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HERO, HERO_IMAGES } from "@/lib/content";
import clsx from "clsx";

const ROTATE_MS = 6000;

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_IMAGES.length), ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-navy-deep">
      {/* Background images with cross-fade + slow zoom */}
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2, ease: "easeInOut" }, scale: { duration: ROTATE_MS / 1000, ease: "linear" } }}
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

      {/* Navy overlay for legibility */}
      <div className="absolute inset-0 bg-navy-deep/40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,16,36,0.55) 0%, rgba(15,16,36,0.15) 35%, rgba(15,16,36,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full container-edge flex flex-col justify-end pb-20 md:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-orange mb-6"
        >
          {HERO.eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-bold text-hero text-off-white max-w-5xl"
        >
          {HERO.title[0]}
          <br />
          {HERO.title[1]}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-body-lg text-off-white/85 max-w-2xl"
        >
          {HERO.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6"
        >
          <a href={HERO.ctaPrimary.href} className="btn-primary">
            {HERO.ctaPrimary.label}
          </a>
          <a href={HERO.ctaSecondary.href} className="link-arrow text-body">
            {HERO.ctaSecondary.label}
          </a>
        </motion.div>
      </div>

      {/* Carousel indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-10 container-edge flex items-end justify-between">
        <div className="flex gap-3">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={clsx(
                "h-px w-16 transition-colors duration-300",
                i === idx ? "bg-orange" : "bg-gray-line"
              )}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
        <span className="font-mono text-body-sm text-off-white/60">
          {String(idx + 1).padStart(2, "0")} / {String(HERO_IMAGES.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
