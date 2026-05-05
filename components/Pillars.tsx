"use client";
import { motion } from "framer-motion";
import { PILLARS } from "@/lib/content";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const numberVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay: i * 0.12 + 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.8, delay: i * 0.12 + 0.2, ease: [0.16, 1, 0.3, 1] },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 + 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Pillars() {
  return (
    <section className="bg-bone py-32 md:py-44 border-t border-gray-200 overflow-hidden">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 max-w-3xl"
        >
          <span className="label text-accent">Cómo trabajamos</span>
          <h2 className="mt-6 font-display font-medium text-ink" style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
            Cuatro principios.<br />Sin atajos.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-20 md:gap-y-28">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.n}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={i}
              variants={cardVariants}
              className="group relative cursor-default"
            >
              {/* Numero gigante Apple-style */}
              <motion.div
                variants={numberVariants}
                custom={i}
                className="font-display font-light text-ink/15 leading-none mb-6 transition-colors duration-700 group-hover:text-accent select-none"
                style={{ fontSize: "clamp(72px, 9vw, 140px)", letterSpacing: "-0.04em" }}
              >
                {p.n}
              </motion.div>

              {/* Linea separadora animada */}
              <motion.div
                variants={lineVariants}
                custom={i}
                className="h-px bg-ink/15 mb-8 origin-left transition-colors duration-700 group-hover:bg-accent"
              />

              {/* Titulo */}
              <motion.h3
                variants={textVariants}
                custom={i}
                className="font-display font-medium text-ink mb-6 leading-tight"
                style={{ fontSize: "clamp(24px, 2.4vw, 36px)", letterSpacing: "-0.015em" }}
              >
                {p.title}
              </motion.h3>

              {/* Body */}
              <motion.p
                variants={textVariants}
                custom={i}
                transition={{ delay: i * 0.12 + 0.45 }}
                className="text-body text-gray-700 leading-relaxed max-w-md"
              >
                {p.body}
              </motion.p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
