"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const SITE_EMAIL = "contacto@afor.cl";
const WHATSAPP_URL = "https://wa.me/56963501854?text=Hola%20AFOR%2C%20me%20interesa%20conversar%20sobre%20un%20proyecto";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contacto" className="relative bg-anthracite text-ink pt-14 md:pt-20 pb-24 md:pb-32">
      <div className="px-6 md:px-10">
        {/* Header consistente: hairline dura + eyebrow numerado */}
        <div className="grid grid-cols-12 gap-6 pt-6 mb-14 md:mb-20 border-t border-ink">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink/60">
              04 — {t("eyebrow")}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-semibold text-ink leading-[1.02] tracking-[-0.025em]"
              style={{ fontSize: "clamp(38px, 4.6vw, 68px)" }}
            >
              {t("title")}<span className="text-accent">.</span>
            </motion.h2>
            <p className="mt-6 text-ink/60 text-[14px] leading-[1.7] max-w-md">{t("body")}</p>
          </div>
        </div>

        {/* Solo íconos: dos accesos directos */}
        <div className="flex gap-px border border-ink w-fit">
          <a
            href={`mailto:${SITE_EMAIL}`}
            aria-label={t("labels.email")}
            title={t("labels.email")}
            className="group w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center gap-3 bg-anthracite hover:bg-ink transition-colors"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink group-hover:text-paper transition-colors"><rect x="2" y="4" width="20" height="16" rx="0" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink/50 group-hover:text-paper/70 transition-colors">
              {t("labels.email")}
            </span>
          </a>
          <span className="w-px bg-ink" aria-hidden />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("labels.whatsapp")}
            title={t("labels.whatsapp")}
            className="group w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center gap-3 bg-anthracite hover:bg-ink transition-colors"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-ink group-hover:text-paper transition-colors"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" /></svg>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink/50 group-hover:text-paper/70 transition-colors">
              {t("labels.whatsapp")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
