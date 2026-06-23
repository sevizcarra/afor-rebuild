"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="relative min-h-screen w-full bg-ink overflow-hidden pt-14"
    >
      {/* grilla visible en background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-12 px-6 md:px-10">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className="border-r border-paper/[0.04] h-full" />
          ))}
        </div>
      </div>

      {/* Formas geométricas primitivas — composición asimétrica */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* círculo calipso top right */}
        <div
          className="absolute rounded-full bg-accent"
          style={{ width: "min(28vw, 360px)", height: "min(28vw, 360px)", top: "12%", right: "8%" }}
        />
        {/* cuadrado naranjo cobrizo */}
        <div
          className="absolute bg-copper"
          style={{ width: "min(11vw, 140px)", height: "min(11vw, 140px)", bottom: "14%", left: "62%" }}
        />
        {/* línea fina horizontal */}
        <div
          className="absolute bg-paper/40"
          style={{ height: "1px", width: "30%", top: "32%", left: "0" }}
        />
        {/* línea fina vertical */}
        <div
          className="absolute bg-paper/40"
          style={{ width: "1px", height: "26%", top: "52%", left: "44%" }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 grid grid-cols-12 gap-6 px-6 md:px-10 py-20 md:py-28 min-h-[calc(100vh-3.5rem)]">
        {/* Eyebrow superior */}
        <div className="col-span-12 md:col-span-3 flex items-start gap-3">
          <span className="block w-3 h-3 rounded-full bg-copper mt-2" aria-hidden="true" />
          <span className="label text-paper/70">{t("eyebrow")}</span>
        </div>
        <div className="col-span-12 md:col-span-5 mono label text-paper/50 md:text-right">
          {t("tag")}
        </div>
        <div className="col-span-12 md:col-span-4 mono label text-paper/50 md:text-right">
          {t("discipline")}
        </div>

        {/* Wordmark gigante */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 mt-16 md:mt-24"
        >
          <h1 className="font-sans font-black text-paper text-display uppercase">
            {t("name")}
          </h1>
        </motion.div>

        {/* Expansion debajo del wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-span-7 mt-8"
        >
          <p className="font-sans font-medium text-h2 text-accent uppercase">
            {t("expansion")}
          </p>
        </motion.div>

        {/* Lead a la derecha, contrapeso */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-start-7 md:col-span-6 mt-12 md:mt-20"
        >
          <p className="text-lead text-paper font-light">{t("lead")}</p>
        </motion.div>
      </div>
    </section>
  );
}
