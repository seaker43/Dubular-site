/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { cyan: "#00e5ff", pink: "#ff4dff", lime: "#b3ff3b" }
      },
      borderRadius: { "2xl": "1rem" },
    },
  },
  plugins: [],
};
