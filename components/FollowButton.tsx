"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

type Props = {
  creatorId: string;
  initiallyFollowing: boolean;
  size?: "sm" | "md" | "lg";
};

export default function FollowButton({
  creatorId,
  initiallyFollowing,
  size = "md",
}: Props) {
  const [isFollowing, setIsFollowing] = useState(initiallyFollowing);
  const [pending, start] = useTransition();
  const r = useRouter();

  async function toggle() {
    const next = !isFollowing;
    setIsFollowing(next);
    try {
      const method = next ? "POST" : "DELETE";
      const res = await fetch(
        `/api/follows?creator_id=${encodeURIComponent(creatorId)}`,
        {
          method,
          headers: { "content-type": "application/json" },
        },
      );
      if (!res.ok)
        throw new Error(await res.text().catch(() => "Request failed"));
      start(() => r.refresh());
    } catch (err) {
      setIsFollowing(!next);
      console.error("follow toggle failed", err);
    }
  }

  const sizeCls =
    size === "sm"
      ? "h-8 text-sm px-3"
      : size === "lg"
        ? "h-12 text-base px-5"
        : "h-10 text-sm px-4";

  return (
    <button
      onClick={toggle}
      disabled={pending}
      className={[
        "rounded-xl font-medium transition",
        sizeCls,
        isFollowing
          ? "bg-neutral-200 hover:bg-neutral-300"
          : "bg-black text-white hover:opacity-90",
        pending ? "opacity-60 cursor-not-allowed" : "",
      ].join(" ")}
      aria-pressed={isFollowing}
      aria-busy={pending}
    >
      {pending ? "…" : isFollowing ? "Following" : "Follow"}
    </button>
  );
}
