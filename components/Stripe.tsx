"use client";
import { motion } from "framer-motion";

export default function Stripe() {
  return (
    <section className="bg-accent py-20 md:py-28">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-label uppercase tracking-[0.18em] text-paper/70 mb-6">
            Trayectoria · 2017 — 2025
          </p>
          <h3 className="font-sans font-medium text-paper" style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
            +20 facilities ejecutadas para BHP, Codelco<br className="hidden md:block" /> e ingenierías Tier 1.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
