"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="top" className="relative bg-anthracite min-h-screen flex flex-col pb-16 md:pb-24">
      {/* Video en su propio contenedor: 65vh de alto, fade interno al pie hacia paper.
          Ningún elemento se superpone con el flujo siguiente. */}
      <div className="relative h-[62vh] md:h-[68vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero/hero-poster.jpg"
          className="absolute inset-x-0 top-0 w-full object-cover"
          style={{ height: "calc(100% - 80px)", filter: "grayscale(100%) contrast(1.05)" }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Fades del video */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-anthracite/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-20 h-1/3 bg-gradient-to-t from-anthracite via-anthracite/80 to-transparent pointer-events-none" />
        {/* Bloque solido paper al pie: 80px de paper puro tapan cualquier borde del video */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-anthracite pointer-events-none" />
      </div>

      {/* Wordmark + summary DEBAJO del video, sobre bg-paper puro */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex flex-col items-center justify-center text-center px-6 -mt-12 md:-mt-20 relative z-10"
      >
        <h1
          className="font-brand text-ink leading-[0.9] tracking-[0.02em]"
          style={{ fontSize: "clamp(72px, 11vw, 172px)" }}
        >
          aFor<span className="text-accent">.</span>
        </h1>

        
      </motion.div>
    </section>
  );
}
