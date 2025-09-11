#!/usr/bin/env bash
set -euo pipefail

APPLY=0
[[ "${1:-}" == "--apply" ]] && APPLY=1

say() { printf "\033[1;36m%s\033[0m\n" "$*"; }
warn() { printf "\033[1;33m%s\033[0m\n" "$*"; }
err() { printf "\033[1;31m%s\033[0m\n" "$*" >&2; }

ROOT="$(pwd)"
DATE_TAG="$(date +%Y%m%d-%H%M%S)"

# --- sanity checks -----------------------------------------------------------
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  err "This is not a git repo."
  exit 1
fi

if [[ $APPLY -eq 1 ]]; then
  # ensure clean index
  if ! git diff --quiet || ! git diff --cached --quiet; then
    err "You have uncommitted changes. Commit/stash before applying."
    exit 1
  fi
fi

# --- helper: sed-in-place cross platform ------------------------------------
sedi() {
  # sed -i (mac vs gnu)
  if sed --version >/dev/null 2>&1; then
    sed -i "$@"
  else
    sed -i '' "$@"
  fi
}

# --- 0) create safety branch -------------------------------------------------
say "Creating safety branch (dry-run shows the command)…"
BRANCH="cleanup/${DATE_TAG}"
echo "  git checkout -b ${BRANCH}"
if [[ $APPLY -eq 1 ]]; then
  git checkout -b "$BRANCH"
fi

# --- 1) ensure Thumb component exists ---------------------------------------
THUMB_PATH="components/Thumb/Thumb.jsx"
if [[ ! -f "$THUMB_PATH" ]]; then
  say "Thumb component missing — will create:"
  echo "  $THUMB_PATH"
  if [[ $APPLY -eq 1 ]]; then
    mkdir -p "$(dirname "$THUMB_PATH")"
    cat > "$THUMB_PATH" <<'JSX'
/* components/Thumb/Thumb.jsx */
export default function Thumb({
  title = "Untitled",
  image = "/placeholder.svg",
  live = false,
  glow = "dual", /* "dual" | "red" | "cyan" */
  href = "#",
  square = false,
  priority = false,
}) {
  const cardGlow =
    glow === "red" ? "glow-red" : glow === "cyan" ? "glow-cyan" : "glow-dual";
  const aspect = square ? "ratio-1x1" : "ratio-16x9";

  return (
    <a href={href} className="block shrink-0" draggable="false">
      <div className={`thumb-card ${cardGlow}`} style={{ width: "min(86vw, 360px)" }}>
        <div className={`ratio ${aspect}`}>
          <img
            src={image}
            alt={title}
            className="thumb-img"
            loading={priority ? "eager" : "lazy"}
            fetchpriority={priority ? "high" : "auto"}
            decoding="async"
            draggable="false"
            onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
          />
          {live && <span className="live-badge">LIVE</span>}
          <div className="thumb-title">{title}</div>
        </div>
      </div>
    </a>
  );
}
JSX
  fi
else
  say "Thumb component found: $THUMB_PATH"
fi

# --- 2) replace ThumbnailCard imports/usages with Thumb ----------------------
say "Scanning for ThumbnailCard usages…"
MAP_FILE="repo-audit/thumbnailcard_refs.txt"
mkdir -p repo-audit
grep -RIn --include='*.{js,jsx,tsx}' 'ThumbnailCard' . | grep -v '\.git' \
  > "$MAP_FILE" || true

if [[ -s "$MAP_FILE" ]]; then
  say "Will replace ThumbnailCard → Thumb and update imports."
  while IFS= read -r line; do
    FILE="${line%%:*}"
    echo "  touch: $FILE"
    if [[ $APPLY -eq 1 ]]; then
      # swap component name
      sedi 's/\bThumbnailCard\b/Thumb/g' "$FILE"
      # common import patterns → new path
      sedi 's#from\s\+["'\''][.\/]*components\/ThumbnailCard["'\'']#from "components/Thumb/Thumb"#g' "$FILE"
      sedi 's#["'\'']\.\.\/components\/ThumbnailCard["'\'']#"components/Thumb/Thumb"#g' "$FILE"
      sedi 's#["'\'']\.\.\/\.\.\/components\/ThumbnailCard["'\'']#"components/Thumb/Thumb"#g' "$FILE"
    fi
  done < "$MAP_FILE"
else
  say "No ThumbnailCard references found. Good."
fi

# --- 3) delete old components/ThumbnailCard.jsx if present -------------------
OLD_CARD="components/ThumbnailCard.jsx"
if [[ -f "$OLD_CARD" ]]; then
  warn "Found legacy file: $OLD_CARD (will remove)."
  if [[ $APPLY -eq 1 ]]; then
    git rm -q "$OLD_CARD"
  fi
fi

# --- 4) ensure Tailwind safelist has classes used by Thumb -------------------
TL="tailwind.config.js"
NEEDLE="safelist"
WANTED_REGEX='glow-(red|cyan|dual)|ratio-(16x9|1x1)|thumb-card|thumb-img|live-badge|thumb-title|no-scrollbar'
SAFELIST_BLOCK=$(
cat <<'CFG'
  safelist: [
    'glow-dual','glow-red','glow-cyan',
    'ratio-16x9','ratio-1x1',
    'thumb-card','thumb-img','thumb-title','live-badge','no-scrollbar'
  ],
CFG
)

if [[ -f "$TL" ]]; then
  if ! grep -q "safelist" "$TL"; then
    warn "tailwind.config.js has no safelist — will inject."
    if [[ $APPLY -eq 1 ]]; then
      # insert after the opening module.exports = { line
      sedi "0,/module\.exports\s*=\s*{/{s//module.exports = {\n$SAFELIST_BLOCK/}" "$TL"
    fi
  else
    say "Safelist exists — will ensure required classes are present."
    if [[ $APPLY -eq 1 ]]; then
      # crude append if any of our tokens are missing
      if ! grep -Eq "$WANTED_REGEX" "$TL"; then
        sedi "s/safelist:\s*\[/safelist: [\n    'glow-dual','glow-red','glow-cyan','ratio-16x9','ratio-1x1','thumb-card','thumb-img','thumb-title','live-badge','no-scrollbar',/g" "$TL"
      fi
    fi
  fi
else
  err "tailwind.config.js not found — skipping safelist step."
fi

# --- 5) ensure globals has helper classes (ratio/no-scrollbar) --------------
GL="styles/globals.css"
if [[ -f "$GL" ]]; then
  if ! grep -q ".no-scrollbar" "$GL"; then
    warn "Adding .no-scrollbar helpers to globals.css"
    if [[ $APPLY -eq 1 ]]; then
      cat >> "$GL" <<'CSS'

/* Helpers required by Thumb/MediaLoopRow */
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.no-scrollbar::-webkit-scrollbar { display: none; }
.ratio { position: relative; width: 100%; overflow: hidden; }
.ratio-16x9 { aspect-ratio: 16 / 9; }
.ratio-1x1 { aspect-ratio: 1 / 1; }
CSS
    fi
  fi
else
  err "styles/globals.css not found."
fi

# --- 6) commit ---------------------------------------------------------------
say "Commit plan:"
echo "  git add -A"
echo "  git commit -m 'chore(cleanup): standardize on components/Thumb, update imports, add Tailwind safelist, remove legacy ThumbnailCard'"
if [[ $APPLY -eq 1 ]]; then
  git add -A
  git commit -m "chore(cleanup): standardize on components/Thumb, update imports, add Tailwind safelist, remove legacy ThumbnailCard"
fi

say "Done."
if [[ $APPLY -eq 0 ]]; then
  warn "Dry-run only. Re-run with --apply to make changes."
else
  say "You are on branch: $BRANCH"
  echo "Optional: git push -u origin $BRANCH"
fi
