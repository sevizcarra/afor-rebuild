"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const t = useTranslations("hero");
  const tSite = useTranslations("site");

  return (
    <section id="top" className="relative bg-paper pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Composición sutil de fondo: bloque calipso suave a la derecha + grid sutil */}
      <div aria-hidden="true" className="absolute right-0 top-32 hidden md:block">
        <div className="w-[420px] h-[420px] bg-accent-soft" style={{ borderRadius: "10px" }} />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-6 md:px-10">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="inline-flex items-center gap-2 text-small text-accent font-medium mb-6">
            <span className="block w-1.5 h-1.5 rounded-full bg-accent" />
            {t("expansion")}
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <motion.div
            initial="hidden" animate="visible" variants={fadeIn}
            transition={{ delay: 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-7"
          >
            <h1 className="font-sans font-medium text-display text-ink max-w-2xl">
              {t("lead")}
            </h1>
          </motion.div>

          <motion.div
            initial="hidden" animate="visible" variants={fadeIn}
            transition={{ delay: 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-5 space-y-6"
          >
            <p className="text-lead text-gray-700 max-w-md">
              {t("discipline")}.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#activos"
                className="inline-flex items-center gap-2 text-small font-medium bg-ink text-paper px-5 py-2.5 rounded-md hover:bg-accent transition-colors"
              >
                Ver activos →
              </a>
              <a
                href="#método"
                className="inline-flex items-center gap-2 text-small font-medium text-ink border border-gray-300 px-5 py-2.5 rounded-md hover:border-ink transition-colors"
              >
                Cómo trabajamos
              </a>
            </div>
          </motion.div>
        </div>

        {/* Tira de validación corporativa abajo */}
        <motion.div
          initial="hidden" animate="visible" variants={fadeIn}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          {[
            { kpi: "10+", label: "Años de experiencia técnica del equipo" },
            { kpi: "20+", label: "Facilities desarrollados en minería e industria" },
            { kpi: "BHP", label: "Cliente directo en faena Puerto Coloso" },
            { kpi: "BIM", label: "Coordinación multidisciplinaria con Revit" },
          ].map((it) => (
            <div key={it.label} className="border-l-2 border-accent pl-4">
              <div className="font-sans font-semibold text-h1 text-ink tabular">{it.kpi}</div>
              <div className="mt-2 text-small text-gray-500">{it.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
