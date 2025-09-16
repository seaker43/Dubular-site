const fs = require("fs");
const path = require("path");

const versionFile = path.join(__dirname, "../public/__version.json");
const version = {
  buildTime: new Date().toISOString(),
  commit: process.env.VERCEL_GIT_COMMIT_SHA || process.env.CF_PAGES_COMMIT_SHA || "local-dev"
};

fs.mkdirSync(path.dirname(versionFile), { recursive: true });
fs.writeFileSync(versionFile, JSON.stringify(version, null, 2), "utf8");

console.log("✅ Version file written:", versionFile);
