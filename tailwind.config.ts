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
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
