"use client";
import { motion } from "framer-motion";
import { STATS } from "@/lib/content";

export default function StatHighlight() {
  return (
    <section className="bg-bone py-32 md:py-44 border-t border-gray-200">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <span className="label text-accent">Trayectoria</span>
          <div
            className="mt-8 font-display text-accent leading-[0.9] tracking-tight font-medium"
            style={{ fontSize: "clamp(120px, 18vw, 240px)" }}
          >
            {STATS.big.value}
          </div>
          <p className="mt-8 text-lead text-gray-700 max-w-md leading-relaxed">{STATS.big.caption}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-5 lg:pt-32 space-y-px"
        >
          {STATS.mini.map((s, i) => (
            <div key={i} className="border-t border-ink/15 last:border-b py-6 flex items-baseline justify-between">
              <span className="font-display text-h3 text-ink tabular-nums font-medium">{s.value}</span>
              <span className="text-small text-gray-700 max-w-[220px] text-right leading-snug">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
