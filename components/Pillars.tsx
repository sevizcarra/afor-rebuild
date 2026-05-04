"use client";
import { motion } from "framer-motion";
import { PILLARS } from "@/lib/content";

export default function Pillars() {
  return (
    <section className="bg-navy-deep py-28 md:py-36 border-t border-gray-line">
      <div className="container-edge">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-line">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-navy-deep p-10 md:p-12 relative border-t border-orange transition-colors duration-300 hover:border-green"
            >
              <div className="font-display text-7xl md:text-8xl text-orange leading-none mb-8 transition-colors duration-300 group-hover:text-green">
                {p.n}
              </div>
              <h3 className="font-heading font-bold text-h4 text-off-white tracking-wide mb-4">
                {p.title}
              </h3>
              <p className="text-body-sm text-gray-text leading-relaxed">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
