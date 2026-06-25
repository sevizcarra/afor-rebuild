"use client";
import { useTranslations } from "next-intl";

const SITE_EMAIL = "contacto@afor.cl";

export default function Footer() {
  const t = useTranslations("footer");
  const tSite = useTranslations("site");

  return (
    <footer className="bg-ink py-16 border-t border-paper/15">
      <div className="container-edge">
        {/* Top: brand a la izquierda, dossier+email a la derecha */}
        <div className="grid grid-cols-12 gap-4 pb-12">
          <div className="col-span-12 md:col-span-5">
            <div className="font-brand text-2xl text-paper tracking-[0.05em]">{tSite("brand")}</div>
            <p className="mt-3 text-small text-paper/55 leading-relaxed max-w-xs">{tSite("slogan")}</p>
          </div>
          <div className="col-span-12 md:col-span-4 text-small text-paper/55">
            <div className="text-[10px] tabular uppercase tracking-[0.12em] text-paper/40 mb-2">Contacto</div>
            <a href={`mailto:${SITE_EMAIL}`} className="block text-paper hover:text-accent transition-colors">{SITE_EMAIL}</a>
            <div className="mt-1">{tSite("address")}</div>
          </div>
          <div className="col-span-12 md:col-span-3 text-small text-paper/55 md:text-right">
            <div className="text-[10px] tabular uppercase tracking-[0.12em] text-paper/40 mb-2">Documentación</div>
            <a href="/AFOR_Dossier_2025.pdf" className="block text-paper hover:text-accent transition-colors">{t("links.dossier")} →</a>
          </div>
        </div>

        {/* Bottom: hairline + bottom meta */}
        <div className="border-t border-paper/15 pt-6 grid grid-cols-12 gap-4 text-[10px] tabular uppercase tracking-[0.12em] text-paper/40">
          <div className="col-span-6">© {new Date().getFullYear()} AFOR — {t("rights")}</div>
          <div className="col-span-6 text-right">Las Condes · Santiago · Chile</div>
        </div>
      </div>
    </footer>
  );
}
