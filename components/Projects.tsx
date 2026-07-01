"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const PROJECT_IMAGES: Record<string, string> = {
  cho: "/images/projects/edificio-cho.jpg",
  enat: "/images/projects/facilities-enat.jpg",
  gom: "/images/projects/gom-enat.jpg",
  yacas: "/images/projects/las-yacas.jpg",
  mecasfy: "/images/projects/santa-alejandra.jpg",
  gt: "/images/projects/gt-chile.jpg",
};

type Project = {
  id: string;
  client: string;
  year: string;
  title: string;
  category: string;
  body: string;
  highlights: { label: string; value: string }[];
};

export default function Projects() {
  const t = useTranslations("projects");
  const list = t.raw("list") as Project[];

  return (
    <section id="proyectos" className="relative bg-anthracite text-paper py-24 md:py-32">
      <div className="px-6 md:px-10">
        {/* Header eyebrow + title condensed */}
        <div className="mb-16 md:mb-20">
          <div className="mono-cap text-paper/70 flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Selected Works
          </div>
          <h2
            className="font-sans font-semibold text-paper leading-[1.05] tracking-[-0.02em] max-w-4xl"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Proyectos seleccionados<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Cards estilo James Blade: full-width con overlay + tags + counter */}
        <div className="space-y-6">
          {list.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl overflow-hidden group aspect-[16/8] bg-anthracite-soft"
            >
              <img
                src={PROJECT_IMAGES[p.id]}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite via-anthracite/50 to-transparent" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                {/* Top: título + counter */}
                <div className="flex items-start justify-between gap-6">
                  <h3
                    className="font-sans font-semibold text-paper leading-[1.05] tracking-[-0.015em] max-w-2xl"
                    style={{ fontSize: "clamp(22px, 2.6vw, 36px)" }}
                  >
                    {p.title}
                  </h3>
                  <div className="mono-cap text-paper/70 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}′
                  </div>
                </div>

                {/* Bottom: tags + body */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.category.split(" · ").slice(0, 3).map((tag) => (
                      <span key={tag} className="chip-outline">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mono-cap text-paper/75 !text-[11.5px] !leading-[1.6] max-w-lg">
                    {p.client} · {p.year}
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
