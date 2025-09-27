"use client";
import { useState } from "react";

export default function FollowButton({
  channelId,
  initialFollowing = false,
  count,
}: {
  channelId: string;
  initialFollowing?: boolean;
  count?: number;
}) {
  const [following, setFollowing] = useState(initialFollowing);
  const [followers, setFollowers] = useState<number | undefined>(count);

  const toggle = async () => {
    const method = following ? "DELETE" : "POST";
    const res = await fetch("/api/follow", {
      method,
      headers: {
        "content-type": "application/json",
        "x-user-id": "demo-user-2",
      },
      body: JSON.stringify({ channelId }),
    });
    if (res.ok) {
      const data = await res.json();
      setFollowing(!following);
      if (typeof data.followers === "number") setFollowers(data.followers);
    }
  };

  return (
    <button
      onClick={toggle}
      className={`rounded-2xl px-4 py-2 ${
        following ? "bg-neutral-800" : "bg-cyan-600 hover:bg-cyan-500"
      }`}
    >
      {following ? "Following" : "Follow"}
      {typeof followers === "number" ? ` · ${followers}` : ""}
    </button>
  );
}
