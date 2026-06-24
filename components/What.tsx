"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Icon from "./Icon";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ICONS = ["precision", "operation", "code", "integration"] as const;
const IMAGES = [
  "/images/principios/principio-01-operacional.jpg",
  "/images/principios/principio-02-normativo.jpg",
  "/images/principios/principio-03-bim.jpg",
  "/images/principios/principio-04-integracion.jpg",
];

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
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="card overflow-hidden flex flex-col"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={IMAGES[i]}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-3 left-3 w-9 h-9 flex items-center justify-center rounded-md bg-paper/90 text-accent backdrop-blur-sm">
                  <Icon name={ICONS[i] as never} size={18} />
                </div>
              </div>
              {/* Texto */}
              <div className="p-6 flex-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-small text-bhp font-medium tabular">{p.n}</span>
                  <h3 className="font-sans font-semibold text-h2 text-ink">{p.title}</h3>
                </div>
                <p className="mt-2 text-small text-gray-700 leading-relaxed">{p.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
