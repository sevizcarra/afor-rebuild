"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <>
      {/* HERO con video de fondo */}
      <section id="top" className="relative min-h-[620px] h-[88vh] w-full overflow-hidden bg-ink">
        {/* Video full */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero/hero-poster.jpg"
            className="h-full w-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/55 via-ink/15 to-transparent" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-end pb-16 md:pb-20">
          <div className="w-full max-w-[1320px] mx-auto px-6 md:px-10">
            <motion.div
              initial="hidden" animate="visible" variants={fadeIn}
              className="max-w-2xl"
            >
              {/* Eyebrow con doble acento (calipso + naranjo BHP) */}
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-small font-medium text-accent tracking-wide">
                  {t("expansion")}
                </span>
                <span className="block w-px h-3 bg-paper/30" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5 text-small text-paper/80">
                  <span className="block w-1.5 h-1.5 rounded-full bg-bhp" aria-hidden="true" />
                  Cliente directo BHP
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-light text-paper leading-tight"
                style={{ fontSize: "clamp(24px, 2.4vw, 36px)", letterSpacing: "-0.015em", lineHeight: 1.2 }}
              >
                {t("lead")}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="#activos"
                  className="inline-flex items-center gap-2 text-small font-medium bg-accent text-ink px-5 py-2.5 rounded-md hover:bg-paper transition-colors"
                >
                  Ver activos →
                </a>
                <a
                  href="#método"
                  className="inline-flex items-center gap-2 text-small font-medium text-paper border border-paper/40 px-5 py-2.5 rounded-md hover:bg-paper/10 hover:border-paper transition-colors"
                >
                  Cómo trabajamos
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banda KPIs corporativos */}
      <section className="relative bg-paper border-b border-gray-200">
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { kpi: "10+", label: "Años de experiencia técnica del equipo", accent: "accent" },
              { kpi: "20+", label: "Facilities desarrollados en minería e industria", accent: "accent" },
              { kpi: "BHP", label: "Cliente directo en faena Puerto Coloso", accent: "bhp" },
              { kpi: "BIM", label: "Coordinación multidisciplinaria con Revit", accent: "accent" },
            ].map((it) => (
              <div key={it.label} className={`border-l-2 pl-4 ${it.accent === "bhp" ? "border-bhp" : "border-accent"}`}>
                <div className="font-sans font-semibold text-h1 text-ink tabular">{it.kpi}</div>
                <div className="mt-2 text-small text-gray-500">{it.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
