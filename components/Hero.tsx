"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-anthracite flex flex-col justify-end">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero/hero-poster.jpg"
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(100%) contrast(1.05)" }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Top oscuro para nav legible */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-anthracite/60 to-transparent pointer-events-none" />
        {/* Gradiente final: video funde hacia antracita para transicion con Nosotros */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-anthracite via-anthracite/70 to-transparent pointer-events-none" />
      </div>

      {/* Cruz + decorativa */}
      <div aria-hidden="true" className="absolute bottom-32 right-10 hidden lg:block text-paper/15 select-none pointer-events-none">
        <span className="font-sans font-thin leading-none" style={{ fontSize: "240px" }}>+</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pb-24 md:pb-28 pl-6 md:pl-10 lg:pl-16 pr-6 md:pr-10 lg:pr-16 max-w-[1400px]"
      >
        {/* Wordmark Audiowide */}
        <h1
          className="font-brand text-paper leading-[0.92] tracking-[0.02em]"
          style={{ fontSize: "clamp(96px, 14vw, 220px)" }}
        >
          aFor<span className="text-accent">.</span>
        </h1>

        {/* Hairline + botones (summary movido a Nosotros) */}
        <div className="mt-8 mb-10 w-16 h-px bg-paper/60" />

        <div className="flex flex-wrap gap-3">
          <a href="#proyectos" className="inline-flex items-center justify-center text-small font-medium bg-paper text-ink px-6 py-3 hover:bg-accent hover:text-paper transition-colors uppercase tracking-wider">
            {t("cta1")}
          </a>
          <a href="#nosotros" className="inline-flex items-center gap-2 text-small font-medium text-paper border border-paper/40 px-6 py-3 hover:bg-paper/10 hover:border-paper transition-colors uppercase tracking-wider">
            {t("cta2")} <span className="text-accent">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
