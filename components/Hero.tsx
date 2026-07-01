"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="relative bg-paper min-h-screen flex flex-col pb-16 md:pb-24">
      {/* Video en su propio contenedor: 65vh de alto, fade interno al pie hacia paper.
          Ningún elemento se superpone con el flujo siguiente. */}
      <div className="relative h-[62vh] md:h-[68vh] w-full overflow-hidden">
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
        {/* Fade interno del video al blanco (dentro del box) */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-paper/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-paper via-paper/85 to-transparent pointer-events-none" />
      </div>

      {/* Wordmark + summary DEBAJO del video, sobre bg-paper puro */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 -mt-12 md:-mt-20 relative z-10"
      >
        <h1
          className="font-brand text-ink leading-[0.9] tracking-[0.02em]"
          style={{ fontSize: "clamp(72px, 11vw, 172px)" }}
        >
          aFor<span className="text-accent">.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl mono-cap text-ink/70 !text-[12px] !leading-[1.7]"
        >
          {t("summary")}
        </motion.p>
      </motion.div>
    </section>
  );
}
