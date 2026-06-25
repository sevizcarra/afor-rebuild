"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Icon from "./Icon";

const ICONS = ["masterplan", "build", "remodel", "interim", "controlroom", "respel", "review"] as const;

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section id="servicios" className="bg-ink py-24 md:py-32">
      <div className="container-edge">
        {/* Header Swiss con eyebrow + título */}
        <div className="grid grid-cols-12 gap-4 pt-8" style={{ borderTop: "1px solid rgba(250,250,247,0.95)" }}>
          <div className="col-span-12 md:col-span-3">
            <div className="text-[10px] tabular uppercase tracking-[0.12em] text-paper/50">03 — Servicios</div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-9 font-sans font-light text-h1 text-paper"
          >
            {t("titleStart")}<span className="text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
          </motion.h2>
        </div>

        <p className="grid grid-cols-12 gap-4 mt-8">
          <span className="col-span-12 md:col-start-4 md:col-span-7 text-body text-paper/65 max-w-md">{t("subtitle")}</span>
        </p>

        {/* Header de tabla Swiss */}
        <div className="grid grid-cols-12 gap-4 mt-20 md:mt-24 py-3 border-t border-b border-paper/15 text-[10px] tabular uppercase tracking-[0.12em] text-paper/40">
          <div className="col-span-1">N.º</div>
          <div className="col-span-1"></div>
          <div className="col-span-4">Servicio</div>
          <div className="col-span-6">Descripción técnica</div>
        </div>

        <ul>
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="grid grid-cols-12 gap-4 py-6 md:py-8 border-b border-paper/15 group items-baseline"
            >
              <div className="col-span-1 font-sans text-small text-bhp tabular pt-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-1 pt-1.5">
                <span className="w-8 h-8 flex items-center justify-center text-accent group-hover:text-paper transition-colors">
                  <Icon name={ICONS[i] as never} size={16} />
                </span>
              </div>
              <h3 className="col-span-4 font-sans font-medium text-paper text-h3 leading-snug uppercase tracking-wide transition-colors duration-300 group-hover:text-accent">
                {item.title}
              </h3>
              <p className="col-span-6 text-body text-paper/65 leading-relaxed">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
