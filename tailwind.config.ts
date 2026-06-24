import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1B22",
        paper: "#FFFFFF",
        bone: "#F7F8F9",       // gris muy claro para cards / secciones alternas
        accent: "#3FAFA9",     // óxido de cobre, tono más profundo y corporativo
        "accent-soft": "#E8F6F5",
        copper: "#3FAFA9",     // alias
        bhp: "#E25200",        // naranjo BHP para acentos puntuales
        "bhp-soft": "#FCE9DC",
        "gray-700": "#2A3942",
        "gray-500": "#5B6B75",
        "gray-400": "#8A98A2",
        "gray-300": "#C3CCD3",
        "gray-200": "#E3E8EC",
        "gray-100": "#F1F4F6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        brand: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(40px, 4.6vw, 64px)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "hero": ["clamp(28px, 2.8vw, 40px)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "h1": ["clamp(24px, 2.2vw, 32px)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "h2": ["clamp(20px, 1.6vw, 24px)", { lineHeight: "1.25", letterSpacing: "-0.005em" }],
        "h3": ["17px", { lineHeight: "1.35" }],
        "h4": ["15px", { lineHeight: "1.4" }],
        "lead": ["clamp(16px, 1.15vw, 18px)", { lineHeight: "1.6" }],
        "body": ["15px", { lineHeight: "1.65" }],
        "small": ["13.5px", { lineHeight: "1.55" }],
        "label": ["11.5px", { lineHeight: "1.2", letterSpacing: "0.06em" }],
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "10px",
        xl: "14px",
        "2xl": "20px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14, 27, 34, 0.04), 0 4px 12px rgba(14, 27, 34, 0.04)",
        "card-hover": "0 2px 4px rgba(14, 27, 34, 0.06), 0 12px 28px rgba(14, 27, 34, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
