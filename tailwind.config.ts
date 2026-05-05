import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        paper: "#FAFAF7",
        bone: "#F2F0EB",
        accent: "#E84E10",
        "gray-700": "#3A3A38",
        "gray-500": "#7A7A78",
        "gray-300": "#C9C7C2",
        "gray-200": "#E8E6E1",
        "gray-100": "#EFEDE8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
        brand: ["var(--font-audiowide)", "Impact", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display": ["clamp(56px, 7vw, 110px)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "h1": ["clamp(40px, 4.5vw, 68px)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "h2": ["clamp(32px, 3.5vw, 52px)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "h3": ["clamp(24px, 2.4vw, 32px)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h4": ["20px", { lineHeight: "1.3" }],
        "lead": ["19px", { lineHeight: "1.5" }],
        "body": ["16px", { lineHeight: "1.6" }],
        "small": ["14px", { lineHeight: "1.55" }],
        "label": ["12px", { lineHeight: "1.3", letterSpacing: "0.12em" }],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
