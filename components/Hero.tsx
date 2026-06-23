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
      className="relative min-h-screen w-full bg-copper text-paper flex flex-col px-8 md:px-12 pt-28 md:pt-32 pb-12"
    >
      {/* Banda meta superior — datos editoriales finos */}
      <div className="grid grid-cols-12 gap-6 label text-paper/60 mb-20 md:mb-24">
        <div className="col-span-3">
          <div className="text-paper/40">N.º edición</div>
          <div className="text-paper mt-1 tabular">001 / 2025</div>
        </div>
        <div className="col-span-6">
          <div className="text-paper/40">Sección</div>
          <div className="text-paper mt-1">Identidad · Posicionamiento técnico</div>
        </div>
        <div className="col-span-3 text-right">
          <div className="text-paper/40">Fecha</div>
          <div className="text-paper mt-1 tabular">{dateLabel}</div>
        </div>
      </div>

      {/* Wordmark mega + caption a la derecha */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-12 gap-6 items-end mb-10 md:mb-14"
      >
        <h1 className="col-span-12 md:col-span-9 font-sans font-semibold text-paper text-mega">
          {tSite("brand")}
        </h1>
        <div className="col-span-12 md:col-span-3 text-small text-paper/80 leading-snug md:pb-4">
          <div className="label text-paper/50 mb-2">Expansión</div>
          {t("expansion")}
        </div>
      </motion.div>

      {/* Línea hairline */}
      <div className="h-px w-full bg-paper/30 mb-10" />

      {/* Lead editorial */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-12 gap-6 mt-auto"
      >
        <p className="col-span-12 md:col-span-7 text-hero font-medium text-paper leading-tight max-w-2xl">
          {t("lead")}
        </p>
        <div className="col-span-12 md:col-span-4 md:col-start-9 text-small text-paper/80 leading-relaxed md:pt-2">
          <div className="label text-paper/50 mb-2">Disciplina</div>
          {t("discipline")}
          <div className="label text-paper/50 mt-6 mb-2">Sector</div>
          Gran minería · Industria pesada
        </div>
      </motion.div>
    </section>
  );
}
