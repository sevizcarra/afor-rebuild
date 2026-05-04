import { SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-[#08091B] py-20 border-t border-gray-line/40">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-16">
          <div>
            <div className="font-display text-2xl text-off-white tracking-[0.2em]">{SITE.brand}</div>
            <p className="mt-4 text-body-sm text-gray-text font-mono uppercase tracking-widest">
              {SITE.slogan}
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-10 gap-y-3 text-body-sm">
            <li><a href={SITE.dossierUrl} className="text-off-white/70 hover:text-orange transition-colors duration-300">Descargar portafolio</a></li>
            <li><a href={SITE.intranet} className="text-off-white/70 hover:text-orange transition-colors duration-300">Acceso equipo</a></li>
            <li><a href={`mailto:${SITE.email}`} className="text-off-white/70 hover:text-orange transition-colors duration-300">{SITE.email}</a></li>
          </ul>
        </div>
        <div className="border-t border-gray-line/40 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-body-sm text-gray-text font-light">
          <span>© {new Date().getFullYear()} AFOR. Todos los derechos reservados.</span>
          <span className="font-mono tracking-wider">Las Condes · Santiago · Chile</span>
        </div>
      </div>
    </footer>
  );
}
