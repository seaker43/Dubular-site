// Lightweight client helpers for follow APIs
const JSON_HEADERS = { 'Content-Type': 'application/json' as const };

export async function follow(user_id: number, creator_id: number) {
  const r = await fetch('/api/follow', { method: 'POST', headers: JSON_HEADERS, body: JSON.stringify({ user_id, creator_id }) });
  return r.json();
}

export async function unfollow(user_id: number, creator_id: number) {
  const r = await fetch('/api/follow', { method: 'DELETE', headers: JSON_HEADERS, body: JSON.stringify({ user_id, creator_id }) });
  return r.json();
}

export async function listFollowing(user_id: number) {
  const r = await fetch(`/api/follow?user_id=${encodeURIComponent(user_id)}`);
  return r.json();
}

export async function listFollowers(creator_id: number) {
  const r = await fetch(`/api/follow?creator_id=${encodeURIComponent(creator_id)}`);
  return r.json();
}
