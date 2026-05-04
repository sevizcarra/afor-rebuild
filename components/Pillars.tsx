"use client";
import { motion } from "framer-motion";
import { PILLARS } from "@/lib/content";

export default function Pillars() {
  return (
    <section className="bg-navy-deep py-32 md:py-44 border-t border-gray-line/50">
      <div className="container-edge">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-line/40">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-navy-deep p-10 md:p-14 relative transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-orange/60 transition-all duration-500 group-hover:bg-green group-hover:h-[2px]" />
              <div className="font-mono text-body-sm text-orange tracking-widest mb-10 transition-colors duration-300 group-hover:text-green">
                {p.n}
              </div>
              <h3 className="font-heading font-medium text-h4 text-off-white tracking-wide mb-6 leading-snug">
                {p.title}
              </h3>
              <p className="text-body-sm text-gray-text leading-relaxed font-light">
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
