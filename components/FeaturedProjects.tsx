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
    <section id="proyectos" className="bg-off-white py-28 md:py-36">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="accent-line" />
              <span className="eyebrow text-orange">03 — PROYECTOS DESTACADOS</span>
            </div>
            <h2 className="font-heading font-bold text-h2 text-navy-deep">
              Procesos.<br />No catálogo.
            </h2>
          </div>
          <p className="max-w-md text-body text-navy-deep/70">
            Una selección representativa. Para BHP, Codelco e ingenierías Tier 1.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {FEATURED_PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={clsx(
                "group relative overflow-hidden bg-navy-deep cursor-pointer",
                spanClass(p.span)
              )}
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-orange/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-orange/30" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="font-mono text-body-sm text-orange mb-2 tracking-wider">
                  {p.eyebrow}
                </div>
                <h3 className="font-heading font-bold text-h4 md:text-h3 text-off-white leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-body-sm text-off-white/70">
                  {p.caption}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex justify-end">
          <a href="#portafolio" className="link-arrow text-body-lg">
            Ver portafolio completo →
          </a>
        </div>
      </div>
    </section>
  );
}
