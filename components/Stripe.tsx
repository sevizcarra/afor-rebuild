"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Stripe() {
  const t = useTranslations("stripe");
  return (
    <section className="bg-accent py-20 md:py-28">
      <div className="px-6 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-sans font-medium text-paper" style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
            {t("lineOne")}<br className="hidden md:block" /> {t("lineTwo")}
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
