import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // minimal paleta: blanco/negro + grises sutiles
        ink: "#000000",
        paper: "#FFFFFF",
        bone: "#FFFFFF",
        accent: "#000000",          // sin acento — todo negro
        "gray-700": "#1A1A1A",
        "gray-500": "#666666",
        "gray-300": "#CCCCCC",
        "gray-200": "#EAEAEA",
        "gray-100": "#F4F4F4",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
        brand: ["var(--font-audiowide)", "Impact", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(48px, 6vw, 88px)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "h1": ["clamp(40px, 5vw, 64px)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "h2": ["clamp(32px, 3.6vw, 48px)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "h3": ["clamp(22px, 2vw, 28px)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "h4": ["18px", { lineHeight: "1.3" }],
        "lead": ["19px", { lineHeight: "1.55" }],
        "body": ["16px", { lineHeight: "1.65" }],
        "small": ["14px", { lineHeight: "1.5" }],
        "label": ["12px", { lineHeight: "1.3", letterSpacing: "0.12em" }],
      },
    },
  },
  plugins: [],
};
export default config;
