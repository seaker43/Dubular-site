/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#22d3ee",
          emerald: "#10b981",
        },
      },
      boxShadow: {
        neon: "0 0 6px rgba(34,211,238,0.6), 0 0 16px rgba(34,211,238,0.35)",
      },
    },
  },
  plugins: [],
};
