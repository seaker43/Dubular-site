// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // if you later use the /app router
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          neon: "#06b6d4", // cyan-500 (for accents)
        },
      },
    },
  },
  plugins: [],
};
