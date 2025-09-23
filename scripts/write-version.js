const { execSync } = require("child_process");
const fs = require("fs");

let commit = "unknown";
try { commit = execSync("git rev-parse --short HEAD").toString().trim(); } catch {}
const buildTime = new Date().toISOString();

fs.writeFileSync(
  "./public/__version.json",
  JSON.stringify({ commit, buildTime }, null, 2)
);

console.log("✅ Wrote build metadata:", { commit, buildTime });
