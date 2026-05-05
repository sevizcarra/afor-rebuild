"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { STATS } from "@/lib/content";

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, target, duration, motionValue]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

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
            className="mt-8 font-display text-accent leading-[0.9] tracking-tight font-medium tabular-nums"
            style={{ fontSize: "clamp(120px, 18vw, 240px)" }}
          >
            <Counter value={STATS.big.value} duration={2.4} />
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
              <span className="font-display text-h3 text-ink tabular-nums font-medium">
                <Counter value={s.value} duration={1.6 + i * 0.2} />
              </span>
              <span className="text-small text-gray-700 max-w-[220px] text-right leading-snug">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
