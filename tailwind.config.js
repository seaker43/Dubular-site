// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#e6edf3",
        panel: "#0f1419",
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(16,185,129,.35), 0 8px 30px -8px rgba(16,185,129,.25)",
      },
      keyframes: {
        neonIdle: {
          "0%":   { textShadow: "0 0 0 rgba(16,185,129,0), 0 0 0 rgba(16,185,129,0)" },
          "45%":  { textShadow: "0 0 10px rgba(16,185,129,.35), 0 0 20px rgba(16,185,129,.35)" },
          "100%": { textShadow: "0 0 0 rgba(16,185,129,0), 0 0 0 rgba(16,185,129,0)" },
        }
      },
      animation: {
        neonIdle: "neonIdle 1.8s ease-in-out infinite",
      }
    }
  },
  safelist: [
    // useful if you use arbitrary values in classes
    "bg-gradient-to-b",
    "from-[#0b0f12]",
    "to-black",
    "animate-pulse-idle",
  ],
  plugins: [],
};
