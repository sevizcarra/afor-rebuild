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
        "mega": ["clamp(56px, 7vw, 104px)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display": ["clamp(32px, 3.4vw, 48px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero": ["clamp(24px, 2.4vw, 34px)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "h1": ["clamp(22px, 2.0vw, 28px)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "h2": ["clamp(18px, 1.6vw, 22px)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "h3": ["16px", { lineHeight: "1.35", letterSpacing: "-0.005em" }],
        "h4": ["14px", { lineHeight: "1.4" }],
        "lead": ["clamp(16px, 1.15vw, 17px)", { lineHeight: "1.55" }],
        "body": ["14px", { lineHeight: "1.6" }],
        "small": ["12.5px", { lineHeight: "1.5" }],
        "label": ["10.5px", { lineHeight: "1.2", letterSpacing: "0.1em" }],
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
