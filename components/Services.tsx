"use client";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicios" className="bg-bone py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 md:mb-24"
        >
          <div className="lg:col-span-7">
            <span className="label text-accent">{SERVICES.eyebrow}</span>
            <h2 className="mt-6 font-sans font-medium text-h1 text-ink">
              {SERVICES.title}
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-8 text-body text-gray-700 max-w-md">
            Servicios técnicos integrados al equipo del proyecto, bajo los protocolos del mandante.
          </p>
        </motion.div>

        <ul className="border-t border-ink/15">
          {SERVICES.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-b border-ink/15 group cursor-default"
            >
              <div className="flex items-baseline gap-8 md:gap-12 py-7 md:py-8">
                <span className="font-mono text-small text-gray-500 w-10 tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex-1 font-sans font-normal text-ink text-h3 transition-colors duration-300 group-hover:text-accent">
                  {item}
                </h3>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
