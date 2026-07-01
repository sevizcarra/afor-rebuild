"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; body: string }[];
  const tags = t.raw("tags") as string[];

  return (
    <section id="servicios" className="relative bg-anthracite text-paper py-24 md:py-32">
      <div className="container-edge">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-8">
            <div className="label text-accent mb-5 tracking-[0.18em]">{t("eyebrow")}</div>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
              className="font-sans font-bold text-paper leading-[1.05]"
              style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.025em" }}
            >
              {t("titleStart")}<span className="font-serif italic font-normal text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
            </motion.h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <div className="text-paper/15 font-thin leading-none" style={{ fontSize: "96px" }} aria-hidden="true">+</div>
          </div>
        </div>

        <div className="pt-2" style={{ borderTop: "1px solid rgba(250,250,247,0.15)" }}>
          {items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 gap-6 py-8 md:py-10 items-start group"
              style={{ borderBottom: "1px solid rgba(250,250,247,0.15)" }}
            >
              <div className="col-span-2 md:col-span-1 pt-1">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-paper text-[11.5px] tracking-[0.06em] tabular font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="col-span-10 md:col-span-3 font-sans font-bold text-paper text-h3 leading-snug">
                {item.title}
              </h3>
              <p className="col-span-12 md:col-span-6 text-small text-paper/75 leading-relaxed">
                {item.body}
              </p>
              <div className="col-span-12 md:col-span-2 md:text-right">
                <span className="inline-block border border-paper/30 text-[10px] tabular tracking-[0.12em] uppercase text-paper/70 px-3 py-2 group-hover:border-accent group-hover:text-accent transition-colors">
                  {tags[i] || "AFOR"}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
