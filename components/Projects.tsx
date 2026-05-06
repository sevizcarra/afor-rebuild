"use client";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS, PORTFOLIO } from "@/lib/content";

export default function Projects() {
  return (
    <section id="proyectos" className="bg-bone py-32 md:py-44">
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
            Selección de proyectos en gran minería e industria para BHP, Codelco e ingenierías Tier 1.
          </p>
        </motion.div>

        {/* Grid de 5 destacados con foto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-32 md:mb-40">
          {FEATURED_PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-default"
            >
              <div className="relative overflow-hidden bg-gray-200 aspect-[4/5] mb-6">
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="font-mono text-small text-accent mb-2 tracking-wider">{p.eyebrow}</div>
              <h3 className="font-sans font-medium text-h4 text-ink mb-2">{p.title}</h3>
              <p className="text-small text-gray-500">{p.caption}</p>
            </motion.article>
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
