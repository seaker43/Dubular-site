-- Total number of follows
SELECT COUNT(*) AS total_follows FROM follows;

-- Top creators by follower count
SELECT creator_id, COUNT(*) AS follower_count
FROM follows
GROUP BY creator_id
ORDER BY follower_count DESC;

-- Top users by creators they follow
SELECT follower_id, COUNT(*) AS creator_count
FROM follows
GROUP BY follower_id
ORDER BY creator_count DESC;
