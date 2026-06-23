"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function What() {
  const t = useTranslations("what");
  const principles = t.raw("principles") as { n: string; title: string; body: string }[];

  return (
    <section id="qué" className="relative bg-paper text-ink py-28 md:py-40 px-8 md:px-12">
      <div className="max-w-[1400px]">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="font-sans font-semibold text-display max-w-5xl"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 max-w-2xl text-lead text-gray-700"
        >
          {t("body")}
        </motion.p>

        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-small font-medium text-gray-500 mb-4">{p.n}</div>
              <h3 className="font-sans font-semibold text-h3">{p.title}</h3>
              <p className="mt-3 text-body text-gray-700">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
