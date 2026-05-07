"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section id="servicios" className="bg-paper py-32 md:py-44">
      <div className="container-edge max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-24"
        >
          <h2 className="font-sans font-medium text-h1 text-ink">
            {t("titleStart")}{t("titleHighlight")}{t("titleEnd")}
          </h2>
          <p className="mt-6 text-body text-ink max-w-xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <ul className="space-y-20">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="font-mono text-small text-gray-500 tabular-nums tracking-wider">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-sans font-medium text-ink text-h3 leading-snug">
                {item.title}
              </h3>
              <p className="mt-4 text-body text-ink leading-relaxed max-w-xl mx-auto">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
