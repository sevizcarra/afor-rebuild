"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO, HERO_IMAGES, SITE } from "@/lib/content";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  // Video se mueve hacia arriba mas lento que el banner — sensación de profundidad
  const videoY = useTransform(scrollY, [0, 800], [0, 160]);
  const videoScale = useTransform(scrollY, [0, 800], [1, 1.08]);

  return (
    <section ref={ref} id="top" className="relative h-screen w-full overflow-hidden bg-ink flex flex-col justify-end">
      {/* VIDEO BACKGROUND con parallax */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: videoY, scale: videoScale }}>
        <video
          autoPlay loop muted playsInline preload="auto"
          poster="/images/hero/hero-poster.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/50 to-transparent pointer-events-none" />
      </motion.div>

      {/* BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-ink/55 backdrop-blur-sm"
      >
        <div className="container-edge py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <div
                className="font-brand text-accent tracking-[0.04em] leading-none"
                style={{ fontSize: "clamp(64px, 9vw, 132px)", marginLeft: "-0.05em" }}
              >
                {SITE.brand}
              </div>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-paper/10 lg:pl-12">
              <p className="text-body text-paper font-light leading-relaxed">
                Somos una firma chilena especializada en el desarrollo de <span className="text-paper">facilities</span> para operaciones mineras e industriales. Más de diez años integrando arquitectura, ingeniería y criterios técnicos en proyectos del sector.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
