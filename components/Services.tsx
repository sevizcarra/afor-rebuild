"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const TAGS = [
  "MASTER PLAN",
  "EDIFICACIÓN",
  "RECINTOS TÉCNICOS",
  "INGENIERÍA INTERIM",
  "OPERACIÓN",
  "RESPEL",
  "REVISIÓN",
];

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; body: string }[];

  return (
    <section id="servicios" className="relative bg-bone py-24 md:py-32">
      <div className="container-edge">
        {/* Header NA-style */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-8">
            <div className="label text-gray-500 mb-5 tracking-[0.18em]">Áreas de práctica</div>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
              className="font-sans font-bold text-ink leading-[1.05]"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.025em" }}
            >
              Servicios <span className="font-serif italic font-normal text-accent">especializados</span>
            </motion.h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <div className="text-ink/15 font-thin leading-none" style={{ fontSize: "96px" }} aria-hidden="true">+</div>
          </div>
        </div>

        {/* Lista de servicios estilo NA */}
        <div className="hairline-t pt-2">
          {items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 gap-6 py-8 md:py-10 hairline-soft-b items-start group"
            >
              <div className="col-span-2 md:col-span-1 label text-gray-400 tabular pt-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="col-span-10 md:col-span-3 font-sans font-bold text-ink text-h3 leading-snug group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="col-span-12 md:col-span-6 text-small text-gray-700 leading-relaxed">
                {item.body}
              </p>
              <div className="col-span-12 md:col-span-2 md:text-right">
                <span className="inline-block border border-gray-300 text-[10px] tabular tracking-[0.12em] uppercase text-gray-500 px-3 py-2 group-hover:border-accent group-hover:text-accent transition-colors">
                  {TAGS[i] || "AFOR"}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
