import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink py-20">
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div>
            <div className="font-brand text-2xl text-paper tracking-[0.05em]">{SITE.brand}</div>
            <p className="mt-4 text-small text-paper/55 leading-relaxed">{SITE.slogan}</p>
          </div>
          <ul className="md:text-right space-y-3 text-small">
            <li><a href={SITE.dossierUrl} className="text-paper/70 hover:text-accent transition-colors">Dossier 2025</a></li>
            <li><a href={SITE.intranet} className="text-paper/70 hover:text-accent transition-colors">Acceso equipo</a></li>
            <li><a href={`mailto:${SITE.email}`} className="text-paper/70 hover:text-accent transition-colors">{SITE.email}</a></li>
          </ul>
        </div>
        <div className="border-t border-paper/15 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-small text-paper/45">
          <span>© {new Date().getFullYear()} AFOR. Todos los derechos reservados.</span>
          <span className="font-mono">{SITE.address}</span>
        </div>
      </div>
    </footer>
  );
}
