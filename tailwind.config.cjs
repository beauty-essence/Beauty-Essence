/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      primary: ["Cormorant Garamond", "sans-serif"],
      secondary: ["Jost", "sans-serif"]
    },
    colors: {
      primary: "#F1CD84",
      "primary-light": "#FFEBCF",
      secondary: "#31392F",
      "secondary-text": "#77846E",
      "bg-white": "FEF8F5",
      white: "#FFFFFF",
      black: "#000000",
      "button-dark": "#222222"
    },
    extend: {
      keyframes: {
        disappear: {
          "0%:": { opacity: 1 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0, visibility: "hidden" }
        },
        pulseRotate: {
          "0%": { transform: "scale(1)" },
          "20%": { transform: "scale(1.15)" },
          "30%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(-5deg)" },
          "70%": { transform: "rotate(5deg)" },
          "90%": { transform: "rotate(-5deg)" },
          "100%": { transform: "scale(1)" }
        }
      }
    },
    animation: {
      preloader: "disappear 4s ease-in-out forwards",
      "pulse-rotate": "pulseRotate 3s infinite ease-in-out"
    }
  },
  plugins: []
}
