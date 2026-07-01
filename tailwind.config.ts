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
        carbon: "#0A0A0A",
        "carbon-soft": "#161616",
        "carbon-line": "#242424",
        paper: "#FAFAF7",
        bone: "#F2F0EB",
        accent: "#E25200",
        "accent-soft": "#FCE9DC",
        bhp: "#E25200",
        anthracite: "#2C2F33",
        "anthracite-soft": "#3A3D42",
        "bhp-soft": "#FCE9DC",
        "gray-700": "#3A3A38",
        "gray-500": "#7A7A78",
        "gray-300": "#C9C7C2",
        "gray-200": "#E8E6E1",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
        brand: ["var(--font-audiowide)", "Impact", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "mega": ["clamp(72px, 11vw, 168px)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
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
