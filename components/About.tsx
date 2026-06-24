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
    <section id="nosotros" className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        {/* Banda KPIs corporativos */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-24 md:mb-32"
        >
          {[
            { kpi: "10+", label: "Años de experiencia técnica del equipo", c: "accent" },
            { kpi: "20+", label: "Facilities desarrollados", c: "accent" },
            { kpi: "BHP", label: "Cliente directo en faena Puerto Coloso", c: "bhp" },
            { kpi: "BIM", label: "Coordinación multidisciplinaria con Revit", c: "accent" },
          ].map((it) => (
            <div key={it.label} className={`border-l-2 pl-4 ${it.c === "bhp" ? "border-bhp" : "border-accent"}`}>
              <div className="font-sans font-semibold text-h1 text-ink tabular-nums">{it.kpi}</div>
              <div className="mt-2 text-small text-gray-500">{it.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Título + 3 párrafos (intacto en estructura) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 md:mb-32">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
            className="lg:col-span-7 font-sans font-light text-h1 text-ink"
          >
            {t("titleStart")}<span className="text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
          </motion.h2>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 text-body text-gray-700"
          >
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </motion.div>
        </div>

        {/* Principios como CARDS con iconos + imagen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="bg-paper border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute top-3 left-3 w-9 h-9 flex items-center justify-center rounded-sm bg-paper/90 text-accent backdrop-blur-sm">
                  <Icon name={ICONS[i] as never} size={18} />
                </div>
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-mono text-small text-bhp tabular-nums">{p.n}</span>
                  <h3 className="font-sans font-medium text-h3 text-ink">{p.title}</h3>
                </div>
                <p className="mt-2 text-body text-gray-700 leading-relaxed">{p.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
