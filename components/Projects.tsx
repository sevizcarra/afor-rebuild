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
    <section id="proyectos" className="relative bg-anthracite text-ink pt-10 md:pt-14 pb-10 md:pb-14">
      <div className="px-6 md:px-10">
        {/* Header eyebrow + title condensed */}
        <div className="mb-16 md:mb-20">
          <div className="mono-cap text-ink/70 flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("eyebrow")}
          </div>
          <h2
            className="font-sans font-semibold text-ink leading-[1.05] tracking-[-0.02em] max-w-4xl"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {t("heading")}<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Cards estilo James Blade: full-width con overlay + tags + counter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {list.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden group aspect-[4/3] bg-anthracite-soft"
            >
              <img
                src={PROJECT_IMAGES[p.id]}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                style={{ objectPosition: p.id === "gom" ? "50% 80%" : "50% 50%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">
                {/* Top: título + counter */}
                <div className="flex items-start justify-between gap-6">
                  <h3
                    className="font-sans font-semibold text-paper leading-[1.05] tracking-[-0.015em] max-w-2xl"
                    style={{ fontSize: "clamp(20px, 1.8vw, 26px)" }}
                  >
                    {p.title}
                  </h3>
                  <div className="mono-cap text-paper/70 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}′
                  </div>
                </div>

                {/* Bottom: tags + body */}
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.category.split(" · ").slice(0, 2).map((tag) => (
                      <span key={tag} className="chip-outline !text-[10.5px] !py-1 !px-2.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-paper/85 text-[12.5px] leading-[1.5] line-clamp-3">
                    {p.body}
                  </p>
                  <p className="text-paper/60 text-[11px]">
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
