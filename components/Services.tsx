"use client";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicios" className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20"
        >
          <div className="lg:col-span-7">
            <span className="label text-accent">{SERVICES.eyebrow}</span>
            <h2 className="mt-6 font-display font-medium text-h1 text-ink">
              {SERVICES.title[0]}<br />{SERVICES.title[1]}
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-12 text-body text-gray-700 max-w-md">
            Disciplinas técnicas integradas en cada proyecto. Sin overhead, sin diluir.
          </p>
        </motion.div>

        <ul className="border-t border-ink/12">
          {SERVICES.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
              className="group border-b border-ink/12 transition-colors duration-300"
            >
              <div className="flex items-center gap-8 md:gap-12 py-7 md:py-8">
                <span className="font-mono text-small text-gray-500 w-10 tracking-wider">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="flex-1 font-display font-normal text-ink leading-snug" style={{ fontSize: "clamp(20px, 2vw, 28px)" }}>
                  {item}
                </h3>
                <span className="text-gray-300 transition-all duration-500 group-hover:text-accent group-hover:translate-x-1 text-xl font-light">→</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
