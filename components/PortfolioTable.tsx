"use client";
import { motion } from "framer-motion";
import { PORTFOLIO } from "@/lib/content";

export default function PortfolioTable() {
  return (
    <section id="portafolio" className="bg-bone py-32 md:py-44 border-t border-gray-200">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="label text-accent">Trayectoria completa</span>
          <h2 className="mt-6 font-display font-medium text-h1 text-ink max-w-3xl">
            +20 proyectos para gran<br />minería desde 2017.
          </h2>
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
              transition={{ duration: 0.4, delay: i * 0.015 }}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_280px] gap-2 md:gap-8 py-5 border-b border-ink/10 transition-colors duration-300 hover:bg-paper/60"
            >
              <span className="font-mono text-small text-gray-500 tabular-nums">{row.year}</span>
              <span className="text-body text-ink">{row.project}</span>
              <span className="text-small text-gray-700">{row.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
