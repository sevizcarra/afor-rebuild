"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Method() {
  const t = useTranslations("method");
  const steps = t.raw("steps") as { n: string; title: string; body: string }[];

  return (
    <section id="método" className="relative bg-paper text-ink py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-ink" />

      {/* Línea diagonal Bauhaus-style (línea fina como protagonista) */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          width: "1px",
          height: "70%",
          top: "10%",
          left: "33.33%",
          background: "#2B2B2B",
        }}
      />

      <div className="relative grid grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 md:col-span-3 flex items-start gap-3">
          <span className="block w-2 h-2 bg-accent mt-1.5" aria-hidden="true" />
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

        {/* 4 pasos en grilla 2x2 con número gigante */}
        <div className="col-span-12 mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-2 border-t border-l border-ink/20">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeIn}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-r border-ink/20 p-8 md:p-12 relative min-h-[280px]"
            >
              <span className="absolute top-6 right-6 mono label text-copper">{s.n}</span>
              <div className="font-sans font-black text-ink/[0.04] leading-none select-none" style={{ fontSize: "clamp(120px, 14vw, 200px)" }}>
                {s.n}
              </div>
              <div className="relative -mt-20 md:-mt-24">
                <h3 className="font-sans font-bold text-h3 text-ink uppercase">{s.title}</h3>
                <p className="mt-3 text-body text-ink/75 max-w-sm">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
