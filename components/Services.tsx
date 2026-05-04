"use client";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicios" className="bg-off-white py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="accent-line" />
            <span className="eyebrow text-orange">{SERVICES.eyebrow}</span>
          </div>
          <h2
            className="font-heading font-medium text-navy-deep"
            style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: "1.1", letterSpacing: "-0.015em" }}
          >
            {SERVICES.title[0]}
            <br />
            {SERVICES.title[1]}
          </h2>
        </motion.div>

        <ul className="border-t border-navy-deep/10">
          {SERVICES.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
              className="group border-b border-navy-deep/10 transition-colors duration-300 hover:bg-green/5 cursor-pointer"
            >
              <div className="flex items-center gap-8 md:gap-12 py-8 md:py-10">
                <span className="font-mono text-body-sm text-navy-deep/35 group-hover:text-green transition-colors duration-300 w-12 tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="flex-1 font-heading font-normal text-navy-deep leading-tight"
                  style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
                >
                  {item}
                </h3>
                <span className="text-orange text-2xl font-light transition-transform duration-500 group-hover:translate-x-2">
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
