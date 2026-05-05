"use client";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicios" className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 md:mb-28"
        >
          <div className="lg:col-span-7">
            <span className="label text-accent">{SERVICES.eyebrow}</span>
            <h2 className="mt-6 font-display font-medium text-ink" style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="group relative border-b border-ink/12 cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-bone -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              <div className="relative flex items-center gap-8 md:gap-12 py-8 md:py-10 px-2">
                <span className="font-mono text-small text-gray-500 w-12 tracking-wider transition-colors duration-500 group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex-1 font-display font-normal text-ink leading-snug transition-transform duration-500 group-hover:translate-x-2" style={{ fontSize: "clamp(20px, 2vw, 28px)" }}>
                  {item}
                </h3>
                <span className="text-gray-300 transition-all duration-500 group-hover:text-accent group-hover:translate-x-2 text-2xl font-light">→</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
