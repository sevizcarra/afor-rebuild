"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function PillarSticky({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="relative h-[140vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative max-w-2xl mx-auto text-center px-6">
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center font-brand leading-none select-none pointer-events-none -z-10 text-gray-100"
            style={{ fontSize: "clamp(200px, 28vw, 380px)" }}
          >
            {n}
          </span>
          <div className="relative z-10">
            <span className="font-mono text-small text-gray-500 tracking-wider">{n}</span>
            <h3 className="mt-4 font-sans font-medium text-h2 text-ink">{title}</h3>
            <p className="mt-6 text-body text-ink leading-relaxed">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const t = useTranslations("about");
  const tP = useTranslations("principles");
  const principles = [
    { n: "01", title: tP("p1Title"), body: tP("p1Body") },
    { n: "02", title: tP("p2Title"), body: tP("p2Body") },
    { n: "03", title: tP("p3Title"), body: tP("p3Body") },
    { n: "04", title: tP("p4Title"), body: tP("p4Body") },
  ];

  return (
    <section id="nosotros" className="bg-paper py-32 md:py-44">
      <div className="container-edge max-w-5xl mx-auto text-center">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="font-sans font-medium text-h1 text-ink"
        >
          {t("titleStart")}{t("titleHighlight")}{t("titleEnd")}
        </motion.h2>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 mx-auto max-w-2xl space-y-6 text-body text-ink"
        >
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </motion.div>
      </div>

      <div className="mt-24">
        {principles.map((p) => (
          <PillarSticky key={p.n} {...p} />
        ))}
      </div>
    </section>
  );
}
