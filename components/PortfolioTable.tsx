"use client";
import { motion } from "framer-motion";
import { PORTFOLIO } from "@/lib/content";

export default function PortfolioTable() {
  return (
    <section id="portafolio" className="bg-ink py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-24"
        >
          <span className="label text-accent">Trayectoria completa</span>
          <h2 className="mt-6 font-display font-medium text-paper" style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
            +20 facilities para gran<br />minería desde 2017.
          </h2>
        </motion.div>

        <div className="border-t border-paper/15">
          <div className="hidden md:grid grid-cols-[80px_1fr_280px] gap-8 py-4 border-b border-paper/15">
            <span className="label text-paper/40">Año</span>
            <span className="label text-paper/40">Proyecto</span>
            <span className="label text-paper/40">Cliente</span>
          </div>
          {PORTFOLIO.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-1 md:grid-cols-[80px_1fr_280px] gap-2 md:gap-8 py-5 border-b border-paper/15 transition-colors duration-500 hover:bg-paper/5 cursor-default overflow-hidden"
            >
              {/* Linea accent que aparece a la izq al hover */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-accent scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500" />
              <span className="font-mono text-small text-accent tabular-nums transition-transform duration-500 group-hover:translate-x-2">{row.year}</span>
              <span className="text-body text-paper transition-transform duration-500 group-hover:translate-x-2">{row.project}</span>
              <span className="text-small text-paper/55">{row.company}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
