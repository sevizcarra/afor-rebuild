"use client";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/content";

const v = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };

export default function About() {
  return (
    <section id="nosotros" className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={v}
          className="mb-16 md:mb-20 max-w-md"
        >
          <span className="label text-accent">{ABOUT.eyebrow}</span>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={v}
            className="lg:col-span-7 font-display font-medium text-h1 text-accent"
          >
            No contamos horas.<br />Aplicamos <span className="font-serif italic font-normal">criterio técnico</span>.
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={v}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 space-y-6 text-body text-ink/80 font-normal leading-relaxed"
          >
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className={i === ABOUT.paragraphs.length - 1 ? "text-lead text-ink" : ""}>{p}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
