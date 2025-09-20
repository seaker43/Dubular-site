/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  safelist: [
    "bg-neutral-950","text-cyan-400",
    { pattern: /(container|grid|flex)/ },
    { pattern: /(items|justify)-(start|center|end|between)/ },
    { pattern: /(gap|space-[xy]|p[trblxy]?|m[trblxy]?)-\d+/ },
    { pattern: /(w|h|max-w)-[a-z0-9-]+/ },
    { pattern: /rounded(-[a-z0-9-]+)?/ },
    { pattern: /shadow(-[a-z0-9-]+)?/ },
    { pattern: /ring(-[a-z0-9-]+)?/ },
    { pattern: /(bg|text|from|via|to)-(neutral|slate|gray|zinc|cyan|blue|emerald|red|pink)-(50|100|200|300|400|500|600|700|800|900|950)/ },
  ],
  plugins: [],
};
