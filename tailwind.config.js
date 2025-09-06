module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: { 400: "#22f08b", 500: "#18e27a", 600: "#13c769" }
      },
      boxShadow: {
        neon: "0 0 24px rgba(24,226,122,.45)",
        neonLg: "0 0 40px rgba(24,226,122,.55)"
      }
    }
  },
  plugins: []
}
