"use client";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

const PROJECT_IMAGES: Record<string, string> = {
  cho: "/images/projects/edificio-cho.jpg",
  enat: "/images/projects/facilities-enat.jpg",
  gom: "/images/projects/gom-enat.jpg",
  smh: "/images/projects/sala-control-smh-spence.jpg",
  sshh: "/images/projects/sshh-universidad.jpg",
  dti: "/images/projects/cubierta-dti.jpg",
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

export default function Projects() {
  const t = useTranslations("projects");
  const list = t.raw("list") as Project[];
  const [activeId, setActiveId] = useState<string | null>(null);
  const [closing, setClosing] = useState(false);
  const active = list.find((p) => p.id === activeId) || null;
  const activeIndex = active ? list.findIndex((p) => p.id === active.id) : -1;

  // Cierre simple: quita el layoutId antes de desmontar para evitar el morph reverso
  const close = () => {
    flushSync(() => setClosing(true));
    setActiveId(null);
  };

  // Bloquear scroll body cuando modal abierto + cerrar con ESC
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="proyectos" className="relative bg-anthracite text-ink pt-10 md:pt-14 pb-10 md:pb-14">
      <div className="px-6 md:px-10">
        {/* Header alineado a la izquierda */}
        <div className="mb-14 md:mb-20">
          <div className="mono-cap text-ink/60 flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("eyebrow")}
          </div>
          <h2
            className="font-sans font-semibold text-ink leading-[1.02] tracking-[-0.025em]"
            style={{ fontSize: "clamp(38px, 4.6vw, 68px)" }}
          >
            {t("heading")}<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Cards: click abre modal con transición layoutId */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {list.map((p, i) => (
            <motion.article
              key={p.id}
              layoutId={`card-${p.id}`}
              onClick={() => setActiveId(p.id)}
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden group aspect-[4/3] bg-anthracite-soft cursor-pointer"
            >
              <motion.img
                layoutId={`img-${p.id}`}
                src={PROJECT_IMAGES[p.id]}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-[transform,filter] duration-700 group-hover:scale-105"
                style={{ objectPosition: p.id === "gom" ? "50% 80%" : "50% 50%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">
                <div className="flex items-start justify-between gap-6">
                  <h3
                    className="font-sans font-semibold text-paper leading-[1.05] tracking-[-0.015em] max-w-2xl"
                    style={{ fontSize: "clamp(20px, 1.8vw, 26px)" }}
                  >
                    {p.title}
                  </h3>
                  <div className="mono-cap text-paper/70 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-paper/85 text-[12.5px] leading-[1.5] line-clamp-3">
                    {p.body}
                  </p>
                  <p className="text-paper/60 text-[11px]">
                    {p.client} · {p.year}
                  </p>
                </div>
              </div>

              {/* Hint de expansión */}
              <div className="absolute top-4 right-4 w-9 h-9 bg-paper/10 backdrop-blur-sm border border-paper/25 flex items-center justify-center text-paper opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></svg>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal expandido */}
      <AnimatePresence onExitComplete={() => setClosing(false)}>
        {active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={close}
            className="fixed inset-0 z-[80] bg-ink/70 backdrop-blur-md flex items-start md:items-center justify-center p-4 md:p-8 overflow-y-auto"
          >
            <motion.article
              layoutId={closing ? undefined : `card-${active.id}`}
              onClick={(e) => e.stopPropagation()}
              exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.16, ease: "easeOut" } }}
              className="relative w-full max-w-6xl bg-paper overflow-hidden shadow-2xl my-auto"
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-11 h-11 bg-paper/95 backdrop-blur-sm border border-ink/15 flex items-center justify-center text-ink hover:bg-ink hover:text-paper transition-colors shadow-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18" /><path d="M6 6l12 12" /></svg>
              </button>

              {/* Foto grande limpia (sin overlay ni gradiente) */}
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-anthracite-soft overflow-hidden">
                <motion.img
                  layoutId={closing ? undefined : `img-${active.id}`}
                  src={PROJECT_IMAGES[active.id]}
                  alt={active.title}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: active.id === "gom" ? "50% 80%" : "50% 50%" }}
                />
              </div>

              {/* Info ordenada: 2 columnas 8/4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-12"
              >
                <div className="grid grid-cols-12 gap-8 md:gap-10">
                  <div className="col-span-12 md:col-span-8">
                    <div className="mono-cap text-ink/50 mb-4">
                      {String(activeIndex + 1).padStart(2, "0")} — {active.category}
                    </div>
                    <h3
                      className="font-sans font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-6"
                      style={{ fontSize: "clamp(30px, 3.6vw, 48px)" }}
                    >
                      {active.title}
                    </h3>
                    <p className="text-ink/75 text-[15px] md:text-[16px] leading-[1.7] max-w-2xl">
                      {active.body}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-4 md:border-l md:border-ink/10 md:pl-10">
                    <div className="space-y-6">
                      <div>
                        <div className="mono-cap text-ink/50 mb-1.5">{t("modal.client")}</div>
                        <div className="text-ink text-[15px] leading-snug">{active.client}</div>
                      </div>
                      <div>
                        <div className="mono-cap text-ink/50 mb-1.5">{t("modal.year")}</div>
                        <div className="text-ink text-[15px] tabular-nums">{active.year}</div>
                      </div>
                      <div className="pt-6 space-y-4">
                        {active.highlights.map((h) => (
                          <div key={h.label} className="flex items-baseline justify-between gap-4">
                            <span className="mono-cap text-ink/50">{h.label}</span>
                            <span className="text-ink text-[13.5px] text-right">{h.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
