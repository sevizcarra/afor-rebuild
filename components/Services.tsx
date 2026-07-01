"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; body: string }[];
  const tags = t.raw("tags") as string[];

  return (
    <section id="servicios" className="relative bg-carbon text-paper py-24 md:py-32">
      <div className="px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="mono-cap text-paper/70 flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {t("eyebrow") || "Practice"}
          </div>
          <h2
            className="font-brand text-paper leading-[0.9] tracking-[0.02em]"
            style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
          >
            Servicios<span className="text-accent">.</span>
          </h2>
        </div>

        {/* Lista con chips y hairlines */}
        <div className="border-t border-paper/10">
          {items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="grid grid-cols-12 gap-6 py-8 md:py-10 border-b border-paper/10 group items-start"
            >
              <div className="col-span-2 md:col-span-1 mono-cap text-accent pt-1">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="col-span-10 md:col-span-5 font-brand text-paper text-xl md:text-2xl leading-tight tracking-[0.01em]">
                {item.title}
              </h3>
              <p className="col-span-12 md:col-span-4 mono-cap text-paper/60 !text-[12px] !leading-[1.7]">
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
