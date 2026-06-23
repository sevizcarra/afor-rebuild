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
    <section id="contacto" className="relative bg-accent text-ink py-28 md:py-40 px-8 md:px-12">
      <div className="max-w-[1400px]">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="font-sans font-semibold text-display max-w-4xl"
        >
          {t("title")}
        </motion.h2>

        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
            transition={{ delay: 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label text-ink/60">Email</div>
            <a href={`mailto:${t("email")}`} className="mt-2 block font-sans font-medium text-h3 hover:underline underline-offset-4">
              {t("email")}
            </a>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label text-ink/60">Tel</div>
            <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="mt-2 block font-sans font-medium text-h3 hover:underline underline-offset-4">
              {t("phone")}
            </a>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label text-ink/60">Ubicación</div>
            <div className="mt-2 font-sans font-medium text-h3">{t("city")}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
