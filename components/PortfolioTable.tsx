"use client";
import { motion } from "framer-motion";
import { PORTFOLIO } from "@/lib/content";

export default function PortfolioTable() {
  return (
    <section id="portafolio" className="bg-navy-deep py-32 md:py-44 border-t border-gray-line/50">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="accent-line-green" />
            <span className="eyebrow text-green">04 — TRAYECTORIA</span>
          </div>
          <h2
            className="font-heading font-medium text-off-white max-w-3xl"
            style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: "1.1", letterSpacing: "-0.015em" }}
          >
            +20 proyectos para gran minería desde 2017.
          </h2>
        </motion.div>

        <div className="border-t border-gray-line/40">
          <div className="hidden md:grid grid-cols-[100px_1fr_280px] gap-8 py-5 border-b border-gray-line/40">
            <span className="eyebrow text-gray-text">Año</span>
            <span className="eyebrow text-gray-text">Proyecto</span>
            <span className="eyebrow text-gray-text">Cliente</span>
          </div>
          {PORTFOLIO.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className="grid grid-cols-1 md:grid-cols-[100px_1fr_280px] gap-2 md:gap-8 py-6 border-b border-gray-line/40 transition-colors duration-300 hover:bg-green/5"
            >
              <span className="font-mono text-body-sm text-orange tracking-wider">{row.year}</span>
              <span className="text-body text-off-white/90 font-light">{row.project}</span>
              <span className="text-body-sm text-gray-text">{row.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
