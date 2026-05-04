"use client";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/content";

const variant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="nosotros" className="bg-off-white py-32 md:py-44">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variant}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="accent-line" />
            <span className="eyebrow text-orange">{ABOUT.eyebrow}</span>
          </div>
          <h2
            className="font-heading font-medium text-navy-deep"
            style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: "1.1", letterSpacing: "-0.015em" }}
          >
            {ABOUT.title[0]}
            <br />
            {ABOUT.title[1]}
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variant}
          transition={{ delay: 0.15 }}
          className="lg:col-span-5 space-y-7 text-body text-navy-deep/75 font-light leading-relaxed"
        >
          {ABOUT.paragraphs.map((p, i) => (
            <p
              key={i}
              className={i === ABOUT.paragraphs.length - 1 ? "text-body-lg text-navy-deep font-normal" : ""}
            >
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
