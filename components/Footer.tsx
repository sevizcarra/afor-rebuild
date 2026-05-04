import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#08091B] py-16 border-t border-gray-line">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          <div>
            <div className="font-display text-3xl text-off-white tracking-wider">{SITE.brand}</div>
            <p className="mt-3 text-body-sm text-gray-text font-mono uppercase tracking-widest">
              {SITE.slogan}
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-body-sm">
            <li><a href={SITE.dossierUrl} className="text-off-white/80 hover:text-orange transition-colors">Descargar portafolio</a></li>
            <li><a href={SITE.intranet} className="text-off-white/80 hover:text-orange transition-colors">Acceso equipo</a></li>
            <li><a href={`mailto:${SITE.email}`} className="text-off-white/80 hover:text-orange transition-colors">{SITE.email}</a></li>
          </ul>
        </div>
        <div className="border-t border-gray-line pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-body-sm text-gray-text">
          <span>© {new Date().getFullYear()} AFOR. Todos los derechos reservados.</span>
          <span className="font-mono">Las Condes · Santiago · Chile</span>
        </div>
      </div>
    </footer>
  );
}
