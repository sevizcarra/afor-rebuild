"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Icon from "./Icon";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ICONS = ["assess", "concept", "engineering", "support"] as const;

export default function Method() {
  const t = useTranslations("method");
  const steps = t.raw("steps") as { n: string; title: string; body: string }[];

  return (
    <section id="método" className="relative bg-bone py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="label text-accent mb-4">Proceso</div>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
            className="font-sans font-medium text-hero text-ink"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lead text-gray-700"
          >
            {t("body")}
          </motion.p>
        </div>

        <div className="relative">
          {/* línea horizontal conectora detrás */}
          <div aria-hidden="true" className="hidden lg:block absolute top-[24px] left-[12.5%] right-[12.5%] h-px bg-gray-200" />

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-paper border-2 border-accent text-accent z-10">
                  <Icon name={ICONS[i] as never} size={22} />
                </div>
                <div className="mt-5 label text-gray-400 tabular">PASO {s.n}</div>
                <h3 className="mt-2 font-sans font-semibold text-h2 text-ink">{s.title}</h3>
                <p className="mt-3 text-small text-gray-700 leading-relaxed max-w-[260px]">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
