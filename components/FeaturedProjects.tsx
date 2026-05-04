"use client";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "@/lib/content";

export default function FeaturedProjects() {
  return (
    <section id="proyectos" className="bg-paper py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20"
        >
          <div className="lg:col-span-7">
            <span className="label text-accent">Proyectos destacados</span>
            <h2 className="mt-6 font-display font-medium text-h1 text-ink">
              Procesos.<br />No catálogo.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-12 text-body text-gray-700 max-w-md">
            Una selección representativa. Para BHP, Codelco e ingenierías Tier 1.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {FEATURED_PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-200 aspect-[4/5] mb-6">
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {/* Tinte naranja sutil al hover */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 transition-colors duration-500 mix-blend-multiply" />
              </div>
              <div className="font-mono text-small text-accent mb-2 tracking-wider transition-colors duration-300">{p.eyebrow}</div>
              <h3 className="font-display font-medium text-h4 text-ink leading-snug mb-2 transition-colors duration-300 group-hover:text-accent">
                {p.title}
              </h3>
              <p className="text-small text-gray-700">{p.caption}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-20">
          <a
            href="#portafolio"
            className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 hover:bg-accent transition-colors duration-300 group text-body font-medium"
          >
            <span>Ver portafolio completo</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
