"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Stripe() {
  const t = useTranslations("stripe");
  return (
    <section className="relative bg-paper py-24 md:py-32 overflow-hidden">
      <div className="container-edge">
        <div className="grid grid-cols-12 gap-6">
          {/* Columna izquierda: cruz + + eyebrow + título */}
          <div className="col-span-12 md:col-span-5">
            <div className="text-ink/15 font-thin leading-none mb-12" style={{ fontSize: "96px" }} aria-hidden="true">+</div>
            <div className="label text-gray-500 mb-5 tracking-[0.18em]">Propuesta de valor</div>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
              className="font-sans font-bold text-ink leading-[1.05]"
              style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-0.02em" }}
            >
              Ingeniería <span className="font-serif italic font-normal text-accent">integral</span> para facilities mineras.
            </motion.h2>
          </div>

          {/* 3 columnas con hairlines arriba */}
          <div className="col-span-12 md:col-span-7 md:pl-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                "En AFOR, su proyecto se desarrolla con el equipo directo. Sin intermediarios, sin transferencias internas.",
                "Abordamos cada facility desde una visión integrada: arquitectura, ingeniería, coordinación BIM y normativa, bajo una misma dirección técnica.",
                "Nuestro modelo garantiza continuidad técnica completa y compatibilidad con el sistema documental del mandante.",
              ].map((txt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="w-10 h-px bg-ink mb-5" />
                  <p className="text-small text-gray-700 leading-relaxed">{txt}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
