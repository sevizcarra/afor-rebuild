"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tSite = useTranslations("site");

  return (
    <section id="top" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-ink flex flex-col justify-end">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay muted playsInline preload="auto" poster="/images/hero/hero-poster.jpg" className="h-full w-full object-cover">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/55 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent pointer-events-none" />
      </div>

      {/* Cruz + decorativa NA-style abajo derecha */}
      <div aria-hidden="true" className="absolute bottom-32 right-10 hidden lg:block text-paper/15 select-none pointer-events-none">
        <span className="font-sans font-thin leading-none" style={{ fontSize: "240px" }}>+</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pb-20 md:pb-24 container-edge"
      >
        {/* Eyebrow NA-style con bullets */}
        <div className="label text-paper/60 mb-8 tracking-[0.18em]">
          <span>ARQUITECTURA</span>
          <span className="mx-3 text-accent">·</span>
          <span>INGENIERÍA</span>
          <span className="mx-3 text-accent">·</span>
          <span>BIM</span>
        </div>

        {/* Wordmark mega con palabra serif italic */}
        <h1 className="font-sans font-bold text-paper text-mega leading-[0.92]">
          AFOR<span className="font-serif italic font-normal text-accent">.</span>
        </h1>

        {/* Hairline corto + tagline */}
        <div className="mt-8 mb-6 w-16 h-px bg-paper/60" />

        <p className="max-w-xl text-lead text-paper/80 font-light">
          {t("summary")}
        </p>

        {/* Botones: filled + outline */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#proyectos" className="inline-flex items-center justify-center text-small font-medium bg-paper text-ink px-6 py-3 hover:bg-accent transition-colors uppercase tracking-wider">
            Ver proyectos
          </a>
          <a href="#nosotros" className="inline-flex items-center gap-2 text-small font-medium text-paper border border-paper/40 px-6 py-3 hover:bg-paper/10 hover:border-paper transition-colors uppercase tracking-wider">
            Saber más <span className="text-accent">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
