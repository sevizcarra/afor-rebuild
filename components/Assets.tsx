"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Assets() {
  const t = useTranslations("assets");
  const list = t.raw("list") as { n: string; title: string; body: string }[];

  return (
    <section id="activos" className="relative bg-paper text-ink py-28 md:py-40 px-8 md:px-12">
      <div className="max-w-[1400px]">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
          className="font-sans font-semibold text-display max-w-5xl"
        >
          {t("title")}
        </motion.h2>

        <ul className="mt-20 md:mt-28 border-t border-ink/10">
          {list.map((item, i) => (
            <motion.li
              key={item.n}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 gap-6 py-10 md:py-12 border-b border-ink/10 group"
            >
              <span className="col-span-2 md:col-span-1 text-small font-medium text-gray-500 pt-3">{item.n}</span>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-sans font-semibold text-hero leading-none">
                  <span className="inline-block bg-accent px-3 py-1 -mx-3 -my-1 transition-all duration-300 group-hover:bg-copper">
                    {item.title}
                  </span>
                </h3>
              </div>
              <p className="col-span-12 md:col-start-7 md:col-span-6 text-body text-gray-700 mt-2 md:mt-4 self-center max-w-md">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
