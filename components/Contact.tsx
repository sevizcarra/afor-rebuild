"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const SITE_EMAIL = "contacto@afor.cl";
const SITE_PHONE = "+56 9 6350 1854";

export default function Contact() {
  const t = useTranslations("contact");
  const tSite = useTranslations("site");

  return (
    <section id="contacto" className="relative bg-carbon text-paper py-24 md:py-32">
      <div className="px-6 md:px-10">
        <div className="mono-cap text-paper/70 flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {t("eyebrow") || "Contact"}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-brand text-paper leading-[0.9] tracking-[0.02em] mb-16 md:mb-20"
          style={{ fontSize: "clamp(64px, 10vw, 172px)" }}
        >
          {t("title")}<span className="text-accent">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="bg-carbon-soft border border-paper/5 rounded-3xl p-8 hover:border-paper/25 transition-colors block"
          >
            <div className="mono-cap text-paper/50 mb-4">{t("labels.email")}</div>
            <div className="font-brand text-paper text-xl md:text-2xl tracking-[0.01em] break-all">{SITE_EMAIL}</div>
          </a>

          <a
            href={`tel:${SITE_PHONE.replace(/\s/g, "")}`}
            className="bg-carbon-soft border border-paper/5 rounded-3xl p-8 hover:border-paper/25 transition-colors block"
          >
            <div className="mono-cap text-paper/50 mb-4">{t("labels.phone")}</div>
            <div className="font-brand text-paper text-xl md:text-2xl tracking-[0.01em] tabular-nums">{SITE_PHONE}</div>
          </a>

          <div className="bg-carbon-soft border border-paper/5 rounded-3xl p-8">
            <div className="mono-cap text-paper/50 mb-4">{t("labels.location")}</div>
            <div className="font-brand text-paper text-xl md:text-2xl tracking-[0.01em] leading-tight">
              {tSite("address")}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="chip !bg-accent !text-paper !text-[13px] !py-3 !px-6 hover:!bg-paper hover:!text-accent transition-colors"
          >
            {t("cta")} <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
