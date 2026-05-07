"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Stripe() {
  const t = useTranslations("stripe");
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3
            className="font-sans font-light text-ink"
            style={{ fontSize: "clamp(28px, 3.6vw, 48px)", lineHeight: "1.2", letterSpacing: "-0.02em" }}
          >
            {t("lineOne")} {t("lineTwo")}
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
