"use client";
import { motion } from "framer-motion";
import { CASE_STUDY } from "@/lib/content";

export default function CaseStudy() {
  return (
    <section className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <span className="label text-accent">{CASE_STUDY.eyebrow}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Imagen 7/12 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src={CASE_STUDY.image}
                alt={CASE_STUDY.title}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Texto 5/12 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pt-4"
          >
            <div className="font-mono text-small text-accent tracking-wider mb-4">
              {CASE_STUDY.client} · {CASE_STUDY.year}
            </div>
            <h2 className="font-sans font-medium text-h2 text-ink mb-4">
              {CASE_STUDY.title}
            </h2>
            <p className="text-small text-gray-500 mb-8">{CASE_STUDY.category}</p>
            <p className="text-body text-gray-700 mb-12 leading-relaxed">{CASE_STUDY.body}</p>

            {/* Highlights en grid 2x2 */}
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/15 pt-8">
              {CASE_STUDY.highlights.map((h) => (
                <div key={h.label}>
                  <dt className="label text-gray-500 mb-2">{h.label}</dt>
                  <dd className="font-sans font-medium text-h4 text-ink">{h.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
