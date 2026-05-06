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
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 md:mb-24"
        >
          <div className="lg:col-span-7">
            <h2 className="font-sans font-medium text-h1 text-paper">
              Disciplinas <span className="text-accent">técnicas</span> integradas.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-8 text-body text-paper/65 max-w-md">
            Servicios técnicos integrados al equipo del proyecto, bajo los protocolos del mandante.
          </p>
        </motion.div>

        {/* Lista vertical limpia */}
        <ul className="border-t border-paper/15">
          {SERVICES.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-b border-paper/15 group"
            >
              <div className="grid grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 items-baseline">
                <span className="col-span-2 md:col-span-1 font-sans text-small text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="col-span-10 md:col-span-5 font-sans font-medium text-paper text-h3 leading-snug transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="col-span-12 md:col-span-6 text-body text-paper/65 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
