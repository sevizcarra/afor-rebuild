"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tSite = useTranslations("site");

  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink flex flex-col justify-end">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay muted playsInline preload="auto" poster="/images/hero/hero-poster.jpg" className="h-full w-full object-cover">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/55 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/65 to-transparent pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 container-edge pb-16 md:pb-20"
      >
        <div className="max-w-4xl" style={{ marginLeft: "-0.04em" }}>
          <span className="label text-paper/70 mb-6 block">{t("eyebrow")}</span>
          <h1 className="font-brand text-paper text-hero tracking-[0.04em]">{tSite("brand")}.</h1>
          <p className="mt-8 max-w-2xl text-lead text-paper/85 font-light">{t("summary")}</p>
        </div>
      </motion.div>
    </section>
  );
}
