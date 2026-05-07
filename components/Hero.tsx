"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tSite = useTranslations("site");

  return (
    <section
      id="top"
      className="relative h-screen min-h-[640px] w-full bg-paper flex flex-col items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl"
      >
        <span className="label text-gray-500 mb-8 block">{t("eyebrow")}</span>
        <h1 className="font-brand text-ink text-hero tracking-[0.04em]">{tSite("brand")}.</h1>
        <div className="my-10 flex items-center justify-center gap-3">
          <span className="block h-px w-10 bg-gray-300" />
          <span className="block h-1 w-1 rounded-full bg-gray-300" />
          <span className="block h-px w-10 bg-gray-300" />
        </div>
        <p className="text-lead text-ink font-light">{t("summary")}</p>
      </motion.div>
    </section>
  );
}
