"use client";
export const runtime = "edge";
export const dynamic = "force-dynamic";
import FollowCounts from "@/components/FollowCounts";

import FollowButton from "@/components/FollowButton";
{
  /* counts */
}
<FollowCounts handle={handle} className="mt-2" />;
import { useParams } from "next/navigation";

export default function UserPublicPage() {
  const params = useParams<{ handle: string }>();
  const handle = typeof params?.handle === "string" ? params.handle : "";

  return (
    <>
      <FollowButton />
      {/* counts */}
      <FollowCounts handle={handle} className="mt-2" />
      <div className="p-4 text-white">
        <h1 className="text-2xl font-semibold">
          User <span className="font-mono">/u/{handle}</span>
        </h1>
      </div>
    </>
  );
}

{
  /* counts (fallback append) */
}
<FollowCounts handle={handle} className="mt-2" />;
