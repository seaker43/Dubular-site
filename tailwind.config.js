/** Final Tailwind v3 config */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./styles/globals.css"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0f13",
        surface: "#11161c",
        neon: "#36f2b9",
        neonDim: "#22c9a0"
      },
      boxShadow: {
        glow: "0 0 20px rgba(54,242,185,0.25), 0 0 40px rgba(54,242,185,0.15)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: [],
};
