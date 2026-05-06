"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FEATURED_PROJECTS } from "@/lib/content";
import clsx from "clsx";

const AUTO_ROTATE_MS = 3000;

export default function Projects() {
  const [[idx, dir], setPair] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const total = FEATURED_PROJECTS.length;
  const active = FEATURED_PROJECTS[idx];
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (newIdx: number) => {
    const wrapped = (newIdx + total) % total;
    let direction = wrapped > idx ? 1 : -1;
    if (idx === total - 1 && wrapped === 0) direction = 1;
    if (idx === 0 && wrapped === total - 1) direction = -1;
    setPair([wrapped, direction]);
  };

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => goTo(idx + 1), AUTO_ROTATE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, paused]);

  const handleManual = (newIdx: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    goTo(newIdx);
  };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section id="proyectos" className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20"
        >
          <div className="lg:col-span-7">
            <h2 className=" font-sans font-medium text-h1 text-ink">
              Más de 20 facilities ejecutadas desde 2017.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-8 text-body text-gray-700 max-w-md">
            Selección de proyectos representativos en gran minería e industria.
          </p>
        </motion.div>

        {/* Controles superiores */}
        <div className="relative border-t border-ink/15 pt-6 mb-12">
          <div className="flex items-center justify-between">
            <div className="font-mono text-small text-gray-500 tracking-wider tabular-nums">
              {String(idx + 1).padStart(2, "0")} <span className="text-gray-300">/ {String(total).padStart(2, "0")}</span>
              <span className="ml-6 text-ink hidden md:inline font-sans">{active.title}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleManual(idx - 1)}
                aria-label="Proyecto anterior"
                className="w-12 h-12 border border-ink/20 flex items-center justify-center text-ink hover:border-accent hover:text-accent transition-colors duration-300"
              >←</button>
              <button
                onClick={() => handleManual(idx + 1)}
                aria-label="Siguiente proyecto"
                className="w-12 h-12 border border-ink/20 flex items-center justify-center text-ink hover:border-accent hover:text-accent transition-colors duration-300"
              >→</button>
            </div>
          </div>

          {/* Barra de progreso del slide activo */}
          <div className="absolute left-0 right-0 top-0 h-px bg-ink/15 overflow-hidden">
            <motion.div
              key={`${idx}-${paused}`}
              initial={{ width: "0%" }}
              animate={{ width: paused ? "0%" : "100%" }}
              transition={{ duration: paused ? 0 : AUTO_ROTATE_MS / 1000, ease: "linear" }}
              className="h-px bg-accent"
            />
          </div>
        </div>

        {/* Card activo con slide horizontal */}
        <div
          className="relative overflow-hidden mb-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active.id}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  <img src={active.image} alt={active.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                </div>
              </div>

              <div className="lg:col-span-5 lg:pt-2">
                <div className="font-mono text-small text-accent tracking-wider mb-4">{active.client} · {active.year}</div>
                <h3 className="font-sans font-medium text-h2 text-ink mb-3">{active.title}</h3>
                <p className="text-small text-gray-500 mb-8">{active.category}</p>
                <p className="text-body text-gray-700 mb-12 leading-relaxed">{active.body}</p>

                <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/15 pt-8">
                  {active.highlights.map((h) => (
                    <div key={h.label}>
                      <dt className="label text-gray-500 mb-2">{h.label}</dt>
                      <dd className="font-sans font-medium text-h4 text-ink">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots inferiores */}
        <div className="flex justify-center gap-2 mb-32 md:mb-40">
          {FEATURED_PROJECTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleManual(i)}
              aria-label={`Ir a proyecto ${i + 1}`}
              className={clsx(
                "h-1 transition-all duration-500",
                i === idx ? "w-12 bg-accent" : "w-3 bg-ink/20 hover:bg-ink/40"
              )}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
