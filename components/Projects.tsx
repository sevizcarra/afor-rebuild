"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURED_PROJECTS, PORTFOLIO } from "@/lib/content";
import clsx from "clsx";

export default function Projects() {
  const [idx, setIdx] = useState(0);
  const active = FEATURED_PROJECTS[idx];

  return (
    <section id="proyectos" className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 md:mb-24"
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

        {/* CARRUSEL — selector de proyectos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="border-t border-ink/15 mb-12"
        >
          <div className="overflow-x-auto -mx-6 md:-mx-10 lg:-mx-20 px-6 md:px-10 lg:px-20 scrollbar-hide">
            <ul className="flex gap-1 md:gap-2 min-w-max">
              {FEATURED_PROJECTS.map((p, i) => (
                <li key={p.id}>
                  <button
                    onClick={() => setIdx(i)}
                    className={clsx(
                      "flex flex-col items-start gap-2 py-5 px-4 md:px-6 transition-colors duration-300 border-t-2 -mt-px relative whitespace-nowrap",
                      i === idx
                        ? "border-accent text-ink"
                        : "border-transparent text-gray-500 hover:text-ink"
                    )}
                  >
                    <span className="font-mono text-label tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-small font-medium">
                      {p.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CARD del proyecto activo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-32 md:mb-40"
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
