export const revalidate = 0;
export default async function FollowCounts({
  handle,
  className = "",
}: {
  handle: string;
  className?: string;
}) {
  // fetch both lists in parallel; avoid caching so UI updates right after a follow/unfollow
  const [followersRes, followingRes] = await Promise.all([
    fetch(`/api/followers?handle=${encodeURIComponent(handle)}`, {
      cache: "no-store",
    }),
    fetch(`/api/following?handle=${encodeURIComponent(handle)}`, {
      cache: "no-store",
    }),
  ]);
  if (!followersRes.ok || !followingRes.ok) {
    return (
      <div className={`text-xs text-red-500 ${className}`}>
        error loading counts
      </div>
    );
  }
  const followersJson = await followersRes.json();
  const followingJson = await followingRes.json();
  const followers = Array.isArray(followersJson.followers)
    ? followersJson.followers.length
    : 0;
  const following = Array.isArray(followingJson.following)
    ? followingJson.following.length
    : 0;

  return (
    <div className={`flex items-center gap-4 text-sm ${className}`}>
      <span>
        <strong>{followers}</strong> Followers
      </span>
      <span>
        <strong>{following}</strong> Following
      </span>
    </div>
  );
}
