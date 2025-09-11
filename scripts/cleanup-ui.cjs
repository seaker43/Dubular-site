/* global console */
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

const mergeTokens = (a, b) => {
  const set = new Set([...a.split(/\s+/), ...b.split(/\s+/)].filter(Boolean));
  return [...set].join(" ");
};

let changedCount = 0;

for (const f of files) {
  let src = fs.readFileSync(f, "utf8");
  let before = src;

  // remove bogus jsx={true|false} props inside tags
  src = src.replace(/\s+jsx=\{(?:true|false)\}/g, "");

  // merge duplicate className="..." attributes
  // <tag ... className="a" ... className="b" ...>
  // groups: 1=<before> 2=quote1 3=val1 4=<mid> 5=quote2 6=val2 7=<after>
  const re =
    /(<[^>]*?)\bclassName=(["'])([^"']*?)\2([^>]*?)\bclassName=(["'])([^"']*?)\5([^>]*>)/gs;

  // repeatedly collapse pairs until none remain
  for (;;) {
    const next = src.replace(
      re,
      (_m, a, q1, c1, mid, _q2, c2, tail) =>
        `${a}className=${q1}${mergeTokens(c1, c2)}${q1}${mid}${tail}`
    );
    if (next === src) break;
    src = next;
  }

  if (src !== before) {
    fs.writeFileSync(f, src);
    console.log("fixed:", f);
    changedCount++;
  }
}

console.log(`\n✅ Cleanup complete: ${changedCount} file(s) updated.`);
