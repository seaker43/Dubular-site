const fs = require("fs");
const { execSync } = require("child_process");

// get tracked JS/JSX/TSX files
const files = execSync("git ls-files '*.js' '*.jsx' '*.tsx'", {
  stdio: ["ignore", "pipe", "inherit"],
})
  .toString()
  .trim()
  .split("\n")
  .filter(Boolean);

// regex: <tag ... className="a" ... className="b" ...>
const re =
  /(<[^>]*?)\bclassName=(["'])([^"']*)\2([^>]*?)\bclassName=(["'])([^"']*)\5([^>]*?>)/gs;

let changed = 0;
for (const f of files) {
  let src = fs.readFileSync(f, "utf8");
  let out = src.replace(
    re,
    (_, a, q1, c1, mid, q2, c2, tail) =>
      `${a}className=${q1}${c1} ${c2}${q1}${mid}${tail}`
  );
  if (out !== src) {
    fs.writeFileSync(f, out);
    console.log("fixed", f);
    changed++;
  }
}
console.log(`\nMerged duplicate className in ${changed} file(s).`);
