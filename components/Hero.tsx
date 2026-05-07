"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tSite = useTranslations("site");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // parallax sutil: el bloque sube a velocidad menor que el scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-screen min-h-[640px] w-full bg-paper flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity, scale }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl"
      >
        <span className="label text-gray-500 mb-8 block">{t("eyebrow")}</span>
        <h1 className="font-brand text-ink text-hero tracking-[0.04em]">{tSite("brand")}.</h1>
        <p className="mt-12 text-lead text-ink font-light">{t("summary")}</p>
      </motion.div>
    </section>
  );
}
