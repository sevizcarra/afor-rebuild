"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const SITE_EMAIL = "contacto@afor.cl";
const SITE_PHONE = "+56 9 6350 1854";

export default function Contact() {
  const t = useTranslations("contact");
  const tSite = useTranslations("site");

  return (
    <section id="contacto" className="relative bg-anthracite text-ink py-24 md:py-32">
      <div className="px-6 md:px-10">
        <div className="mono-cap text-ink/70 flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {t("eyebrow") || "Contact"}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-semibold text-ink leading-[1.05] tracking-[-0.025em] mb-16 md:mb-20"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          {t("title")}<span className="text-accent">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="bg-anthracite-soft border border-ink/10 rounded-3xl p-8 hover:border-ink/15 transition-colors block"
          >
            <div className="mono-cap text-ink/50 mb-4">{t("labels.email")}</div>
            <div className="font-sans font-semibold text-ink text-lg md:text-xl tracking-[-0.01em] break-all">{SITE_EMAIL}</div>
          </a>

          <a
            href={`tel:${SITE_PHONE.replace(/\s/g, "")}`}
            className="bg-anthracite-soft border border-ink/10 rounded-3xl p-8 hover:border-ink/15 transition-colors block"
          >
            <div className="mono-cap text-ink/50 mb-4">{t("labels.phone")}</div>
            <div className="font-sans font-semibold text-ink text-lg md:text-xl tracking-[-0.01em] tabular-nums">{SITE_PHONE}</div>
          </a>

          <div className="bg-anthracite-soft border border-ink/10 rounded-3xl p-8">
            <div className="mono-cap text-ink/50 mb-4">{t("labels.location")}</div>
            <div className="font-sans font-semibold text-ink text-lg md:text-xl tracking-[-0.01em] leading-tight">
              {tSite("address")}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="chip !bg-accent !text-paper !text-[13px] !py-3 !px-6 hover:!bg-ink hover:!text-paper transition-colors"
          >
            {t("cta")} <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
