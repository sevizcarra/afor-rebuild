"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Icon from "./Icon";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ICONS = ["changeHouse", "controlRoom", "dining", "workshop", "warehouse"] as const;

export default function Assets() {
  const t = useTranslations("assets");
  const list = t.raw("list") as { n: string; title: string; body: string }[];

  return (
    <section id="activos" className="relative bg-paper py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="label text-accent mb-4">Catálogo</div>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
            className="font-sans font-medium text-hero text-ink"
          >
            {t("title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="card p-8 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-paper">
                  <Icon name={ICONS[i] as never} size={24} />
                </div>
                <span className="text-small text-gray-400 tabular font-medium">{item.n}</span>
              </div>
              <h3 className="font-sans font-semibold text-h1 text-ink">{item.title}</h3>
              <p className="mt-3 text-small text-gray-700 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
