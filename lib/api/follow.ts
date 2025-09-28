export async function follow(user_id: number, creator_id: number) {
  return fetch("/api/follow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id, creator_id })
  }).then(r => r.json());
}

export async function unfollow(user_id: number, creator_id: number) {
  return fetch("/api/follow", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id, creator_id })
  }).then(r => r.json());
}

export async function listFollowing(user_id: number) {
  return fetch(`/api/follow?user_id=${user_id}`).then(r => r.json());
}
