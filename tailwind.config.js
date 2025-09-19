/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: "#22d3ee",
          neon: "#00ffff",
        },
        neon: {
          green: "#39ff14",
          red: "#ff073a",
        },
      },
      boxShadow: {
        "neon-green": "0 0 8px #39ff14, 0 0 16px #39ff14",
        "neon-cyan": "0 0 8px #00ffff, 0 0 16px #00ffff",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
