"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function What() {
  const t = useTranslations("what");
  const principles = t.raw("principles") as { n: string; title: string; body: string }[];

  return (
    <section id="qué" className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden">
      {/* línea horizontal entre secciones */}
      <div className="absolute top-0 left-0 right-0 h-px bg-ink" />

      {/* Cuadrado calipso decorativo bottom-right como contrapeso */}
      <div
        aria-hidden="true"
        className="absolute bg-accent"
        style={{ width: "min(20vw, 240px)", height: "min(20vw, 240px)", bottom: 0, right: 0 }}
      />

      <div className="relative grid grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 md:col-span-3 flex items-start gap-3">
          <span className="block w-2 h-2 rounded-full bg-copper mt-1.5" aria-hidden="true" />
          <span className="label text-ink/60">{t("eyebrow")}</span>
        </div>

        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="col-span-12 md:col-span-9 font-sans font-black text-h1 text-ink uppercase mt-8 md:mt-0"
        >
          {t("title")}
        </motion.h2>

        <div className="col-span-12 md:col-start-4 md:col-span-7 mt-8">
          <p className="text-lead text-ink/80 font-light">{t("body")}</p>
        </div>

        {/* Línea horizontal de separación */}
        <div className="col-span-12 h-px bg-ink mt-20" />

        {/* Pilares: grilla 4 columnas, líneas finas verticales */}
        {principles.map((p, i) => (
          <motion.div
            key={p.n}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`col-span-12 md:col-span-3 mt-8 md:mt-12 md:pl-6 ${i > 0 ? "md:border-l md:border-ink/20" : ""}`}
          >
            <span className="mono label text-copper">{p.n}</span>
            <h3 className="mt-4 font-sans font-bold text-h3 text-ink uppercase">{p.title}</h3>
            <p className="mt-3 text-body text-ink/75">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
