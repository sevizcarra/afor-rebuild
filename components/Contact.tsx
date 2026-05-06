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
    <section id="contacto" className="bg-bone py-32 md:py-44">
      <div className="container-edge grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className=" font-sans font-medium text-h1 text-ink">
            {CONTACT.title}
          </h2>
          <p className="mt-8 text-body text-gray-700 max-w-md">{CONTACT.body}</p>

          <ul className="mt-14 space-y-4 text-body">
            <li>
              <a href={`mailto:${SITE.email}`} className="text-ink border-b border-ink/40 pb-1 hover:text-accent hover:border-accent transition-colors">
                {SITE.email}
              </a>
            </li>
            <li className="text-gray-700 font-mono">{SITE.phone}</li>
            <li className="text-gray-500 font-mono">{SITE.address}</li>
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
                className="w-full bg-transparent border-0 border-b border-ink/25 text-ink text-body py-3 focus:border-accent focus:outline-none transition-colors"
              />
            </div>
          ))}

          <div>
            <label htmlFor="type" className="label text-gray-500 block mb-3">Tipo de proyecto</label>
            <select
              id="type"
              name="type"
              className="w-full bg-bone border-0 border-b border-ink/25 text-ink text-body py-3 focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
            >
              <option>Mining Facilities</option>
              <option>Industrial Facilities</option>
              <option>Master Plan</option>
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
              className="w-full bg-transparent border-0 border-b border-ink/25 text-ink text-body py-3 focus:border-accent focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="text-body text-ink border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            {submitted ? "Enviando…" : "Enviar mensaje →"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
