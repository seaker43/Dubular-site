const fs = require("fs");
const path = require("path");

// Use the process CWD to avoid surprises in CI environments
const publicDir = path.resolve(process.cwd(), "public");
const versionFile = path.join(publicDir, "__version.json");

// Collect a commit SHA from common CI providers
const commit =
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.CF_PAGES_COMMIT_SHA ||
  process.env.GITHUB_SHA ||
  process.env.COMMIT_REF ||
  "local-dev";

const version = {
  buildTime: new Date().toISOString(),
  commit
};

// Ensure public dir exists (recursive works even if already present)
fs.mkdirSync(publicDir, { recursive: true });

// Write the file
fs.writeFileSync(versionFile, JSON.stringify(version, null, 2), "utf8");
console.log("✅ Version file written:", versionFile, version);
