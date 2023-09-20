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
          "50%": { opacity: 0.5 },
          "100%": { opacity: 0 }
        }
      }
    },
    animation: {
      preloader: "disappear 5s ease-in-out 1"
    }
  },
  plugins: []
}
