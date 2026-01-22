import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "forest-green": {
          DEFAULT: "#2D5A27",
          50: "#EAF3E9",
          100: "#C9E1C7",
          200: "#A3CFA0",
          300: "#7DBD79", // More lively green
          400: "#57AB52",
          500: "#2D5A27", // Main Brand Color
          600: "#244920",
          700: "#1B3918",
          800: "#132811",
          900: "#0A1809",
        },
        "warm-wood": {
          DEFAULT: "#8B572A",
          50: "#FDF9F5",
          100: "#F6EAE0",
          200: "#EEDBCB",
          300: "#E5CAB6",
          400: "#DDBBA1",
          500: "#8B572A", // Secondary Brand Color
          600: "#704622",
          700: "#553519",
          800: "#3A2411",
          900: "#1F1309",
        },
        "soft-beige": "#F9F7F2",
        "deep-charcoal": "#333333",
        "earth-gray": "#757575",
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
