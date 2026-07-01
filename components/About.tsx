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
  const tHero = useTranslations("hero");
  const tP = useTranslations("principles");
  const tags = t.raw("tags") as string[];
  const principles = [
    { n: "01", title: tP("p1Title"), body: tP("p1Body"), tag: tags[0], image: PRINCIPLES_IMAGES[0] },
    { n: "02", title: tP("p2Title"), body: tP("p2Body"), tag: tags[1], image: PRINCIPLES_IMAGES[1] },
    { n: "03", title: tP("p3Title"), body: tP("p3Body"), tag: tags[2], image: PRINCIPLES_IMAGES[2] },
    { n: "04", title: tP("p4Title"), body: tP("p4Body"), tag: tags[3], image: PRINCIPLES_IMAGES[3] },
  ];

  return (
    <section id="nosotros" className="relative bg-anthracite text-ink pt-24 md:pt-32 pb-10 md:pb-14">
      <div className="px-6 md:px-10">
        {/* Header Swiss: hairline + eyebrow tabular numerico + CTA opcional a la derecha */}
        <div className="grid grid-cols-12 gap-6 pt-8 mb-14 md:mb-20 border-t border-ink">
          <div className="col-span-6 md:col-span-3">
            <div className="flex items-center gap-2 text-[12px] tabular-nums tracking-[0.02em] text-ink/70">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              01 — {t("eyebrow")}
            </div>
          </div>
          <div className="col-span-6 md:col-span-9 flex justify-end">
            <button className="chip">
              {t("cta")} <span className="text-ink/50">↗</span>
            </button>
          </div>
        </div>

        {/* Titulo + summary en franja gris con hairline vertical: gesto Swiss que une los dos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ backgroundColor: "#FAFAF7" }}
          className="rounded-3xl mb-20 md:mb-24"
        >
          <div className="grid grid-cols-12 gap-0 items-stretch">
            <div className="col-span-12 md:col-span-7 p-8 md:p-12 md:pr-14 md:border-r border-ink/10">
              <h2
                className="font-sans font-semibold text-ink leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: "clamp(32px, 4vw, 54px)" }}
              >
                {t("titleStart")}<span className="text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 p-8 md:p-12 md:pl-14 flex flex-col justify-end border-t md:border-t-0 border-ink/10">
              <div className="text-[11px] tabular-nums tracking-[0.02em] text-ink/50 mb-3">
                Somos AFOR
              </div>
              <p className="text-ink/75 text-[15px] leading-[1.65] max-w-md">
                {tHero("summary")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Principios con foto de fondo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden border border-ink/10 aspect-square group hover:scale-[1.02] hover:shadow-2xl transition-transform"
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
