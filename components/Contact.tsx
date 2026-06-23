"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contacto" className="relative bg-ink text-paper py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-paper" />

      {/* Cuadrado calipso bottom-left grande */}
      <div
        aria-hidden="true"
        className="absolute bg-accent"
        style={{ width: "min(28vw, 360px)", height: "min(28vw, 360px)", bottom: "-10%", left: "-6%" }}
      />

      <div className="relative grid grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 md:col-span-3 flex items-start gap-3">
          <span className="block w-2 h-2 bg-copper mt-1.5" aria-hidden="true" />
          <span className="label text-paper/60">{t("eyebrow")}</span>
        </div>
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="col-span-12 md:col-span-9 font-sans font-black text-h1 text-paper uppercase mt-8 md:mt-0"
        >
          {t("title")}
        </motion.h2>

        <div className="col-span-12 md:col-start-4 md:col-span-9 mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 border-t border-paper/30 pt-10">
          <div>
            <div className="label text-paper/50">Email</div>
            <a href={`mailto:${t("email")}`} className="mt-3 block font-sans font-medium text-h3 text-paper hover:text-accent transition-colors">
              {t("email")}
            </a>
          </div>
          <div>
            <div className="label text-paper/50">Tel</div>
            <a href={`tel:${t("phone").replace(/\s/g, "")}`} className="mt-3 block font-sans font-medium text-h3 text-paper hover:text-accent transition-colors">
              {t("phone")}
            </a>
          </div>
          <div>
            <div className="label text-paper/50">Ubicación</div>
            <div className="mt-3 font-sans font-medium text-h3 text-paper">{t("city")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
