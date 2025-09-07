/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
=======
  darkMode: 'class',
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}"],
>>>>>>> 6b8fcbaf (chore: clean up duplicates; unify BottomBar + thumbnails)
  theme: {
    extend: {
      colors: {
        neonGreen: "#39ff14", // keep neon green available for accents
      },
    },
  },
  plugins: [],
};
