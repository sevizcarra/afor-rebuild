"use client";
import { motion } from "framer-motion";

export default function Statement() {
  return (
    <section className="bg-paper py-32 md:py-44 lg:py-48 flex items-center justify-center">
      <div className="container-edge text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-medium text-ink"
          style={{ fontSize: "clamp(56px, 9vw, 160px)", lineHeight: "0.95", letterSpacing: "-0.03em" }}
        >
          Diez años.<br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="shimmer-warm inline-block"
          >
            Solo facilities.
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
}
