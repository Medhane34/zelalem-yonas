import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
   './types/**/*.{js,ts,jsx,tsx,mdx}',     // ← ADD THIS
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      /* ---------- BRAND COLORS (Law-Firm Blue + Gold) ---------- */
      colors: {
        brand: {
          // Primary blue – trust & professionalism
          50: "#e6f0ff",
          100: "#b3d1ff",
          200: "#80b3ff",
          300: "#4d94ff",
          400: "#1a75ff",
          500: "#005bdb",   // **DEFAULT** – main brand color
          600: "#0047b3",
          700: "#00358a",
          800: "#002362",
          900: "#001239",
        },
        accent: {
          // Gold accent – prestige
          50: "#fff9e6",
          100: "#ffedae",
          200: "#ffe083",
          300: "#ffd34d",
          400: "#ffc61a",
          500: "#ffba00",   // **DEFAULT** – CTA, highlights
          600: "#e6a300",
          700: "#cc8c00",
          800: "#b37400",
          900: "#995c00",
        },

        /* Text & backgrounds (light/dark) */
        text: {
          light: "#1f2937", // gray-800
          dark: "#f9fafb",  // gray-50
        },
        background: {
          light: "#ffffff",
          dark: "#080404", // slate-900
        },

        /* Gradient helpers (optional) */
        gradient: {
          from: "#005bdb",
          to: "#ffba00",
        },
      },

      /* ---------- BACKGROUND IMAGES ---------- */
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #005bdb 0%, #ffba00 100%)",
        "gradient-badge": "linear-gradient(90deg, #0047b3 0%, #e6a300 100%)",
      },

      /* ---------- SHADOWS ---------- */
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.12)",
        "xl-dark": "0 20px 25px -5px rgba(0,0,0,0.3), 0 10px 10px -5px rgba(0,0,0,0.2)",
      },
      /* ---------- TYPOGRAPHY ---------- */
      fontSize: {
        heading: [
          "1.875rem", // 30px
          {
            lineHeight: "2.25rem",
            fontWeight: "700",
            letterSpacing: "-0.025em",
          },
        ],
        subheading: [
          "1.5rem",
          { lineHeight: "2rem", fontWeight: "600" },
        ],
        body: [
          "1rem",
          { lineHeight: "1.6", fontWeight: "400" },
        ],
        small: [
          "0.875rem",
          { lineHeight: "1.4", fontWeight: "400" },
        ],
      },
      /* ---------- ANIMATION (Framer Motion friendly) ---------- */
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "pulse-gold": "pulseGold 2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        pulseGold: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(255,186,0,0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(255,186,0,0)" },
        },
      },
      /* ---------- SCREENS ---------- */
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;