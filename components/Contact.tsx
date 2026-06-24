"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Icon from "./Icon";

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contacto" className="relative bg-paper py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="bg-ink text-paper rounded-2xl px-8 md:px-16 py-16 md:py-20">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="col-span-12 md:col-span-7">
              <div className="label text-accent mb-4">Contacto</div>
              <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeIn}
                className="font-sans font-medium text-hero text-paper"
              >
                {t("title")}
              </motion.h2>
              <p className="mt-5 text-lead text-paper/75 max-w-md">
                Cuéntenos del proyecto: alcance, plazos y especificaciones del mandante. Respondemos en menos de 24 horas hábiles.
              </p>
              <a
                href={`mailto:${t("email")}`}
                className="mt-8 inline-flex items-center gap-2 text-small font-medium bg-accent text-ink px-5 py-3 rounded-md hover:bg-paper transition-colors"
              >
                Escribir a contacto@afor.cl →
              </a>
            </div>

            <div className="col-span-12 md:col-span-5 space-y-6">
              {[
                { icon: "mail" as const, label: "Email", value: t("email"), href: `mailto:${t("email")}` },
                { icon: "phone" as const, label: "Teléfono", value: t("phone"), href: `tel:${t("phone").replace(/\s/g, "")}` },
                { icon: "pin" as const, label: "Ubicación", value: t("city") },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeIn}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-md bg-paper/10 text-accent">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div>
                    <div className="label text-paper/50">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block font-sans font-medium text-h3 text-paper hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="mt-1 font-sans font-medium text-h3 text-paper">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
