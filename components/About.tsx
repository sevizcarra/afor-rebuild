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
        {/* Header alineado a la izquierda */}
        <div className="mb-12 md:mb-16">
          <div className="mono-cap text-ink/60 flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("eyebrow")}
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="font-sans font-semibold text-ink leading-[1.02] tracking-[-0.025em] max-w-4xl"
            style={{ fontSize: "clamp(38px, 4.6vw, 68px)" }}
          >
            {t("titleStart")}<span className="font-serif italic font-normal text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
          </motion.h2>
        </div>

        {/* Párrafos en dos columnas, partiendo desde la izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 max-w-4xl mb-20 md:mb-28"
        >
          <p className="text-ink/70 text-[15px] leading-[1.75]">{t("p1")}</p>
          <p className="text-ink/55 text-[14px] leading-[1.75]">{t("p2")}</p>
        </motion.div>

        {/* Cifras: solo divisores verticales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="grid grid-cols-3 mb-20 md:mb-28"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-2 pr-6 ${i > 0 ? "pl-8 md:pl-12 border-l border-ink/15" : ""}`}
            >
              <div
                className="font-sans font-semibold tabular-nums text-ink tracking-[-0.03em] leading-none"
                style={{ fontSize: "clamp(44px, 5.5vw, 80px)" }}
              >
                {s.value}
              </div>
              <div className="text-ink/50 text-[13px] leading-snug mt-3 max-w-[180px]">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Principios: 4 columnas con hairline vertical a la izquierda */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-10">
          {principles.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className="border-l border-ink/15 pl-6 pr-6 lg:pr-10"
            >
              <div className="font-sans font-semibold tabular-nums text-[13px] text-accent mb-5">{p.n}</div>
              <h3 className="font-sans font-semibold text-ink text-[17px] md:text-[18px] leading-tight tracking-[-0.01em] mb-3">
                {p.title}
              </h3>
              <p className="text-ink/55 text-[13.5px] leading-[1.7]">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
