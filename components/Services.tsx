"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; body: string }[];
  const tags = t.raw("tags") as string[];

  return (
    <section id="servicios" className="relative bg-anthracite text-ink pt-10 md:pt-14 pb-10 md:pb-14">
      <div className="px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="mono-cap text-ink/70 flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("eyebrow")}
          </div>
          <h2
            className="font-sans font-semibold text-ink leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {t("heading")}<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Lista con chips y hairlines */}
        <div className="border-t border-ink/10">
          {items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 gap-6 py-8 md:py-10 border-b border-ink/10 group items-start hover:bg-ink/[0.02] transition-colors"
            >
              <div className="col-span-2 md:col-span-1 mono-cap text-accent pt-1">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="col-span-10 md:col-span-5 font-sans font-semibold text-ink text-lg md:text-xl leading-tight tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="col-span-12 md:col-span-4 mono-cap text-ink/60 !text-[12px] !leading-[1.7]">
                {item.body}
              </p>
              <div className="col-span-12 md:col-span-2 md:text-right">
                <span className="chip-outline">{tags[i]}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
