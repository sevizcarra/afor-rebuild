"use client";
import { motion } from "framer-motion";
import { STATS } from "@/lib/content";

export default function StatHighlight() {
  return (
    <section className="bg-navy py-32 md:py-44">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="font-display text-orange leading-[0.85] tracking-tight"
            style={{ fontSize: "clamp(110px, 16vw, 220px)" }}
          >
            {STATS.big.value}
          </div>
          <p className="mt-8 text-body-lg text-off-white/80 max-w-md font-light leading-relaxed">
            {STATS.big.caption}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="space-y-px"
        >
          {STATS.mini.map((s, i) => (
            <div
              key={i}
              className="border-t border-green/30 last:border-b py-8 flex items-baseline gap-10"
            >
              <span className="font-display text-5xl text-off-white tabular-nums w-24">
                {s.value}
              </span>
              <span className="text-body-sm text-gray-text uppercase tracking-widest font-mono leading-relaxed">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
