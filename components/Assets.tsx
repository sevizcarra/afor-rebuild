"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Icon from "./Icon";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ICONS = ["changeHouse", "controlRoom", "dining", "workshop", "warehouse"] as const;

// Mapeo de imagenes ambientales para cada categoria de activo
const IMAGES = [
  "/images/principios/principio-02-normativo.jpg",     // 01 casas de cambio (interior tabiqueria)
  "/images/projects/gom-enat.jpg",                      // 02 salas de control (sala real)
  "/images/projects/gt-chile.jpg",                      // 03 comedores (interior corporativo)
  "/images/projects/santa-alejandra.jpg",               // 04 talleres (industrial)
  "/images/projects/facilities-enat.jpg",               // 05 bodegas (infraestructura)
];

export default function Assets() {
  const t = useTranslations("assets");
  const list = t.raw("list") as { n: string; title: string; body: string }[];

  return (
    <section id="activos" className="relative bg-paper py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="label text-accent mb-4">Catálogo</div>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
            className="font-sans font-medium text-hero text-ink"
          >
            {t("title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((item, i) => (
            <motion.article
              key={item.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="card overflow-hidden flex flex-col group"
            >
              {/* Imagen + ícono superpuesto */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={IMAGES[i]}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-md bg-paper/95 text-accent backdrop-blur-sm">
                  <Icon name={ICONS[i] as never} size={20} />
                </div>
                <div className="absolute top-4 right-4 text-small font-medium text-paper tabular bg-ink/40 backdrop-blur-sm px-2 py-1 rounded">
                  {item.n}
                </div>
              </div>
              {/* Texto */}
              <div className="p-7 flex-1">
                <h3 className="font-sans font-semibold text-h1 text-ink">{item.title}</h3>
                <p className="mt-3 text-small text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
