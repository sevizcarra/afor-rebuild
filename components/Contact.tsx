"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contacto" className="relative bg-paper text-ink py-24 md:py-32 px-8 md:px-12">
      <div className="grid grid-cols-12 gap-6 border-t border-ink pt-8">
        <div className="col-span-12 md:col-span-3">
          <div className="label text-gray-500 tabular">05 — Contacto</div>
        </div>
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="col-span-12 md:col-span-9 font-sans font-semibold text-display max-w-3xl"
        >
          {t("title")}
        </motion.h2>
      </div>

      <div className="mt-20 md:mt-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="label text-gray-500 tabular">Coordenadas</div>
        </div>
        <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
            transition={{ delay: 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-ink/15 pt-4"
          >
            <div className="label text-gray-500">Email</div>
            <a href={`mailto:${t("email")}`} className="mt-3 block font-sans font-medium text-h2 hover:text-copper transition-colors underline-offset-4">
              {t("email")}
            </a>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-ink/15 pt-4"
          >
            <div className="label text-gray-500">Tel</div>
            <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="mt-3 block font-sans font-medium text-h2 hover:text-copper transition-colors tabular">
              {t("phone")}
            </a>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-ink/15 pt-4"
          >
            <div className="label text-gray-500">Ubicación</div>
            <div className="mt-3 font-sans font-medium text-h2">{t("city")}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
