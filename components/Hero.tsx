"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const tSite = useTranslations("site");

  const date = new Intl.DateTimeFormat("es-CL", { year: "numeric", month: "short", day: "2-digit" })
    .format(new Date()).toUpperCase().replace(/\./g, "");

  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink flex flex-col justify-end">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay muted playsInline preload="auto" poster="/images/hero/hero-poster.jpg" className="h-full w-full object-cover">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/55 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/65 to-transparent pointer-events-none" />
      </div>

      {/* Metadata Swiss en las esquinas */}
      <div className="absolute top-24 left-0 right-0 z-10 container-edge pointer-events-none">
        <div className="grid grid-cols-12 gap-4 text-paper/80 text-[10px] tabular uppercase tracking-[0.12em]">
          <div className="col-span-3">
            <div className="text-paper/40">Índice</div>
            <div className="mt-1">N.º 001 / 2025</div>
          </div>
          <div className="col-span-6 text-center">
            <div className="text-paper/40">Sección</div>
            <div className="mt-1">Identidad · Posicionamiento</div>
          </div>
          <div className="col-span-3 text-right">
            <div className="text-paper/40">Fecha</div>
            <div className="mt-1">{date}</div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pb-16 md:pb-20 container-edge"
      >
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 lg:col-span-8" style={{ marginLeft: "-0.04em" }}>
            <span className="label text-accent mb-6 block">{t("eyebrow")}</span>
            <h1 className="font-brand text-paper text-hero tracking-[0.04em]">{tSite("brand")}.</h1>
            <p className="mt-8 max-w-2xl text-lead text-paper/85 font-light">{t("summary")}</p>
          </div>
          <div className="hidden lg:block col-span-4 text-right text-paper/70 text-small space-y-2">
            <div className="label text-paper/40">Disciplina</div>
            <div>Arquitectura · Ingeniería</div>
            <div>Coordinación BIM</div>
          </div>
        </div>
      </motion.div>

      {/* Indicador scroll abajo */}
      <div className="absolute bottom-6 left-0 right-0 z-10 container-edge pointer-events-none">
        <div className="grid grid-cols-12 gap-4 text-paper/50 text-[10px] tabular uppercase tracking-[0.12em]">
          <div className="col-span-6">↓ Scroll · 04 secciones</div>
          <div className="col-span-6 text-right">Las Condes · Santiago · CL</div>
        </div>
      </div>
    </section>
  );
}
