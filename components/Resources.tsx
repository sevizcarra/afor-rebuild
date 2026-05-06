"use client";
import { motion } from "framer-motion";
import { RESOURCES } from "@/lib/content";

export default function Resources() {
  return (
    <section id="recursos" className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 md:mb-24"
        >
          <div className="lg:col-span-7">
            <span className="label text-accent">{RESOURCES.eyebrow}</span>
            <h2 className="mt-6 font-sans font-medium text-h1 text-ink">
              {RESOURCES.title}
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-ink/15 pt-12">
          {RESOURCES.items.map((r, i) => (
            <motion.a
              key={r.title}
              href={r.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group block"
            >
              <div className="font-mono text-small text-gray-500 mb-4 tracking-wider">{r.meta}</div>
              <h3 className="font-sans font-medium text-h3 text-ink mb-3 transition-colors duration-300 group-hover:text-accent">
                {r.title}
              </h3>
              <p className="text-body text-gray-700 mb-6 leading-relaxed">{r.description}</p>
              <span className="text-small text-ink font-medium border-b border-ink pb-1 transition-colors duration-300 group-hover:text-accent group-hover:border-accent">
                {r.cta} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
