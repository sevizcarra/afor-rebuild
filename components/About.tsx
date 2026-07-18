"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const t = useTranslations("about");
  const tP = useTranslations("principles");
  const stats = t.raw("stats") as { value: string; label: string }[];
  const principles = [
    { n: "01", title: tP("p1Title"), body: tP("p1Body") },
    { n: "02", title: tP("p2Title"), body: tP("p2Body") },
    { n: "03", title: tP("p3Title"), body: tP("p3Body") },
    { n: "04", title: tP("p4Title"), body: tP("p4Body") },
  ];

  return (
    <section id="nosotros" className="relative bg-anthracite text-ink pt-24 md:pt-32 pb-14 md:pb-20">
      <div className="px-6 md:px-10">
        {/* Header: hairline dura + eyebrow numerado */}
        <div className="grid grid-cols-12 gap-6 pt-6 mb-14 md:mb-20 border-t border-ink">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink/60">
              01 — {t("eyebrow")}
            </div>
          </div>
        </div>

        {/* Statement + cuerpo en dos columnas */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="col-span-12 lg:col-span-7 font-sans font-semibold text-ink leading-[1.02] tracking-[-0.025em]"
            style={{ fontSize: "clamp(38px, 4.6vw, 68px)" }}
          >
            {t("titleStart")}<span className="text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-end gap-5"
          >
            <p className="text-ink/70 text-[14.5px] leading-[1.7]">{t("p1")}</p>
            <p className="text-ink/55 text-[13.5px] leading-[1.7]">{t("p2")}</p>
          </motion.div>
        </div>

        {/* Banda de cifras: tabla dura con divisores verticales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-3 border-y border-ink mb-16 md:mb-24"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-8 md:py-10 pr-6 ${i > 0 ? "pl-6 md:pl-10 border-l border-ink/15" : ""}`}
            >
              <div
                className="font-mono tabular-nums text-ink tracking-[-0.03em] leading-none"
                style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
              >
                {s.value}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink/50 mt-4">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Principios: 4 columnas tipográficas, sin fotos, sin tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {principles.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="border-t border-ink pt-5"
            >
              <div className="font-mono tabular-nums text-[12px] text-accent mb-6">{p.n}</div>
              <h3 className="font-sans font-semibold text-ink text-[17px] md:text-[18px] leading-tight tracking-[-0.01em] mb-3">
                {p.title}
              </h3>
              <p className="text-ink/55 text-[13px] leading-[1.65]">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
