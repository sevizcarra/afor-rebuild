"use client";
import { motion } from "framer-motion";
import { HERO, SITE } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink flex flex-col justify-end">
      {/* Video sin loop — corre 1 vez y queda en el ultimo frame */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/images/hero/hero-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/55 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/65 to-transparent pointer-events-none" />
      </div>

      {/* Contenido inferior */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 container-edge pb-16 md:pb-20"
      >
        <div className="max-w-4xl">
          <span className="label text-paper/70 mb-6 block">{HERO.eyebrow}</span>
          <h1 className="font-sans font-medium text-paper text-hero">
            {SITE.brand}.
          </h1>
          <p className="mt-8 max-w-2xl text-lead text-paper/85 font-light">
            {HERO.summary}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
