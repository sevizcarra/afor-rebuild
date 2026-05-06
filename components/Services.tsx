"use client";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicios" className="bg-ink py-32 md:py-44">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 md:mb-24"
        >
          <div className="lg:col-span-7">
            <span className="label text-accent">{SERVICES.eyebrow}</span>
            <h2 className="mt-6 font-sans font-medium text-h1 text-paper">
              {SERVICES.title}
            </h2>
          </div>
          <p className="lg:col-span-5 lg:pt-8 text-body text-paper/70 max-w-md">
            Servicios técnicos integrados al equipo del proyecto, bajo los protocolos del mandante.
          </p>
        </motion.div>

        <ul className="border-t border-paper/15">
          {SERVICES.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-paper/15 group cursor-default"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-12">
                <div className="md:col-span-1 flex items-start">
                  <span className="font-mono text-small text-accent w-10 tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="md:col-span-5 font-sans font-medium text-paper text-h3 leading-snug transition-colors duration-300 group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="md:col-span-6 text-body text-paper/70 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
