const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public');
const outFile = path.join(outDir, '__version.json');

// make sure the directory exists
fs.mkdirSync(outDir, { recursive: true });

// collect useful build metadata
const data = {
  commit:
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.CF_PAGES_COMMIT_SHA ||
    process.env.GITHUB_SHA ||
    '',
  branch:
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.CF_PAGES_BRANCH ||
    process.env.GITHUB_REF_NAME ||
    '',
  builtAt: new Date().toISOString(),
};

// write the file (pretty-printed)
fs.writeFileSync(outFile, JSON.stringify(data, null, 2), 'utf8');
console.log(`Wrote ${outFile}`);
