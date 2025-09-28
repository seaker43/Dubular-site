const fs = require('fs');
const path = require('path');

// Where next-on-pages outputs the worker for Pages
const outDir = path.join('.vercel','output','static','_worker.js');

// Ensure dir exists (build creates it, but be safe for local runs)
fs.mkdirSync(outDir, { recursive: true });

// D1 binding: change ID if your DB changes
const D1_ID = process.env.CF_D1_DB_ID || 'e26195c7-2b3b-4804-9c78-298daf52dda9';

/**
 * Cloudflare accepts a metadata.json next to _worker.js.
 * The shape below ("bindings": [...]) is honored by Pages.
 */
const metadata = {
  bindings: [
    { name: 'DB', type: 'd1', id: D1_ID }
  ]
};

fs.writeFileSync(path.join(outDir, 'metadata.json'),
  JSON.stringify(metadata, null, 2),
  'utf8'
);

console.log('✅ Wrote Pages metadata with D1 binding', metadata);
