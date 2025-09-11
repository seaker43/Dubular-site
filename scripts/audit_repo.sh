#!/usr/bin/env bash
set -euo pipefail

ROOT="$(pwd)"
OUT="repo-audit"
mkdir -p "$OUT"

echo "== Repo audit started =="
echo "Writing reports to: $OUT/"

# Detect case conflicts
echo "## Case-collisions" > "$OUT/case_collisions.txt"
find . -type f -not -path "./.git/*" -printf "%P\n" | awk '
{ lc=tolower($0); map[lc]=map[lc] ? map[lc] ORS $0 : $0 }
END { for (k in map) { split(map[k],a,"\n"); if (length(a)>1) { print "----"; print map[k] } } }
' >> "$OUT/case_collisions.txt"

# Components
echo "## Components" > "$OUT/components.txt"
find components -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.tsx" \) -print | sort >> "$OUT/components.txt" || true

# Pages
echo "## Pages" > "$OUT/pages.txt"
find pages -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.tsx" \) -print | sort >> "$OUT/pages.txt" || true

# Styles
echo "## Stylesheets" > "$OUT/styles.txt"
find styles -type f -name "*.css" -print | sort >> "$OUT/styles.txt" || true

# Thumb implementations
echo "## Thumbnail implementations" > "$OUT/thumb_impls.txt"
grep -RIl --include='*.{js,jsx,tsx}' -e 'ThumbnailCard' -e 'Thumb' -e 'MediaLoopRow' components pages || true >> "$OUT/thumb_impls.txt"

# Old ThumbnailCard refs
echo "## References to ThumbnailCard" > "$OUT/thumbnailcard_refs.txt"
grep -RIn --include='*.{js,jsx,tsx}' 'ThumbnailCard' . | grep -v '\.git' || true >> "$OUT/thumbnailcard_refs.txt"

# Header imports
echo "## Header imports" > "$OUT/header_imports.txt"
grep -RIn --include='*.{js,jsx,tsx}' "from ['\"]/.*Header" pages components || true >> "$OUT/header_imports.txt"

# _app.js globals
echo "## _app.css imports" > "$OUT/app_imports.txt"
if [ -f pages/_app.js ]; then
  grep -n "styles/globals.css" pages/_app.js || true >> "$OUT/app_imports.txt"
else
  echo "pages/_app.js not found" >> "$OUT/app_imports.txt"
fi

# Tailwind safelist
echo "## Tailwind safelist" > "$OUT/tailwind_safelist.txt"
if [ -f tailwind.config.js ]; then
  if grep -q 'safelist' tailwind.config.js; then
    echo "safelist exists" >> "$OUT/tailwind_safelist.txt"
    grep -n 'safelist' -n tailwind.config.js >> "$OUT/tailwind_safelist.txt"
  else
    echo "safelist MISSING" >> "$OUT/tailwind_safelist.txt"
  fi
else
  echo "tailwind.config.js not found" >> "$OUT/tailwind_safelist.txt"
fi

# Unused images
echo "## Possibly unused images in public/" > "$OUT/unused_images.txt"
while IFS= read -r -d '' f; do
  name="$(basename "$f")"
  if ! grep -RIl --exclude-dir='.git' --exclude-dir='node_modules' "$name" . >/dev/null 2>&1; then
    echo "$f"
  fi
done < <(find public -type f -print0) >> "$OUT/unused_images.txt"

echo "== Done. Open the $OUT/ folder to review =="
