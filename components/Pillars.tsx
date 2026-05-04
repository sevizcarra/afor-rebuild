"use client";
import { motion } from "framer-motion";
import { PILLARS } from "@/lib/content";

export default function Pillars() {
  return (
    <section className="bg-bone py-32 md:py-44 border-t border-gray-200">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <span className="label text-accent">Cómo trabajamos</span>
          <h2 className="mt-6 font-display font-medium text-h2 text-ink">
            Cuatro principios.<br />Sin atajos.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-ink/15 pt-8"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-small text-gray-500 tracking-wider">{p.n}</span>
              </div>
              <h3 className="font-display font-medium text-h3 text-ink mb-5 leading-snug">{p.title}</h3>
              <p className="text-body text-gray-700 leading-relaxed max-w-md">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
