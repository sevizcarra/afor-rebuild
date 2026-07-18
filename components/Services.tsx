"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type Sub = { title: string; body: string };
type Area = { n: string; featured: boolean; title: string; tagline: string; subs: Sub[] };

export default function Services() {
  const t = useTranslations("services");
  const areas = t.raw("areas") as Area[];
  const transversal = t.raw("transversal") as string[];

  return (
    <section id="servicios" className="relative bg-anthracite text-ink pt-10 md:pt-14 pb-10 md:pb-14">
      <div className="px-6 md:px-10">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <div className="mono-cap text-ink/70 flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("eyebrow")}
          </div>
          <h2
            className="font-sans font-semibold text-ink leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {t("heading")}<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 text-ink/70 text-[15px] md:text-[16px] leading-[1.65] max-w-xl">
            {t("intro")}
          </p>
        </div>

        {/* Áreas */}
        <div>
          {areas.map((area) => (
            <motion.div
              key={area.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-t border-ink/10"
            >
              {/* Columna izquierda: número + título + tagline */}
              <div className="col-span-12 md:col-span-5 lg:col-span-4">
                <div
                  className={`font-mono tabular-nums text-[13px] tracking-[0.04em] mb-4 ${
                    area.featured ? "text-accent" : "text-ink/40"
                  }`}
                >
                  {area.n}
                </div>
                <h3
                  className="font-sans font-semibold text-ink leading-[1.08] tracking-[-0.015em]"
                  style={{ fontSize: "clamp(24px, 2.6vw, 36px)" }}
                >
                  {area.title}
                </h3>
                <p className="mt-4 text-ink/60 text-[14px] leading-[1.6] max-w-sm">
                  {area.tagline}
                </p>
                {area.featured && (
                  <a
                    href="#contacto"
                    className="chip mt-6 inline-flex !text-[12.5px] hover:!bg-accent hover:!text-paper transition-colors"
                  >
                    {t("cta")} <span aria-hidden>→</span>
                  </a>
                )}
              </div>

              {/* Columna derecha: subáreas */}
              <div className="col-span-12 md:col-span-7 lg:col-span-8">
                {area.subs.map((sub, j) => (
                  <div
                    key={j}
                    className={`grid grid-cols-12 gap-3 md:gap-6 py-5 md:py-6 ${
                      j > 0 ? "border-t border-ink/10" : "md:pt-1"
                    }`}
                  >
                    <div className="col-span-12 md:col-span-5">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono tabular-nums text-[11px] text-ink/35">
                          {area.n}.{j + 1}
                        </span>
                        <h4 className="font-sans font-semibold text-ink text-[15.5px] md:text-[16.5px] leading-tight tracking-[-0.01em]">
                          {sub.title}
                        </h4>
                      </div>
                    </div>
                    <p className="col-span-12 md:col-span-7 text-ink/60 text-[13px] leading-[1.65] md:pl-2">
                      {sub.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capacidades transversales */}
        <div className="border-t border-ink/10 pt-8 md:pt-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <div className="mono-cap text-ink/50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ink/30" />
                {t("transversalLabel")}
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-wrap gap-x-8 gap-y-3">
              {transversal.map((item, i) => (
                <span key={i} className="mono-cap text-ink/60 !text-[12px]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
