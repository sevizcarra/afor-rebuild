"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type Sub = { title: string; body: string };
type Area = { n: string; featured: boolean; title: string; tagline: string; subs: Sub[] };

export default function Services() {
  const t = useTranslations("services");
  const areas = t.raw("areas") as Area[];
  const transversal = t.raw("transversal") as string[];

  return (
    <section id="servicios" className="relative bg-anthracite text-ink pt-14 md:pt-20 pb-14 md:pb-20">
      <div className="px-6 md:px-10">
        {/* Header: hairline dura + eyebrow numerado + intro a la derecha */}
        <div className="grid grid-cols-12 gap-6 pt-6 mb-14 md:mb-20 border-t border-ink">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink/60">
              03 — {t("eyebrow")}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h2
              className="font-sans font-semibold text-ink leading-[1.02] tracking-[-0.025em]"
              style={{ fontSize: "clamp(38px, 4.6vw, 68px)" }}
            >
              {t("heading")}<span className="text-accent">.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 flex flex-col justify-end">
            <p className="text-ink/60 text-[13.5px] leading-[1.7]">{t("intro")}</p>
          </div>
        </div>

        {/* Las 3 áreas lado a lado, separadas por hairlines verticales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-y border-ink">
          {areas.map((area, i) => (
            <motion.div
              key={area.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className={`flex flex-col py-10 lg:py-12 ${
                i > 0
                  ? "border-t lg:border-t-0 lg:border-l border-ink/15 lg:pl-10"
                  : ""
              } ${i < areas.length - 1 ? "lg:pr-10" : ""}`}
            >
              {/* Cabecera del área */}
              <div
                className={`font-mono tabular-nums text-[13px] tracking-[0.04em] mb-5 ${
                  area.featured ? "text-accent" : "text-ink/40"
                }`}
              >
                {area.n}
              </div>
              <h3
                className="font-sans font-semibold text-ink leading-[1.08] tracking-[-0.015em] mb-4"
                style={{ fontSize: "clamp(22px, 1.9vw, 28px)" }}
              >
                {area.title}
              </h3>
              <p className="text-ink/55 text-[13px] leading-[1.6] mb-8">{area.tagline}</p>

              {/* Subáreas */}
              <div className="flex-1">
                {area.subs.map((sub, j) => (
                  <div
                    key={j}
                    className={`py-4 ${j > 0 ? "border-t border-ink/10" : "border-t border-ink/10"}`}
                  >
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="font-mono tabular-nums text-[10.5px] text-ink/35">
                        {area.n}.{j + 1}
                      </span>
                      <h4 className="font-sans font-semibold text-ink text-[14.5px] leading-tight tracking-[-0.01em]">
                        {sub.title}
                      </h4>
                    </div>
                    <p className="text-ink/50 text-[12.5px] leading-[1.6] pl-[30px]">{sub.body}</p>
                  </div>
                ))}
              </div>

              {/* CTA solo en las áreas a potenciar */}
              {area.featured && (
                <div className="mt-8">
                  <a href="#contacto" className="chip">
                    {t("cta")} <span aria-hidden className="text-accent">→</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Capacidades transversales */}
        <div className="grid grid-cols-12 gap-6 pt-6 md:pt-8">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-ink/40">
              {t("transversalLabel")}
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 flex flex-wrap gap-x-10 gap-y-2">
            {transversal.map((item, i) => (
              <span key={i} className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink/60">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
