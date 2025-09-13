const { execSync } = require('node:child_process');
const fs = require('node:fs');
const commit = execSync('git rev-parse --short HEAD').toString().trim();
fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/__version.json', JSON.stringify({ commit, builtAt: new Date().toISOString() }));
console.log("Wrote public/__version.json", commit);
