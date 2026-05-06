"use client";
import { motion } from "framer-motion";
import { ABOUT, PRINCIPLES } from "@/lib/content";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="nosotros" className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-32 md:mb-40">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="lg:col-span-7 font-sans font-medium text-h1 text-ink"
          >
            {ABOUT.title}
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 text-body text-gray-700"
          >
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        </div>

        {/* Bloque inferior: 4 principios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 border-t border-ink/15 pt-12">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {p.image ? (
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200 mb-6">
                  <img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-gray-200 mb-6" aria-hidden="true" />
              )}
              <span className="font-mono text-small text-accent tracking-wider">{p.n}</span>
              <h3 className="mt-4 font-sans font-medium text-h3 text-ink">{p.title}</h3>
              <p className="mt-3 text-body text-gray-700 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
