import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — strict, do not improvise
        "navy-deep": "#0F1024",
        navy: "#1A1A2E",
        orange: "#FF5A1F",
        green: "#91F527",
        "off-white": "#F5F5F2",
        "gray-line": "#2A2B3F",
        "gray-text": "#8A8B9A",
      },
      fontFamily: {
        display: ["var(--font-audiowide)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Aggressive Worley-style scale via clamp()
        "hero": ["clamp(64px, 9vw, 140px)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "h1": ["clamp(48px, 6vw, 96px)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "h2": ["clamp(40px, 5vw, 72px)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "h3": ["clamp(28px, 3vw, 44px)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "h4": ["24px", { lineHeight: "1.2" }],
        "body-lg": ["20px", { lineHeight: "1.4" }],
        "body": ["17px", { lineHeight: "1.55" }],
        "body-sm": ["14px", { lineHeight: "1.5" }],
        "eyebrow": ["12px", { lineHeight: "1.3", letterSpacing: "0.15em" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
