"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const SITE_EMAIL = "contacto@afor.cl";
const SITE_PHONE = "+56 9 6350 1854";
const WHATSAPP_URL = "https://wa.me/56963501854?text=Hola%20AFOR%2C%20me%20interesa%20conversar%20sobre%20un%20proyecto";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contacto" className="relative bg-anthracite text-ink pt-10 md:pt-14 pb-24 md:pb-32">
      <div className="px-6 md:px-10">
        <div className="mono-cap text-ink/70 flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {t("eyebrow")}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="bg-anthracite-soft border border-ink/10 rounded-xl p-8 hover:border-accent/40 transition-colors block group"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center text-ink group-hover:bg-accent group-hover:border-accent group-hover:text-paper transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </span>
              <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </div>
            <div className="mono-cap text-ink/50 mb-2">{t("labels.email")}</div>
            <div className="font-sans font-semibold text-ink text-lg md:text-xl tracking-[-0.01em] break-all">{SITE_EMAIL}</div>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-anthracite-soft border border-ink/10 rounded-xl p-8 hover:border-accent/40 transition-colors block group"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center text-ink group-hover:bg-accent group-hover:border-accent group-hover:text-paper transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" /></svg>
              </span>
              <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </div>
            <div className="mono-cap text-ink/50 mb-2">{t("labels.whatsapp")}</div>
            <div className="font-sans font-semibold text-ink text-lg md:text-xl tracking-[-0.01em] tabular-nums">{SITE_PHONE}</div>
          </a>
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
