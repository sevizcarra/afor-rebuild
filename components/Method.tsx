"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Method() {
  const t = useTranslations("method");
  const steps = t.raw("steps") as { n: string; title: string; body: string }[];

  return (
    <section id="método" className="relative bg-paper text-ink py-24 md:py-32 px-8 md:px-12">
      <div className="grid grid-cols-12 gap-6 border-t border-ink pt-8">
        <div className="col-span-12 md:col-span-3">
          <div className="label text-gray-500 tabular">04 — Proceso</div>
        </div>
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="col-span-12 md:col-span-9 font-sans font-semibold text-display max-w-3xl"
        >
          {t("title")}
        </motion.h2>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-12 md:mt-16">
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-start-4 md:col-span-7 text-lead text-gray-700 max-w-2xl"
        >
          {t("body")}
        </motion.p>
      </div>

      <div className="mt-20 md:mt-24 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <div className="label text-gray-500 tabular">Fases del encargo</div>
        </div>
        <ol className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-10">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-ink pt-4"
            >
              <div className="label tabular text-copper">{s.n}</div>
              <h3 className="mt-3 font-sans font-semibold text-h2 leading-tight">{s.title}</h3>
              <p className="mt-3 text-small text-gray-700">{s.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
