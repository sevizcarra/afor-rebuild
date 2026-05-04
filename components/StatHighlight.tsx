"use client";
import { motion } from "framer-motion";
import { STATS } from "@/lib/content";

export default function StatHighlight() {
  return (
    <section className="bg-navy py-28 md:py-36">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-display text-orange leading-[0.85] tracking-tight" style={{ fontSize: "clamp(120px, 18vw, 240px)" }}>
            {STATS.big.value}
          </div>
          <p className="mt-6 text-body-lg text-off-white/85 max-w-md">
            {STATS.big.caption}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="space-y-px"
        >
          {STATS.mini.map((s, i) => (
            <div key={i} className="border-t border-green/40 last:border-b py-6 flex items-baseline gap-8">
              <span className="font-display text-5xl md:text-6xl text-off-white tabular-nums w-24">
                {s.value}
              </span>
              <span className="text-body text-gray-text uppercase tracking-wider font-mono text-body-sm">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
