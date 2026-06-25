"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const SITE_EMAIL = "contacto@afor.cl";
const SITE_PHONE = "+56 9 6350 1854";

export default function Contact() {
  const t = useTranslations("contact");
  const tSite = useTranslations("site");

  return (
    <section id="contacto" className="relative bg-ink text-paper py-24 md:py-32">
      <div className="container-edge">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <div className="text-paper/15 font-thin leading-none mb-12" style={{ fontSize: "96px" }} aria-hidden="true">+</div>
            <div className="label text-paper/50 mb-5 tracking-[0.18em]">{t("eyebrow")}</div>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
              className="font-sans font-bold text-paper leading-[1.05]"
              style={{ fontSize: "clamp(36px, 4.2vw, 56px)", letterSpacing: "-0.025em" }}
            >
              {t("title")}<span className="font-serif italic font-normal text-accent">.</span>
            </motion.h2>
            <p className="mt-8 text-body text-paper/65 max-w-sm">
              {t("body")}
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-10 inline-flex items-center justify-center text-small font-medium bg-paper text-ink px-7 py-3.5 hover:bg-accent transition-colors uppercase tracking-wider"
            >
              {t("cta")}
            </a>
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-8 space-y-4">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
              className="border border-paper/15 p-7 hover:border-accent transition-colors"
            >
              <div className="label text-paper/50 mb-3 tracking-[0.18em]">{t("labels.email")}</div>
              <a href={`mailto:${SITE_EMAIL}`} className="font-sans font-semibold text-paper text-h3 hover:text-accent transition-colors">
                {SITE_EMAIL}
              </a>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
                transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="border border-paper/15 p-7 hover:border-accent transition-colors"
              >
                <div className="label text-paper/50 mb-3 tracking-[0.18em]">{t("labels.phone")}</div>
                <a href={`tel:${SITE_PHONE.replace(/\s/g, "")}`} className="font-sans font-semibold text-paper text-h3 tabular hover:text-accent transition-colors">
                  {SITE_PHONE}
                </a>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
                transition={{ delay: 0.16, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="border border-paper/15 p-7 hover:border-accent transition-colors"
              >
                <div className="label text-paper/50 mb-3 tracking-[0.18em]">{t("labels.location")}</div>
                <div className="font-sans font-semibold text-paper text-h3 leading-snug">
                  {tSite("address")}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
