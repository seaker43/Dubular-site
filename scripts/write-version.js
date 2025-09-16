const fs = require("fs");
const path = require("path");

function envCommit() {
  return (
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.CF_PAGES_COMMIT_SHA ||
    process.env.GITHUB_SHA ||
    process.env.COMMIT_REF ||
    "local-dev"
  );
}

const content = JSON.stringify({ buildTime: new Date().toISOString(), commit: envCommit() }, null, 2);

// Try multiple destinations; succeed on the first that works.
const targets=[path.resolve(process.cwd(),"public","__version.json")];

let wrote = false;
for (const file of targets) {
  try {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content, "utf8");
    console.log("✅ wrote", file);
    wrote = true;
    break;
  } catch (e) {
    console.warn("⚠️  failed to write", file, e.message);
  }
}

if (!wrote) {
  console.warn("⚠️  Could not write __version.json anywhere. Continuing without failing the build.");
}
