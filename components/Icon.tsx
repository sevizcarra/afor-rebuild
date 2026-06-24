"use client";
import type { SVGProps } from "react";

type IconName =
  | "precision" | "operation" | "code" | "integration"
  | "changeHouse" | "controlRoom" | "dining" | "workshop" | "warehouse"
  | "assess" | "concept" | "engineering" | "support"
  | "mail" | "phone" | "pin" | "arrowRight";

const stroke = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

const paths: Record<IconName, JSX.Element> = {
  precision: (
    <>
      <circle cx="12" cy="12" r="9" {...stroke} />
      <circle cx="12" cy="12" r="5" {...stroke} />
      <circle cx="12" cy="12" r="1.5" {...stroke} />
    </>
  ),
  operation: (
    <>
      <circle cx="6" cy="6" r="2" {...stroke} />
      <circle cx="18" cy="6" r="2" {...stroke} />
      <circle cx="6" cy="18" r="2" {...stroke} />
      <circle cx="18" cy="18" r="2" {...stroke} />
      <path d="M8 6h8M6 8v8M18 8v8M8 18h8" {...stroke} />
    </>
  ),
  code: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1.5" {...stroke} />
      <path d="M8 9h8M8 13h6M8 17h4" {...stroke} />
    </>
  ),
  integration: (
    <>
      <circle cx="5" cy="12" r="2" {...stroke} />
      <circle cx="19" cy="6" r="2" {...stroke} />
      <circle cx="19" cy="18" r="2" {...stroke} />
      <path d="M6.8 11 17.2 7M6.8 13l10.4 4" {...stroke} />
    </>
  ),
  changeHouse: (
    <>
      <rect x="4" y="5" width="6.5" height="14" rx="0.5" {...stroke} />
      <rect x="13.5" y="5" width="6.5" height="14" rx="0.5" {...stroke} />
      <circle cx="9" cy="12" r="0.7" fill="currentColor" />
      <circle cx="18" cy="12" r="0.7" fill="currentColor" />
    </>
  ),
  controlRoom: (
    <>
      <rect x="3" y="5" width="18" height="11" rx="1" {...stroke} />
      <path d="M9 20h6M12 16v4" {...stroke} />
      <path d="M6 9h3M11 9h3M16 9h2M6 12h2M10 12h4M16 12h2" {...stroke} />
    </>
  ),
  dining: (
    <>
      <path d="M8 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4M6 14v6" {...stroke} />
      <path d="M18 4c-1.5 0-3 1.5-3 4s1.5 3 3 3v9" {...stroke} />
    </>
  ),
  workshop: (
    <>
      <path d="M9.5 14 4 19.5 5.5 21l5.5-5.5" {...stroke} />
      <path d="M13.5 12.5 17 16a2 2 0 0 0 3-3l-3.5-3.5a3.5 3.5 0 1 0-3 3z" {...stroke} />
    </>
  ),
  warehouse: (
    <>
      <rect x="3" y="13" width="8" height="7" {...stroke} />
      <rect x="13" y="13" width="8" height="7" {...stroke} />
      <rect x="8" y="5" width="8" height="7" {...stroke} />
    </>
  ),
  assess: (
    <>
      <circle cx="10.5" cy="10.5" r="6" {...stroke} />
      <path d="m20 20-5-5" {...stroke} />
    </>
  ),
  concept: (
    <>
      <path d="M4 4v14a2 2 0 0 0 2 2h14" {...stroke} />
      <path d="M8 17V7M12 17v-5M16 17V9" {...stroke} />
    </>
  ),
  engineering: (
    <>
      <path d="M4 5h13l3 3v11H4z" {...stroke} />
      <path d="M17 5v3h3" {...stroke} />
      <path d="M8 12h8M8 16h5" {...stroke} />
    </>
  ),
  support: (
    <>
      <path d="M3 12h2l2-5 4 10 4-9 2 4h4" {...stroke} />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="1.5" {...stroke} />
      <path d="m4 7 8 6 8-6" {...stroke} />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" {...stroke} />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" {...stroke} />
      <circle cx="12" cy="9" r="2.5" {...stroke} />
    </>
  ),
  arrowRight: (
    <path d="M5 12h14M13 6l6 6-6 6" {...stroke} />
  ),
};

export default function Icon({ name, size = 24, ...rest }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...rest}>
      {paths[name]}
    </svg>
  );
}
