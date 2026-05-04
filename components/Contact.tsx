"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CONTACT, SITE } from "@/lib/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Contacto AFOR — ${data.get("name") || "Sin nombre"}`);
    const body = encodeURIComponent(
      `Nombre: ${data.get("name")}\n` +
      `Empresa: ${data.get("company")}\n` +
      `Email: ${data.get("email")}\n` +
      `Tipo: ${data.get("type")}\n\n` +
      `${data.get("message")}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-navy-deep py-32 md:py-44 border-t border-gray-line/50">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="accent-line-green" />
            <span className="eyebrow text-green">{CONTACT.eyebrow}</span>
          </div>
          <h2
            className="font-heading font-medium text-off-white"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}
          >
            {CONTACT.title[0]}<br />{CONTACT.title[1]}
          </h2>
          <p className="mt-10 text-body-lg text-off-white/70 max-w-md font-light leading-relaxed">{CONTACT.body}</p>

          <ul className="mt-16 space-y-5 font-mono text-body">
            <li>
              <a href={`mailto:${SITE.email}`} className="text-off-white hover:text-orange transition-colors duration-300 border-b border-off-white/20 pb-1">
                {SITE.email}
              </a>
            </li>
            <li className="text-off-white/85">{SITE.phone}</li>
            <li className="text-gray-text">{SITE.address}</li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          {[
            { name: "name", label: "Nombre", type: "text" },
            { name: "email", label: "Correo", type: "email" },
            { name: "company", label: "Empresa", type: "text" },
          ].map((f) => (
            <div key={f.name} className="relative">
              <label htmlFor={f.name} className="eyebrow text-gray-text block mb-4">{f.label}</label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required
                className="w-full bg-transparent border-0 border-b border-gray-line text-off-white text-body-lg py-3 focus:border-orange focus:outline-none transition-colors duration-300 font-light"
              />
            </div>
          ))}

          <div className="relative">
            <label htmlFor="type" className="eyebrow text-gray-text block mb-4">Tipo de proyecto</label>
            <select
              id="type"
              name="type"
              className="w-full bg-navy-deep border-0 border-b border-gray-line text-off-white text-body-lg py-3 focus:border-orange focus:outline-none transition-colors duration-300 appearance-none cursor-pointer font-light"
            >
              <option>Mining Facilities</option>
              <option>Industrial Facilities</option>
              <option>Plot Plan</option>
              <option>Project Management</option>
              <option>Coordinación multidisciplinar</option>
              <option>Otro</option>
            </select>
          </div>

          <div className="relative">
            <label htmlFor="message" className="eyebrow text-gray-text block mb-4">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-0 border-b border-gray-line text-off-white text-body py-3 focus:border-orange focus:outline-none transition-colors duration-300 resize-none font-light"
            />
          </div>

          <button
            type="submit"
            className="text-body text-off-white border-b border-off-white/30 pb-2 hover:border-orange hover:text-orange transition-colors duration-300 inline-flex items-center gap-3 group"
          >
            {submitted ? "Enviando…" : "Enviar mensaje"}
            <span className="text-orange transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
