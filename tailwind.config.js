/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // use 'class' so globals.css can force dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dubular: {
          cyan: "#0ff",   // neon cyan
          red: "#ff0033", // neon red
        },
      },
      boxShadow: {
        neon: "0 0 10px #0ff, 0 0 20px #0ff",
        "neon-red": "0 0 10px #ff0033, 0 0 20px #ff0033",
      },
      keyframes: {
        neonPulse: {
          "0%, 100%": { textShadow: "0 0 5px #0ff, 0 0 10px #0ff" },
          "50%": { textShadow: "0 0 20px #0ff, 0 0 30px #0ff" },
        },
        neonIdle: {
          "0%, 100%": { textShadow: "0 0 2px #0ff, 0 0 6px #0ff" },
          "50%": { textShadow: "0 0 4px #0ff, 0 0 12px #0ff" },
        },
      },
      animation: {
        "pulse-neon": "neonPulse 1.5s infinite alternate",
        "idle-neon": "neonIdle 2s infinite alternate",
      },
    },
  },
  plugins: [],
};
