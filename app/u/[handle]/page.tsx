"use client";

import FollowButton from "@/components/FollowButton";
import { useParams } from "next/navigation";

export default function UserPublicPage() {
  const params = useParams<{ handle: string }>();
  const handle = typeof params?.handle === "string" ? params.handle : "";

  return (
    <>
      <FollowButton />
      <div className="p-4 text-white">
        <h1 className="text-2xl font-semibold">
          User <span className="font-mono">/u/{handle}</span>
        </h1>
      </div>
    </>
  );
}
