"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Icon from "./Icon";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const PRINCIPLES_IMAGES = [
  "/images/principios/principio-01-operacional.jpg",
  "/images/principios/principio-02-normativo.jpg",
  "/images/principios/principio-03-bim.jpg",
  "/images/principios/principio-04-integracion.jpg",
];

const ICONS = ["precision", "operation", "code", "integration"] as const;

export default function About() {
  const t = useTranslations("about");
  const tP = useTranslations("principles");
  const principles = [
    { n: "01", title: tP("p1Title"), body: tP("p1Body"), image: PRINCIPLES_IMAGES[0] },
    { n: "02", title: tP("p2Title"), body: tP("p2Body"), image: PRINCIPLES_IMAGES[1] },
    { n: "03", title: tP("p3Title"), body: tP("p3Body"), image: PRINCIPLES_IMAGES[2] },
    { n: "04", title: tP("p4Title"), body: tP("p4Body"), image: PRINCIPLES_IMAGES[3] },
  ];

  return (
    <section id="nosotros" className="bg-paper py-24 md:py-32">
      <div className="container-edge">
        {/* Banda KPIs Swiss-style con grilla 12 col + hairline */}
        <div className="grid grid-cols-12 gap-4 hairline-t pt-6 pb-12">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[10px] tabular uppercase tracking-[0.12em] text-gray-500">00 — Indicadores</div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { kpi: "10+", label: "Años · experiencia equipo", c: "accent" },
              { kpi: "20+", label: "Facilities desarrollados", c: "accent" },
              { kpi: "BHP", label: "Cliente directo · Coloso", c: "bhp" },
              { kpi: "BIM", label: "Coordinación Revit", c: "accent" },
            ].map((it) => (
              <div key={it.label} className="hairline-soft-t pt-4">
                <div className="flex items-baseline gap-2">
                  <span className={`block w-1.5 h-1.5 ${it.c === "bhp" ? "bg-bhp" : "bg-accent"}`} />
                  <div className="font-sans font-light text-h2 text-ink tabular">{it.kpi}</div>
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.08em] text-gray-500">{it.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Manifiesto: eyebrow + título + body sangrado */}
        <div className="grid grid-cols-12 gap-4 hairline-t pt-8 mt-12 md:mt-16">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[10px] tabular uppercase tracking-[0.12em] text-gray-500">01 — Posicionamiento</div>
          </div>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
            className="col-span-12 md:col-span-9 font-sans font-light text-h1 text-ink leading-tight"
          >
            {t("titleStart")}<span className="text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-10">
          <div className="col-span-12 md:col-start-4 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-body text-gray-700">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}>{t("p1")}</motion.p>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>{t("p2")}</motion.p>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn} transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>{t("p3")}</motion.p>
          </div>
        </div>

        {/* Principios — cards Swiss con número grande tabular */}
        <div className="grid grid-cols-12 gap-4 hairline-t pt-8 mt-24 md:mt-32">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[10px] tabular uppercase tracking-[0.12em] text-gray-500">02 — Principios</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {principles.map((p, i) => (
                <motion.article
                  key={p.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-bone mb-5">
                    <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center bg-paper/95 text-accent">
                      <Icon name={ICONS[i] as never} size={16} />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3 hairline-t pt-3">
                    <span className="font-sans font-light text-h2 text-bhp tabular leading-none">{p.n}</span>
                    <h3 className="font-sans font-medium text-h4 text-ink uppercase tracking-wide">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-small text-gray-700 leading-relaxed">{p.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
