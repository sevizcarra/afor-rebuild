"use client";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "@/lib/content";

export default function FeaturedProjects() {
  return (
    <section id="proyectos" className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 md:mb-28"
        >
          <div className="lg:col-span-7">
            <span className="label text-accent">Proyectos destacados</span>
            <h2 className="mt-6 font-display font-medium text-ink" style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
              Procesos.<br />No catálogo.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-12 text-body text-gray-700 max-w-md">
            Una selección representativa. Para BHP, Codelco e ingenierías Tier 1.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
          {FEATURED_PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-200 aspect-[4/5] mb-7">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 transition-colors duration-700 mix-blend-multiply" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-out" />
              </div>
              <div className="font-mono text-small text-accent mb-2 tracking-wider transition-colors duration-300">{p.eyebrow}</div>
              <h3 className="font-display font-medium text-ink leading-snug mb-2 transition-colors duration-300 group-hover:text-accent" style={{ fontSize: "clamp(20px, 1.6vw, 24px)" }}>
                {p.title}
              </h3>
              <p className="text-small text-gray-700">{p.caption}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24"
        >
          <a
            href="#portafolio"
            className="inline-flex items-center gap-3 bg-ink text-paper px-8 py-4 hover:bg-accent transition-colors duration-500 group text-body font-medium"
          >
            <span>Ver portafolio completo</span>
            <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
