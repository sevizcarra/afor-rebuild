"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CONTACT, SITE } from "@/lib/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hook to your backend / form provider here. For now, mailto fallback.
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
    <section id="contacto" className="bg-navy-deep py-28 md:py-36 border-t border-gray-line">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="accent-line-green" />
            <span className="eyebrow text-green">{CONTACT.eyebrow}</span>
          </div>
          <h2 className="font-heading font-bold text-h2 text-off-white">
            {CONTACT.title[0]}<br />{CONTACT.title[1]}
          </h2>
          <p className="mt-8 text-body-lg text-off-white/75 max-w-md">{CONTACT.body}</p>

          <ul className="mt-12 space-y-4 font-mono text-body">
            <li>
              <a href={`mailto:${SITE.email}`} className="text-off-white hover:text-orange transition-colors">
                {SITE.email}
              </a>
            </li>
            <li className="text-off-white">{SITE.phone}</li>
            <li className="text-gray-text">{SITE.address}</li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {[
            { name: "name", label: "Nombre", type: "text" },
            { name: "email", label: "Correo", type: "email" },
            { name: "company", label: "Empresa", type: "text" },
          ].map((f) => (
            <div key={f.name} className="relative">
              <label htmlFor={f.name} className="eyebrow text-gray-text block mb-3">{f.label}</label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required
                className="w-full bg-transparent border-0 border-b border-gray-line text-off-white text-body-lg py-3 focus:border-orange focus:outline-none transition-colors"
              />
            </div>
          ))}

          <div className="relative">
            <label htmlFor="type" className="eyebrow text-gray-text block mb-3">Tipo de proyecto</label>
            <select
              id="type"
              name="type"
              className="w-full bg-navy-deep border-0 border-b border-gray-line text-off-white text-body-lg py-3 focus:border-orange focus:outline-none transition-colors appearance-none cursor-pointer"
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
            <label htmlFor="message" className="eyebrow text-gray-text block mb-3">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-0 border-b border-gray-line text-off-white text-body py-3 focus:border-orange focus:outline-none transition-colors resize-none"
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center">
            {submitted ? "Enviando…" : "Enviar →"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
