/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#00ffff",
          dark: "#0a0a0a",
        },
      },
      fontFamily: { sans: ["Anton", "sans-serif"] },
    },
  },
  corePlugins: { preflight: true },
  plugins: [
    function({ addVariant }) { addVariant("active-route", "&[data-active=\"true\"]") },
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-neon":       { textShadow: "0 0 10px #0ff,0 0 20px #0ff,0 0 40px #0ff" },
        ".text-neon-cyan":  { textShadow: "0 0 10px #0ff,0 0 20px #0ff,0 0 40px #0ff" },
        ".text-neon-pink":  { textShadow: "0 0 10px #f0f,0 0 20px #f0f,0 0 40px #f0f" },
        ".text-neon-red":   { textShadow: "0 0 10px #f00,0 0 20px #f00,0 0 40px #f00" },
        ".text-neon-green": { textShadow: "0 0 10px #0f0,0 0 20px #0f0,0 0 40px #0f0" },
        ".border-neon-cyan":  { boxShadow: "0 0 5px #0ff,0 0 15px #0ff,0 0 30px #0ff" },
        ".border-neon-pink":  { boxShadow: "0 0 5px #f0f,0 0 15px #f0f,0 0 30px #f0f" },
        ".border-neon-red":   { boxShadow: "0 0 5px #f00,0 0 15px #f00,0 0 30px #f00" },
        ".border-neon-green": { boxShadow: "0 0 5px #0f0,0 0 15px #0f0,0 0 30px #0f0" },
      });
    }),
  ],
};
