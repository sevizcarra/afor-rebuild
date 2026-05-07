"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const t = useTranslations("about");
  const tP = useTranslations("principles");
  const principles = [
    { n: "01", title: tP("p1Title"), body: tP("p1Body") },
    { n: "02", title: tP("p2Title"), body: tP("p2Body") },
    { n: "03", title: tP("p3Title"), body: tP("p3Body") },
    { n: "04", title: tP("p4Title"), body: tP("p4Body") },
  ];

  return (
    <section id="nosotros" className="bg-paper py-32 md:py-44">
      <div className="container-edge max-w-5xl mx-auto text-center">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="font-sans font-medium text-h1 text-ink"
        >
          {t("titleStart")}{t("titleHighlight")}{t("titleEnd")}
        </motion.h2>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 mx-auto max-w-2xl space-y-6 text-body text-ink"
        >
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 max-w-3xl mx-auto mt-32">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="font-mono text-small text-gray-500 tracking-wider">{p.n}</span>
              <h3 className="mt-4 font-sans font-medium text-h3 text-ink">{p.title}</h3>
              <p className="mt-3 text-body text-ink leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
