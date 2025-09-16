const fs = require("fs"), path = require("path");
const file = path.resolve(process.cwd(), "public", "__version.json");
fs.mkdirSync(path.dirname(file), { recursive: true });
const commit =
  process.env.CF_PAGES_COMMIT_SHA ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.GITHUB_SHA ||
  process.env.COMMIT_REF ||
  "local-dev";
fs.writeFileSync(file, JSON.stringify({ buildTime: new Date().toISOString(), commit }, null, 2), "utf8");
console.log("✅ wrote", file);
