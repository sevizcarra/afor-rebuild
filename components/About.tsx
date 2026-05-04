"use client";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/content";

const variant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="nosotros" className="bg-off-white py-28 md:py-36">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variant}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="accent-line" />
            <span className="eyebrow text-orange">{ABOUT.eyebrow}</span>
          </div>
          <h2 className="font-heading font-bold text-h2 text-navy-deep">
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
          className="lg:col-span-5 space-y-6 text-body text-navy-deep/80"
        >
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className={i === ABOUT.paragraphs.length - 1 ? "text-body-lg text-navy-deep font-medium" : ""}>
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
