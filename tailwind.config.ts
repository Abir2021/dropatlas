import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05050a",
        surface: "#0c0c14",
        "surface-elevated": "#12121c",
        border: "#1e1e2e",
        "border-glow": "#2a2a40",
        primary: {
          DEFAULT: "#00e5ff",
          dim: "#00b8d4",
          glow: "rgba(0, 229, 255, 0.25)",
        },
        secondary: {
          DEFAULT: "#a855f7",
          dim: "#7c3aed",
          glow: "rgba(168, 85, 247, 0.25)",
        },
        accent: {
          DEFAULT: "#f472b6",
          dim: "#ec4899",
        },
        muted: "#8b8b9e",
        success: "#22c55e",
        warning: "#f59e0b",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 229, 255, 0.15), transparent)",
        "card-glow": "linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 229, 255, 0.15)",
        "glow-lg": "0 0 40px rgba(0, 229, 255, 0.2)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.2)",
        card: "0 4px 24px -4px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.03)",
      },
    },
  },
  plugins: [],
};

export default config;
