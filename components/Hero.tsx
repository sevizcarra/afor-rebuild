"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tSite = useTranslations("site");

  const dateLabel = new Intl.DateTimeFormat("es-CL", {
    year: "numeric", month: "short", day: "2-digit",
  }).format(new Date()).toUpperCase().replace(/\./g, "");

  return (
    <section
      id="top"
      className="relative min-h-screen w-full bg-paper text-ink flex flex-col px-8 md:px-12 pt-28 md:pt-32 pb-12"
    >
      {/* Banda meta superior */}
      <div className="grid grid-cols-12 gap-6 label text-gray-500 mb-32 md:mb-40">
        <div className="col-span-3">
          <div className="text-gray-400">N.º edición</div>
          <div className="text-ink mt-2 tabular">001 / 2025</div>
        </div>
        <div className="col-span-6">
          <div className="text-gray-400">Sección</div>
          <div className="text-ink mt-2">Identidad · Posicionamiento técnico</div>
        </div>
        <div className="col-span-3 text-right">
          <div className="text-gray-400">Fecha</div>
          <div className="text-ink mt-2 tabular">{dateLabel}</div>
        </div>
      </div>

      {/* Wordmark mega */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-12 gap-6 items-end mb-12 md:mb-16"
      >
        <h1 className="col-span-12 md:col-span-9 font-sans font-semibold text-ink text-mega">
          {tSite("brand")}
        </h1>
        <div className="col-span-12 md:col-span-3 text-small text-gray-700 leading-snug md:pb-4">
          <div className="label text-gray-400 mb-2">Expansión</div>
          {t("expansion")}
        </div>
      </motion.div>

      {/* Hairline */}
      <div className="h-px w-full bg-ink/15 mb-12" />

      {/* Lead + sidebar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-12 gap-6 mt-auto"
      >
        <p className="col-span-12 md:col-span-7 text-hero font-normal text-ink leading-snug max-w-2xl">
          {t("lead")}
        </p>
        <div className="col-span-12 md:col-span-4 md:col-start-9 text-small text-gray-700 leading-relaxed md:pt-1">
          <div className="label text-gray-400 mb-2">Disciplina</div>
          {t("discipline")}
          <div className="label text-gray-400 mt-6 mb-2">Sector</div>
          Gran minería · Industria pesada
        </div>
      </motion.div>

      {/* Detalle naranjo puntual abajo derecha */}
      <div className="absolute bottom-12 right-12 hidden md:flex items-center gap-2 label text-gray-500">
        <span className="block w-1.5 h-1.5 bg-copper" aria-hidden="true" />
        <span>Hacia abajo</span>
      </div>
    </section>
  );
}
