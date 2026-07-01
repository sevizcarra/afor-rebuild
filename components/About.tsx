"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const t = useTranslations("about");
  const tP = useTranslations("principles");
  const tags = t.raw("tags") as string[];
  const side = t.raw("side") as string[];
  const principles = [
    { n: "01", title: tP("p1Title"), body: tP("p1Body"), tag: tags[0] },
    { n: "02", title: tP("p2Title"), body: tP("p2Body"), tag: tags[1] },
    { n: "03", title: tP("p3Title"), body: tP("p3Body"), tag: tags[2] },
    { n: "04", title: tP("p4Title"), body: tP("p4Body"), tag: tags[3] },
  ];

  return (
    <section id="nosotros" className="relative bg-anthracite text-paper py-24 md:py-32">
      <div className="px-6 md:px-10">
        {/* Header split estilo Introduction */}
        <div className="grid grid-cols-12 gap-6 mb-24 md:mb-32">
          <div className="col-span-12 md:col-span-5">
            <div className="mono-cap text-paper/70 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t("eyebrow") || "Nosotros"}
            </div>
          </div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
            className="col-span-12 md:col-span-7"
          >
            <p className="mono-cap text-paper/85 !text-[12.5px] !leading-[1.7] max-w-2xl">
              {t("side")[0]}
            </p>
            <p className="mt-6 mono-cap text-paper/60 !text-[12.5px] !leading-[1.7] max-w-2xl">
              {t("side")[1]} {t("side")[2]}
            </p>
            <button className="chip mt-10">
              Saber más <span className="text-paper/50">↗</span>
            </button>
          </motion.div>
        </div>

        {/* Title condensado gigante */}
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="font-sans font-semibold text-paper leading-[1.05] tracking-[-0.02em] mb-16 md:mb-24"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          {t("titleStart")}<span className="text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
        </motion.h2>

        {/* Principios como grid con chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-anthracite-soft border border-paper/10 rounded-3xl p-8 md:p-10 hover:border-paper/20 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="mono-cap text-accent">{p.n}</span>
                <span className="chip-outline">{p.tag}</span>
              </div>
              <h3 className="font-sans font-semibold text-paper text-xl md:text-2xl leading-tight tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="mt-4 mono-cap text-paper/60 !text-[12px] !leading-[1.7]">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
