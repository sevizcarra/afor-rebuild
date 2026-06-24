"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Icon from "./Icon";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ICONS = ["precision", "operation", "code", "integration"] as const;

export default function What() {
  const t = useTranslations("what");
  const principles = t.raw("principles") as { n: string; title: string; body: string }[];

  return (
    <section id="qué" className="relative bg-bone py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="label text-accent mb-4">Posicionamiento</div>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
            className="font-sans font-medium text-hero text-ink"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lead text-gray-700"
          >
            {t("body")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="card p-7"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-accent-soft text-accent mb-5">
                <Icon name={ICONS[i] as never} size={22} />
              </div>
              <h3 className="font-sans font-semibold text-h2 text-ink">{p.title}</h3>
              <p className="mt-3 text-small text-gray-700 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
