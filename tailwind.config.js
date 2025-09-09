// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{css}"
  ],
  safelist: [
    "thumb-row","thumb-card","thumb-img","thumb-title","live-badge",
    "glow-dual","glow-red","glow-cyan" // and "glow-blue" if you use it
  ],
  theme: { extend: {} },
  plugins: [],
};
