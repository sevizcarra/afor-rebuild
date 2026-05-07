"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { useTranslations } from "next-intl";
import clsx from "clsx";

const AUTO_ROTATE_MS = 3500;

const PROJECT_IMAGES: Record<string, string> = {
  cho: "/images/projects/edificio-cho.jpg",
  enat: "/images/projects/facilities-enat.jpg",
  gom: "/images/projects/gom-enat.jpg",
  yacas: "/images/projects/las-yacas.jpg",
  mecasfy: "/images/projects/santa-alejandra.jpg",
  gt: "/images/projects/gt-chile.jpg",
};

type Project = {
  id: string;
  client: string;
  year: string;
  title: string;
  category: string;
  body: string;
  highlights: { label: string; value: string }[];
};

function CountUp({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  return <span ref={ref}>{val}</span>;
}

function HighlightTitle({ text }: { text: string }) {
  const match = text.match(/^(\d+)(.*)$/);
  if (!match) return <>{text}</>;
  const n = parseInt(match[1], 10);
  const rest = match[2];
  return (
    <>
      <CountUp to={n} />
      {rest}
    </>
  );
}

export default function Projects() {
  const t = useTranslations("projects");
  const list = t.raw("list") as Project[];
  const total = list.length;
  const [[idx, dir], setPair] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const active = list[idx];
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (newIdx: number) => {
    const wrapped = (newIdx + total) % total;
    let direction = wrapped > idx ? 1 : -1;
    if (idx === total - 1 && wrapped === 0) direction = 1;
    if (idx === 0 && wrapped === total - 1) direction = -1;
    setPair([wrapped, direction]);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => goTo(idx + 1), AUTO_ROTATE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
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
      <div className="container-edge max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <h2 className="font-sans font-medium text-h1 text-ink">
            {t("titleStart")}<HighlightTitle text={t("titleHighlight")} />{t("titleEnd")}
          </h2>
          <p className="mt-6 text-body text-ink max-w-xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="relative mb-10">
          <div className="flex items-center justify-center gap-6 mb-4">
            <button
              onClick={() => handleManual(idx - 1)}
              aria-label={t("controls.previous")}
              className="w-10 h-10 flex items-center justify-center text-ink hover:opacity-50 transition-opacity duration-300"
            >←</button>
            <div className="font-mono text-small text-gray-500 tracking-wider tabular-nums">
              {String(idx + 1).padStart(2, "0")} <span className="text-gray-300">/ {String(total).padStart(2, "0")}</span>
            </div>
            <button
              onClick={() => handleManual(idx + 1)}
              aria-label={t("controls.next")}
              className="w-10 h-10 flex items-center justify-center text-ink hover:opacity-50 transition-opacity duration-300"
            >→</button>
          </div>
        </div>

        <div className="relative overflow-hidden mb-10" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active.id}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[16/10] overflow-hidden bg-gray-100 mx-auto max-w-3xl mb-10"
              >
                <img src={PROJECT_IMAGES[active.id]} alt={active.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              </motion.div>
              <div className="max-w-2xl mx-auto">
                <div className="text-small text-gray-500 tracking-wider mb-4 uppercase">{active.client} · {active.year}</div>
                <h3 className="font-sans font-medium text-h2 text-ink mb-3">{active.title}</h3>
                <p className="text-small text-gray-500 mb-8">{active.category}</p>
                <p className="text-body text-ink mb-12 leading-relaxed">{active.body}</p>

                <dl className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-md mx-auto">
                  {active.highlights.map((h) => (
                    <div key={h.label} className="text-center">
                      <dt className="label text-gray-500 mb-2">{h.label}</dt>
                      <dd className="font-sans font-medium text-h4 text-ink">{h.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2">
          {list.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleManual(i)}
              aria-label={`${i + 1}`}
              className={clsx(
                "h-1 transition-all duration-500",
                i === idx ? "w-10 bg-ink" : "w-2 bg-gray-300 hover:bg-gray-500"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
