"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const SITE_EMAIL = "contacto@afor.cl";
const SITE_PHONE = "+56 9 6350 1854";

export default function Contact() {
  const t = useTranslations("contact");
  const tSite = useTranslations("site");
  const [submitted, setSubmitted] = useState(false);
  const types = t.raw("form.types") as string[];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Contacto AFOR — ${data.get("name") || "Sin nombre"}`);
    const body = encodeURIComponent(
      `Nombre: ${data.get("name")}\nEmpresa: ${data.get("company")}\nEmail: ${data.get("email")}\nTipo: ${data.get("type")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-bone py-32 md:py-44">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-sans font-medium text-h1 text-ink">
            {t("titleStart")}<span className="text-accent">{t("titleHighlight")}</span>{t("titleEnd")}
          </h2>
          <p className="mt-8 text-body text-gray-700 max-w-md">{t("body")}</p>

          <ul className="mt-14 space-y-4 text-body">
            <li>
              <a href={`mailto:${SITE_EMAIL}`} className="text-ink border-b border-ink/40 pb-1 hover:text-accent hover:border-accent transition-colors">
                {SITE_EMAIL}
              </a>
            </li>
            <li className="text-gray-700">{SITE_PHONE}</li>
            <li className="text-gray-500">{tSite("address")}</li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-9"
        >
          {[
            { name: "name", labelKey: "name", type: "text" },
            { name: "email", labelKey: "email", type: "email" },
            { name: "company", labelKey: "company", type: "text" },
          ].map((f) => (
            <div key={f.name}>
              <label htmlFor={f.name} className="label text-gray-500 block mb-3">{t(`form.${f.labelKey}` as never)}</label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required
                className="w-full bg-transparent border-0 border-b border-ink/25 text-ink text-body py-3 focus:border-accent focus:outline-none transition-colors"
              />
            </div>
          ))}

          <div>
            <label htmlFor="type" className="label text-gray-500 block mb-3">{t("form.type")}</label>
            <select
              id="type"
              name="type"
              className="w-full bg-bone border-0 border-b border-ink/25 text-ink text-body py-3 focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
            >
              {types.map((tp) => (
                <option key={tp}>{tp}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="label text-gray-500 block mb-3">{t("form.message")}</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-0 border-b border-ink/25 text-ink text-body py-3 focus:border-accent focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="text-body text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            {submitted ? t("form.submitting") : t("form.submit")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
