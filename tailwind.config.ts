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
        bone: "#FAFAF7",
        accent: "#6CD4CE",
        copper: "#E25200",
        "gray-700": "#333333",
        "gray-500": "#666666",
        "gray-400": "#999999",
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
        "mega": ["clamp(80px, 11vw, 168px)", { lineHeight: "0.9", letterSpacing: "-0.045em" }],
        "display": ["clamp(40px, 4.4vw, 64px)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "hero": ["clamp(32px, 3.4vw, 48px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1": ["clamp(28px, 2.8vw, 40px)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h2": ["clamp(22px, 2.0vw, 28px)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "h3": ["clamp(17px, 1.4vw, 20px)", { lineHeight: "1.3", letterSpacing: "-0.005em" }],
        "h4": ["15px", { lineHeight: "1.35" }],
        "lead": ["clamp(16px, 1.2vw, 18px)", { lineHeight: "1.55" }],
        "body": ["15px", { lineHeight: "1.6" }],
        "small": ["13px", { lineHeight: "1.5" }],
        "label": ["11px", { lineHeight: "1.2", letterSpacing: "0.08em" }],
        "micro": ["10.5px", { lineHeight: "1.2", letterSpacing: "0.1em" }],
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
