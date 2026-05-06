"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section id="servicios" className="bg-ink py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 md:mb-24"
        >
          <div className="lg:col-span-7">
            <h2 className="font-sans font-medium text-h1 text-paper">
              {t("titleStart")}<span className="text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-8 text-body text-paper/65 max-w-md">{t("subtitle")}</p>
        </motion.div>

        <ul className="border-t border-paper/15">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-b border-paper/15 group"
            >
              <div className="grid grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 items-baseline">
                <span className="col-span-2 md:col-span-1 font-sans text-small text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-10 md:col-span-5 font-sans font-medium text-paper text-h3 leading-snug transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="col-span-12 md:col-span-6 text-body text-paper/65 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
