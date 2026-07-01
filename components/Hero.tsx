"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-carbon">
      {/* Split layout */}
      <div className="grid grid-cols-12 min-h-screen">
        {/* Media izquierda (video 5 col) */}
        <div className="col-span-12 md:col-span-5 relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero/hero-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "grayscale(100%) contrast(1.1)" }}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay para carbon fade a la derecha */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-carbon pointer-events-none" />
        </div>

        {/* Bloque wordmark + copy 7 col */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 md:px-12 py-24 md:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-brand text-paper leading-[0.9] tracking-[0.02em]"
            style={{ fontSize: "clamp(72px, 10vw, 172px)" }}
          >
            aFor<span className="text-accent">©</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 max-w-lg mono-cap text-paper/75 !text-[12.5px] !leading-[1.7]"
          >
            {t("summary")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
