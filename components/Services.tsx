"use client";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicios" className="bg-ink py-32 md:py-44">
      <div className="container-edge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24 md:mb-32"
        >
          <div className="lg:col-span-7">
            <span className="label text-accent">{SERVICES.eyebrow}</span>
            <h2 className="mt-6 font-sans font-medium text-h1 text-paper">
              {SERVICES.title}
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-8 text-body text-paper/65 max-w-md">
            Servicios técnicos integrados al equipo del proyecto, bajo los protocolos del mandante.
          </p>
        </motion.div>

        {/* Grid de servicios — 2 columnas en desktop con respiro generoso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16 md:gap-y-20">
          {SERVICES.items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative pt-8"
            >
              {/* Linea superior — base + accent que crece al hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-paper/15">
                <div className="absolute top-0 left-0 h-px w-12 bg-accent transition-all duration-700 ease-out group-hover:w-full" />
              </div>

              {/* Numero arriba, en accent, mono */}
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-small text-accent tracking-wider">
                  {String(i + 1).padStart(2, "0")} <span className="text-paper/30">/ {String(SERVICES.items.length).padStart(2, "0")}</span>
                </span>
                <span className="text-paper/30 group-hover:text-accent transition-colors duration-500 text-xl font-light">+</span>
              </div>

              {/* Titulo */}
              <h3
                className="font-sans font-medium text-paper mb-5 leading-tight"
                style={{ fontSize: "clamp(24px, 2.4vw, 34px)", letterSpacing: "-0.015em" }}
              >
                {item.title}
              </h3>

              {/* Body */}
              <p className="text-body text-paper/65 leading-relaxed max-w-md">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
