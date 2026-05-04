"use client";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FEATURED_PROJECTS } from "@/lib/content";

const spanClass = (span: string) => {
  switch (span) {
    case "wide":
      return "md:col-span-2 aspect-[16/10]";
    case "tall":
      return "md:row-span-2 aspect-[3/4]";
    default:
      return "aspect-[4/3]";
  }
};

export default function FeaturedProjects() {
  return (
    <section id="proyectos" className="bg-off-white py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20"
        >
          <div>
            <div className="flex items-center gap-4 mb-10">
              <span className="accent-line" />
              <span className="eyebrow text-orange">03 — PROYECTOS DESTACADOS</span>
            </div>
            <h2
              className="font-heading font-medium text-navy-deep"
              style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: "1.1", letterSpacing: "-0.015em" }}
            >
              Procesos.<br />No catálogo.
            </h2>
          </div>
          <p className="max-w-md text-body text-navy-deep/65 font-light">
            Una selección representativa. Para BHP, Codelco e ingenierías Tier 1.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 auto-rows-fr">
          {FEATURED_PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={clsx(
                "group relative overflow-hidden bg-navy-deep cursor-pointer",
                spanClass(p.span)
              )}
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/30 to-transparent transition-opacity duration-500 group-hover:from-navy-deep" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                <div className="font-mono text-body-sm text-orange mb-3 tracking-widest">
                  {p.eyebrow}
                </div>
                <h3
                  className="font-heading font-medium text-off-white leading-tight"
                  style={{ fontSize: "clamp(20px, 2vw, 32px)" }}
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-body-sm text-off-white/65 font-light">
                  {p.caption}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 flex justify-end">
          <a
            href="#portafolio"
            className="text-body text-navy-deep border-b border-navy-deep/30 pb-1 hover:border-orange hover:text-orange transition-colors duration-300"
          >
            Ver portafolio completo →
          </a>
        </div>
      </div>
    </section>
  );
}
