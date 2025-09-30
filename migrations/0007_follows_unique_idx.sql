-- Remove stray duplicates just in case
DELETE FROM follows
WHERE rowid NOT IN (
  SELECT MIN(rowid)
  FROM follows
  GROUP BY follower_id, following_id
);
-- Enforce uniqueness
CREATE UNIQUE INDEX IF NOT EXISTS idx_follows_unique
  ON follows(follower_id, following_id);
