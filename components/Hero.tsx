"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tSite = useTranslations("site");

  return (
    <section
      id="top"
      className="relative min-h-screen w-full bg-copper text-ink flex flex-col justify-between px-8 md:px-12 pt-32 md:pt-40 pb-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px]"
      >
        <h1 className="font-sans font-bold text-ink text-mega">
          {tSite("brand")}.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-12 gap-6 items-end mt-16"
      >
        <p className="col-span-12 md:col-span-7 text-h3 font-medium text-ink leading-snug max-w-[640px]">
          {t("lead")}
        </p>
        <div className="col-span-12 md:col-span-4 md:col-start-9 text-small text-ink/70 md:text-right">
          <div className="font-medium">{t("expansion")}</div>
          <div className="mt-2">{t("discipline")}</div>
        </div>
      </motion.div>
    </section>
  );
}
