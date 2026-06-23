"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Assets() {
  const t = useTranslations("assets");
  const list = t.raw("list") as { n: string; title: string; body: string }[];

  return (
    <section id="activos" className="relative bg-ink text-paper py-24 md:py-32 overflow-hidden">
      {/* Línea horizontal arriba */}
      <div className="absolute top-0 left-0 right-0 h-px bg-paper" />

      {/* Círculo cobrizo grande como contrapeso */}
      <div
        aria-hidden="true"
        className="absolute rounded-full bg-copper"
        style={{ width: "min(36vw, 480px)", height: "min(36vw, 480px)", top: "-12%", left: "-8%" }}
      />

      <div className="relative grid grid-cols-12 gap-6 px-6 md:px-10">
        <div className="col-span-12 md:col-span-3 flex items-start gap-3">
          <span className="block w-2 h-2 rounded-full bg-accent mt-1.5" aria-hidden="true" />
          <span className="label text-paper/60">{t("eyebrow")}</span>
        </div>
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="col-span-12 md:col-span-9 font-sans font-black text-h1 text-paper uppercase mt-8 md:mt-0"
        >
          {t("title")}
        </motion.h2>

        {/* Listado tipográfico */}
        <ul className="col-span-12 mt-16 md:mt-20 border-t border-paper/30">
          {list.map((item, i) => (
            <motion.li
              key={item.n}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 gap-6 py-8 border-b border-paper/30 group"
            >
              <span className="col-span-2 md:col-span-1 mono label text-accent pt-2">{item.n}</span>
              <h3 className="col-span-10 md:col-span-4 font-sans font-bold text-h2 text-paper uppercase tracking-tight group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="col-span-12 md:col-start-7 md:col-span-6 text-body text-paper/75 mt-2 md:mt-3">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
