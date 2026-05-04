"use client";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicios" className="bg-off-white py-28 md:py-36">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="accent-line" />
            <span className="eyebrow text-orange">{SERVICES.eyebrow}</span>
          </div>
          <h2 className="font-heading font-bold text-h2 text-navy-deep">
            {SERVICES.title[0]}
            <br />
            {SERVICES.title[1]}
          </h2>
        </motion.div>

        <ul className="border-t border-navy-deep/15">
          {SERVICES.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="group border-b border-navy-deep/15 transition-colors duration-200 hover:bg-green/10 cursor-pointer"
            >
              <div className="flex items-center gap-6 md:gap-10 py-6 md:py-8">
                <span className="font-mono text-body-sm text-navy-deep/40 group-hover:text-green transition-colors duration-200 w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="flex-1 font-heading font-medium text-h3 text-navy-deep">
                  {item}
                </h3>
                <span className="text-orange text-2xl md:text-3xl font-light transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
