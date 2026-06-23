"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Assets() {
  const t = useTranslations("assets");
  const list = t.raw("list") as { n: string; title: string; body: string }[];

  return (
    <section id="activos" className="relative bg-paper text-ink py-24 md:py-32 px-8 md:px-12">
      <div className="grid grid-cols-12 gap-6 border-t border-ink pt-8">
        <div className="col-span-12 md:col-span-3">
          <div className="label text-gray-500 tabular">03 — Catálogo</div>
        </div>
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="col-span-12 md:col-span-9 font-sans font-semibold text-display max-w-3xl"
        >
          {t("title")}
        </motion.h2>
      </div>

      {/* Header de tabla editorial */}
      <div className="mt-16 md:mt-20 grid grid-cols-12 gap-6 py-4 border-b border-ink label text-gray-500 tabular">
        <div className="col-span-1">N.º</div>
        <div className="col-span-4">Categoría</div>
        <div className="col-span-6">Descripción técnica</div>
        <div className="col-span-1 text-right">Cantidad</div>
      </div>

      <ul>
        {list.map((item, i) => (
          <motion.li
            key={item.n}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-12 gap-6 py-7 md:py-8 border-b border-gray-200 group hover:bg-gray-100/50 transition-colors"
          >
            <div className="col-span-1 label tabular text-copper pt-2">{item.n}</div>
            <div className="col-span-4">
              <h3 className="font-sans font-semibold text-h1 leading-tight">{item.title}</h3>
            </div>
            <p className="col-span-6 text-body text-gray-700 self-center max-w-lg">
              {item.body}
            </p>
            <div className="col-span-1 text-right text-small text-gray-500 tabular self-center">
              {String(i + 1).padStart(2, "0")} / 05
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
