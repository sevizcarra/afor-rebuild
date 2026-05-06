"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURED_PROJECTS, PORTFOLIO } from "@/lib/content";
import clsx from "clsx";

export default function Projects() {
  const [[idx, dir], setPair] = useState<[number, number]>([0, 0]);
  const total = FEATURED_PROJECTS.length;
  const active = FEATURED_PROJECTS[idx];

  const goTo = (newIdx: number) => {
    const wrappedIdx = (newIdx + total) % total;
    const direction = wrappedIdx > idx ? 1 : -1;
    // Si saltamos por el wrap, mantener direccion intuitiva
    if (idx === total - 1 && wrappedIdx === 0) setPair([wrappedIdx, 1]);
    else if (idx === 0 && wrappedIdx === total - 1) setPair([wrappedIdx, -1]);
    else setPair([wrappedIdx, direction]);
  };

  const next = () => goTo(idx + 1);
  const prev = () => goTo(idx - 1);

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section id="proyectos" className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20"
        >
          <div className="lg:col-span-7">
            <span className="label text-accent">Proyectos</span>
            <h2 className="mt-6 font-sans font-medium text-h1 text-ink">
              Más de 20 facilities ejecutadas desde 2017.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-8 text-body text-gray-700 max-w-md">
            Selección de proyectos representativos en gran minería e industria.
          </p>
        </motion.div>

        {/* CONTROLES superiores: contador + flechas */}
        <div className="flex items-center justify-between border-t border-ink/15 pt-6 mb-12">
          <div className="font-mono text-small text-gray-500 tracking-wider tabular-nums">
            {String(idx + 1).padStart(2, "0")} <span className="text-gray-300">/ {String(total).padStart(2, "0")}</span>
            <span className="ml-6 text-ink hidden md:inline">{active.title}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Proyecto anterior"
              className="w-12 h-12 border border-ink/20 flex items-center justify-center text-ink hover:border-accent hover:text-accent transition-colors duration-300"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Siguiente proyecto"
              className="w-12 h-12 border border-ink/20 flex items-center justify-center text-ink hover:border-accent hover:text-accent transition-colors duration-300"
            >
              →
            </button>
          </div>
        </div>

        {/* CARD ACTIVO con slide horizontal */}
        <div className="relative overflow-hidden mb-12">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active.id}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 lg:pt-2">
                <div className="font-mono text-small text-accent tracking-wider mb-4">
                  {active.client} · {active.year}
                </div>
                <h3 className="font-sans font-medium text-h2 text-ink mb-3">{active.title}</h3>
                <p className="text-small text-gray-500 mb-8">{active.category}</p>
                <p className="text-body text-gray-700 mb-12 leading-relaxed">{active.body}</p>

                <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/15 pt-8">
                  {active.highlights.map((h) => (
                    <div key={h.label}>
                      <dt className="label text-gray-500 mb-2">{h.label}</dt>
                      <dd className="font-sans font-medium text-h4 text-ink">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicadores inferiores tipo dot */}
        <div className="flex justify-center gap-2 mb-32 md:mb-40">
          {FEATURED_PROJECTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => goTo(i)}
              aria-label={`Ir a proyecto ${i + 1}`}
              className={clsx(
                "h-1 transition-all duration-500",
                i === idx ? "w-12 bg-accent" : "w-3 bg-ink/20 hover:bg-ink/40"
              )}
            />
          ))}
        </div>

        {/* Tabla de trayectoria completa */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="label text-gray-500">Trayectoria completa</span>
        </motion.div>

        <div className="border-t border-ink/15">
          <div className="hidden md:grid grid-cols-[80px_1fr_280px] gap-8 py-4 border-b border-ink/15">
            <span className="label text-gray-500">Año</span>
            <span className="label text-gray-500">Proyecto</span>
            <span className="label text-gray-500">Cliente</span>
          </div>
          {PORTFOLIO.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_280px] gap-2 md:gap-8 py-5 border-b border-ink/15"
            >
              <span className="font-mono text-small text-gray-500 tabular-nums">{row.year}</span>
              <span className="text-body text-ink">{row.project}</span>
              <span className="text-small text-gray-500">{row.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
