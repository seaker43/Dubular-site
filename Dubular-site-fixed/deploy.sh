#!/usr/bin/env bash
set -euo pipefail
pnpm run cf:build
pnpm dlx wrangler@latest pages deploy .vercel/output/static \
  --project-name=dubular-beta \
  --branch main \
  --commit-dirty=true \
  --commit-hash "$(git rev-parse --short HEAD)" \
  --commit-message "manual production deploy from Termux"
echo "Deployed. Check: https://beta.dubular.live/__version.json?v=$(date +%s)"
