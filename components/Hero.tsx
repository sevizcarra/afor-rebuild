"use client";
import { motion } from "framer-motion";
import { HERO, SITE } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-ink flex flex-col justify-end">
      {/* ======= VIDEO BACKGROUND — cubre toda la section ======= */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero/hero-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient sutil arriba — para que el nav respire */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/50 to-transparent pointer-events-none" />
      </div>

      {/* ======= BANNER INFERIOR — translucido ======= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-ink/55 backdrop-blur-sm"
      >
        <div className="container-edge py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* IZQ — Wordmark AFOR */}
            <div className="lg:col-span-7">
              <div
                className="font-brand text-accent tracking-[0.04em] leading-none"
                style={{ fontSize: "clamp(64px, 9vw, 132px)", marginLeft: "-0.05em" }}
              >
                {SITE.brand}
              </div>
            </div>

            {/* DER — Resumen de la compania */}
            <div className="lg:col-span-5 lg:border-l lg:border-paper/10 lg:pl-12">
              <p className="text-body text-paper font-light leading-relaxed">
                Somos una firma chilena especializada en el diseño de <span className="text-paper">facilities</span> para operaciones mineras e industriales. Somos especialistas en el desarrollo de proyectos con más de diez años aplicando desarrollo arquitectónico y de ingeniería a los requerimientos de la industria.
              </p>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
