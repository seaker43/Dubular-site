#!/bin/bash
set -e

DB="dubular-db"

echo "=== Total follows ==="
npx wrangler d1 execute $DB --remote \
  --command "SELECT COUNT(*) AS total_follows FROM follows;" --json | jq .

echo -e "\n=== Top creators by followers ==="
npx wrangler d1 execute $DB --remote \
  --command "SELECT creator_id, COUNT(*) AS follower_count FROM follows GROUP BY creator_id ORDER BY follower_count DESC;" --json | jq .

echo -e "\n=== Top followers by creators ==="
npx wrangler d1 execute $DB --remote \
  --command "SELECT follower_id, COUNT(*) AS creator_count FROM follows GROUP BY follower_id ORDER BY creator_count DESC;" --json | jq .
