"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
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
  const tags = t.raw("tags") as string[];
  const principles = [
    { n: "01", title: tP("p1Title"), body: tP("p1Body"), tag: tags[0], image: PRINCIPLES_IMAGES[0] },
    { n: "02", title: tP("p2Title"), body: tP("p2Body"), tag: tags[1], image: PRINCIPLES_IMAGES[1] },
    { n: "03", title: tP("p3Title"), body: tP("p3Body"), tag: tags[2], image: PRINCIPLES_IMAGES[2] },
    { n: "04", title: tP("p4Title"), body: tP("p4Body"), tag: tags[3], image: PRINCIPLES_IMAGES[3] },
  ];

  return (
    <section id="nosotros" className="relative bg-anthracite text-ink py-24 md:py-32">
      <div className="px-6 md:px-10">
        {/* Header: eyebrow + CTA Saber más */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-16 md:mb-20">
          <div className="mono-cap text-ink/70 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("eyebrow") || "Nosotros"}
          </div>
          <button className="chip">
            Saber más <span className="text-ink/50">↗</span>
          </button>
        </div>

        {/* Title */}
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="font-sans font-semibold text-ink leading-[1.05] tracking-[-0.02em] mb-16 md:mb-24 max-w-4xl"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          {t("titleStart")}<span className="text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
        </motion.h2>

        {/* Principios con foto de fondo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden border border-ink/10 aspect-square group"
            >
              {/* Foto de fondo */}
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay antracita + gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/10" />

              {/* Contenido */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="mono-cap text-accent">{p.n}</span>
                  <span className="chip-outline">{p.tag}</span>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-paper text-base md:text-lg leading-tight tracking-[-0.01em]">
                    {p.title}
                  </h3>
                  <p className="mt-2 mono-cap text-paper/75 !text-[10.5px] !leading-[1.5]">
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
