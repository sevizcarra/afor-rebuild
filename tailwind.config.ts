import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#FFFFFF",
        bone: "#FFFFFF",
        accent: "#6CD4CE",   // calipso
        copper: "#D97634",   // naranjo cobrizo
        "gray-700": "#333333",
        "gray-500": "#666666",
        "gray-300": "#CCCCCC",
        "gray-200": "#E6E6E6",
        "gray-100": "#F4F4F4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-inter)", "ui-monospace", "monospace"],
        brand: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "mega": ["clamp(96px, 16vw, 240px)", { lineHeight: "0.85", letterSpacing: "-0.05em" }],
        "display": ["clamp(64px, 9vw, 144px)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "hero": ["clamp(48px, 6vw, 96px)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "h1": ["clamp(40px, 5vw, 72px)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "h2": ["clamp(32px, 3.6vw, 56px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h3": ["clamp(22px, 2vw, 32px)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h4": ["18px", { lineHeight: "1.35" }],
        "lead": ["clamp(18px, 1.4vw, 22px)", { lineHeight: "1.45" }],
        "body": ["16px", { lineHeight: "1.55" }],
        "small": ["14px", { lineHeight: "1.4" }],
        "label": ["12px", { lineHeight: "1.2", letterSpacing: "0.06em" }],
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
