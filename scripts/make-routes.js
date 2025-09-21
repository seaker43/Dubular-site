const fs = require("fs");
const path = require("path");

const outDir = path.resolve(".open-next");
const routesPath = path.join(outDir, "_routes.json");

// Ensure .open-next exists
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Write/overwrite _routes.json
const data = {
  version: 1,
  include: ["/*"],
  exclude: ["/_static/*", "/favicon.ico"]
};
fs.writeFileSync(routesPath, JSON.stringify(data, null, 2));
console.log("✅ Wrote", routesPath);
