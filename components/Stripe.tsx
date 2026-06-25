"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Stripe() {
  const t = useTranslations("stripe");
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-edge">
        <div className="grid grid-cols-12 gap-4 hairline-t pt-8">
          {/* Eyebrow tabular */}
          <div className="col-span-12 md:col-span-3">
            <div className="text-[10px] tabular uppercase tracking-[0.12em] text-gray-500">00 — Manifiesto</div>
          </div>

          {/* Statement con bloque naranja acento */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-9"
          >
            <h3 className="font-sans font-light text-ink leading-tight" style={{ fontSize: "clamp(28px, 3.4vw, 48px)", letterSpacing: "-0.02em" }}>
              <span className="inline-block bg-accent text-paper px-3 py-1 mr-2">{t("lineOne")}</span>
              {t("lineTwo")}
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
