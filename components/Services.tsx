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
        {/* Header alineado a la izquierda */}
        <div className="mb-14 md:mb-20">
          <div className="mono-cap text-ink/60 flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("eyebrow")}
          </div>
          <h2
            className="font-display font-semibold text-ink leading-[1.02] tracking-[-0.025em]"
            style={{ fontSize: "clamp(38px, 4.6vw, 68px)" }}
          >
            {t("heading")}<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 text-ink/60 text-[15px] leading-[1.7] max-w-xl">{t("intro")}</p>
        </div>

        {/* Las 3 áreas lado a lado, separadas solo por hairlines verticales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-14 lg:gap-y-0">
          {areas.map((area, i) => (
            <motion.div
              key={area.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className={`flex flex-col ${
                i > 0 ? "lg:border-l lg:border-ink/15 lg:pl-10" : ""
              } ${i < areas.length - 1 ? "lg:pr-10" : ""}`}
            >
              {/* Cabecera del área */}
              <div
                className={`font-display font-semibold tabular-nums text-[14px] mb-5 ${
                  area.featured ? "text-accent" : "text-ink/40"
                }`}
              >
                {area.n}
              </div>
              <h3
                className="font-display font-semibold text-ink leading-[1.08] tracking-[-0.015em] mb-4"
                style={{ fontSize: "clamp(22px, 1.9vw, 28px)" }}
              >
                {area.title}
              </h3>
              <p className="text-ink/55 text-[13.5px] leading-[1.65] mb-10">{area.tagline}</p>

              {/* Subáreas: sin separadores horizontales, solo ritmo de espaciado */}
              <div className="flex-1 space-y-7">
                {area.subs.map((sub, j) => (
                  <div key={j}>
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="font-sans tabular-nums text-[11.5px] text-ink/35">
                        {area.n}.{j + 1}
                      </span>
                      <h4 className="font-display font-semibold text-ink text-[15px] leading-tight tracking-[-0.01em]">
                        {sub.title}
                      </h4>
                    </div>
                    <p className="text-ink/50 text-[13px] leading-[1.65] pl-[34px]">{sub.body}</p>
                  </div>
                ))}
              </div>

              {/* CTA solo en las áreas a potenciar */}
              {area.featured && (
                <div className="mt-10">
                  <a href="#contacto" className="chip">
                    {t("cta")} <span aria-hidden className="text-accent">→</span>
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Capacidades transversales */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10">
          <div className="mono-cap text-ink/40 shrink-0">{t("transversalLabel")}</div>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {transversal.map((item, i) => (
              <span key={i} className="mono-cap text-ink/60">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
