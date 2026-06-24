"use client";
import type { SVGProps } from "react";

type IconName =
  | "precision" | "operation" | "code" | "integration"
  | "masterplan" | "build" | "remodel" | "interim" | "controlroom" | "respel" | "review"
  | "mail" | "phone" | "pin";

const s = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

const paths: Record<IconName, JSX.Element> = {
  precision: (<><circle cx="12" cy="12" r="9" {...s} /><circle cx="12" cy="12" r="5" {...s} /><circle cx="12" cy="12" r="1.5" {...s} /></>),
  operation: (<><circle cx="6" cy="6" r="2" {...s} /><circle cx="18" cy="6" r="2" {...s} /><circle cx="6" cy="18" r="2" {...s} /><circle cx="18" cy="18" r="2" {...s} /><path d="M8 6h8M6 8v8M18 8v8M8 18h8" {...s} /></>),
  code: (<><rect x="4" y="4" width="16" height="16" rx="1.5" {...s} /><path d="M8 9h8M8 13h6M8 17h4" {...s} /></>),
  integration: (<><circle cx="5" cy="12" r="2" {...s} /><circle cx="19" cy="6" r="2" {...s} /><circle cx="19" cy="18" r="2" {...s} /><path d="M6.8 11 17.2 7M6.8 13l10.4 4" {...s} /></>),
  masterplan: (<><rect x="3" y="4" width="18" height="16" rx="1" {...s} /><path d="M3 10h18M9 4v16" {...s} /></>),
  build: (<><path d="M3 21V8l9-5 9 5v13" {...s} /><path d="M9 21v-7h6v7" {...s} /></>),
  remodel: (<><path d="M4 4h10v10H4z" {...s} /><path d="M10 10h10v10H10z" {...s} /></>),
  interim: (<><circle cx="12" cy="12" r="9" {...s} /><path d="M12 7v5l3 2" {...s} /></>),
  controlroom: (<><rect x="3" y="5" width="18" height="11" rx="1" {...s} /><path d="M9 20h6M12 16v4M6 9h3M11 9h3M16 9h2M6 12h2M10 12h4M16 12h2" {...s} /></>),
  respel: (<><path d="M12 3 4 19h16z" {...s} /><path d="M12 10v4M12 17v.5" {...s} /></>),
  review: (<><circle cx="10.5" cy="10.5" r="6" {...s} /><path d="m20 20-5-5" {...s} /></>),
  mail: (<><rect x="3" y="6" width="18" height="12" rx="1.5" {...s} /><path d="m4 7 8 6 8-6" {...s} /></>),
  phone: (<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" {...s} />),
  pin: (<><path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" {...s} /><circle cx="12" cy="9" r="2.5" {...s} /></>),
};

export default function Icon({ name, size = 24, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...rest}>{paths[name]}</svg>;
}
