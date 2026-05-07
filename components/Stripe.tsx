"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Stripe() {
  const t = useTranslations("stripe");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const phrase = `${t("lineOne")} ${t("lineTwo")}`;
  const words = phrase.split(" ");

  return (
    <section ref={ref} className="bg-paper py-32 md:py-48">
      <div className="px-6 max-w-5xl mx-auto text-center">
        <h3
          className="font-sans font-light text-ink"
          style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: "1.15", letterSpacing: "-0.025em" }}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
          })}
        </h3>
      </div>
    </section>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {word}
    </motion.span>
  );
}
