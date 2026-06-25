"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const PRINCIPLES_IMAGES = [
  "/images/principios/principio-01-operacional.jpg",
  "/images/principios/principio-02-normativo.jpg",
  "/images/principios/principio-03-bim.jpg",
  "/images/principios/principio-04-integracion.jpg",
];

export default function About() {
  const t = useTranslations("about");
  const tP = useTranslations("principles");
  const principles = [
    { n: "01", title: tP("p1Title"), body: tP("p1Body"), tag: "OPERACIONAL", image: PRINCIPLES_IMAGES[0] },
    { n: "02", title: tP("p2Title"), body: tP("p2Body"), tag: "NORMATIVO", image: PRINCIPLES_IMAGES[1] },
    { n: "03", title: tP("p3Title"), body: tP("p3Body"), tag: "BIM · REVIT", image: PRINCIPLES_IMAGES[2] },
    { n: "04", title: tP("p4Title"), body: tP("p4Body"), tag: "INTEGRADO", image: PRINCIPLES_IMAGES[3] },
  ];

  return (
    <section id="nosotros" className="relative bg-paper py-24 md:py-32">
      <div className="container-edge">
        {/* Header NA-style */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <div className="text-ink/15 font-thin leading-none mb-12" style={{ fontSize: "96px" }} aria-hidden="true">+</div>
            <div className="label text-gray-500 mb-5 tracking-[0.18em]">Nosotros</div>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
              className="font-sans font-bold text-ink leading-[1.05]"
              style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-0.02em" }}
            >
              {t("titleStart")}<span className="font-serif italic font-normal text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
            </motion.h2>
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[t("p1"), t("p2"), t("p3")].map((txt, i) => (
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

        {/* Principios estilo NA: lista con número, título, body, tag outline a la derecha */}
        <div className="hairline-soft-t pt-2">
          {principles.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 gap-6 py-10 md:py-12 hairline-soft-b items-start group"
            >
              <div className="col-span-2 md:col-span-1 label text-gray-400 tabular pt-2">{p.n}</div>
              <h3 className="col-span-10 md:col-span-3 font-sans font-bold text-ink text-h3">
                {p.title}
              </h3>
              <p className="col-span-12 md:col-span-6 text-small text-gray-700 leading-relaxed">
                {p.body}
              </p>
              <div className="col-span-12 md:col-span-2 md:text-right">
                <span className="inline-block border border-gray-300 text-[10px] tabular tracking-[0.12em] uppercase text-gray-500 px-3 py-2 group-hover:border-accent group-hover:text-accent transition-colors">
                  {p.tag}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
