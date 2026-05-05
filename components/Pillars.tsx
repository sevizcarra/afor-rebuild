"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PILLARS } from "@/lib/content";

function PillarItem({ p, onView }: { p: typeof PILLARS[0]; onView: (n: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) onView(p.n);
  }, [inView, p.n, onView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[60vh] flex flex-col justify-center"
    >
      <div className="md:hidden font-display font-light text-paper/30 leading-none mb-6" style={{ fontSize: "clamp(72px, 22vw, 120px)" }}>
        {p.n}
      </div>
      <div className="h-px w-16 bg-paper/30 mb-8" />
      <h3 className="font-display font-medium text-paper mb-6 leading-tight" style={{ fontSize: "clamp(28px, 3.4vw, 48px)", letterSpacing: "-0.015em" }}>
        {p.title}
      </h3>
      <p className="text-lead text-paper/85 leading-relaxed max-w-lg">
        {p.body}
      </p>
    </motion.div>
  );
}

export default function Pillars() {
  const [activeN, setActiveN] = useState("01");

  return (
    <section className="py-32 md:py-44 overflow-hidden" style={{ background: "linear-gradient(135deg, #F2651A 0%, #E84E10 45%, #B83E0C 100%)" }}>
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-32 max-w-3xl"
        >
          <span className="label text-paper">Cómo trabajamos</span>
          <h2 className="mt-6 font-display font-medium text-paper" style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
            Cuatro principios.<br />Sin atajos.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Sticky number column - solo desktop */}
          <div className="hidden md:block md:col-span-5">
            <div className="sticky top-1/2 -translate-y-1/2">
              <motion.div
                key={activeN}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-light text-paper leading-none select-none"
                style={{ fontSize: "clamp(180px, 22vw, 360px)", letterSpacing: "-0.05em" }}
              >
                {activeN}
              </motion.div>
              <div className="mt-6 font-mono text-small text-paper/60 tracking-widest">
                {activeN} / {String(PILLARS.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Pillars scrolleables */}
          <div className="md:col-span-7 space-y-8 md:space-y-0">
            {PILLARS.map((p) => (
              <PillarItem key={p.n} p={p} onView={setActiveN} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
