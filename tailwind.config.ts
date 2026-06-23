import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#2B2B2B",         // grafito
        paper: "#FFFFFF",
        bone: "#FFFFFF",
        accent: "#6CD4CE",      // calipso óxido de cobre
        copper: "#D97634",      // naranjo cobrizo
        "gray-700": "#3A3A3A",
        "gray-500": "#7A7A7A",
        "gray-300": "#CCCCCC",
        "gray-200": "#E5E5E5",
        "gray-100": "#F2F2F2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-inter)", "ui-monospace", "monospace"],
        brand: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(72px, 12vw, 192px)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "hero": ["clamp(56px, 9vw, 144px)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "h1": ["clamp(40px, 5vw, 72px)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "h2": ["clamp(32px, 3.6vw, 56px)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "h3": ["clamp(20px, 1.8vw, 28px)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h4": ["16px", { lineHeight: "1.3", letterSpacing: "0" }],
        "lead": ["clamp(18px, 1.4vw, 22px)", { lineHeight: "1.45", letterSpacing: "-0.005em" }],
        "body": ["15px", { lineHeight: "1.55" }],
        "small": ["13px", { lineHeight: "1.4" }],
        "label": ["11px", { lineHeight: "1.2", letterSpacing: "0.18em" }],
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        full: "9999px",  // solo para círculos (formas primitivas)
      },
    },
  },
  plugins: [],
};
export default config;
