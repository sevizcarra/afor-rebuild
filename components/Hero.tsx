"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-anthracite">
      {/* Video full screen */}
      <div className="absolute inset-0">
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
        {/* Overlays sutiles para legibilidad + fade final a antracita */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-anthracite/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-anthracite via-anthracite/40 to-transparent pointer-events-none" />
      </div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-12 pb-20 md:pb-24 pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-brand text-paper leading-[0.9] tracking-[0.02em]"
          style={{ fontSize: "clamp(72px, 11vw, 172px)" }}
        >
          aFor<span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl mono-cap text-paper/80 !text-[12px] !leading-[1.7]"
        >
          {t("summary")}
        </motion.p>
      </div>
    </section>
  );
}
