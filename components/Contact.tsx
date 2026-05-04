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
      `Nombre: ${data.get("name")}\nEmpresa: ${data.get("company")}\nEmail: ${data.get("email")}\nTipo: ${data.get("type")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="bg-paper py-32 md:py-44 border-t border-gray-200">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="label text-accent">{CONTACT.eyebrow}</span>
          <h2 className="mt-6 font-display font-medium text-h1 text-ink">
            {CONTACT.title[0]}<br />{CONTACT.title[1]}
          </h2>
          <p className="mt-8 text-lead text-gray-700 max-w-md leading-relaxed">{CONTACT.body}</p>

          <ul className="mt-14 space-y-4 font-mono text-body">
            <li>
              <a href={`mailto:${SITE.email}`} className="text-ink border-b border-ink/30 pb-1 hover:border-accent hover:text-accent transition-colors duration-300">
                {SITE.email}
              </a>
            </li>
            <li className="text-gray-700">{SITE.phone}</li>
            <li className="text-gray-500">{SITE.address}</li>
          </ul>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-9"
        >
          {[
            { name: "name", label: "Nombre", type: "text" },
            { name: "email", label: "Correo", type: "email" },
            { name: "company", label: "Empresa", type: "text" },
          ].map((f) => (
            <div key={f.name}>
              <label htmlFor={f.name} className="label text-gray-500 block mb-3">{f.label}</label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required
                className="w-full bg-transparent border-0 border-b border-ink/20 text-ink text-body py-3 focus:border-accent focus:outline-none transition-colors duration-300"
              />
            </div>
          ))}

          <div>
            <label htmlFor="type" className="label text-gray-500 block mb-3">Tipo de proyecto</label>
            <select
              id="type"
              name="type"
              className="w-full bg-paper border-0 border-b border-ink/20 text-ink text-body py-3 focus:border-accent focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
            >
              <option>Mining Facilities</option>
              <option>Industrial Facilities</option>
              <option>Plot Plan</option>
              <option>Project Management</option>
              <option>Coordinación multidisciplinar</option>
              <option>Otro</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="label text-gray-500 block mb-3">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-0 border-b border-ink/20 text-ink text-body py-3 focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="text-body text-ink border-b border-ink/30 pb-2 hover:border-accent hover:text-accent transition-colors duration-300 inline-flex items-center gap-3 group"
          >
            <span>{submitted ? "Enviando…" : "Enviar mensaje"}</span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
