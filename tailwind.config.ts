import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        mist: "#E2E8F0",
        coral: "#F97316",
        sky: "#38BDF8",
        sand: "#FFF7ED"
      },
      fontFamily: {
        sans: ["'Avenir Next'", "Avenir", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 60px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
