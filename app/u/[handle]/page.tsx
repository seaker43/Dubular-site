"use client";

import { useParams } from "next/navigation";

export default function UserPublicPage() {
  const params = useParams<{ handle: string }>();
  const handle = params?.handle ?? "user";

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-semibold">
        User <span className="font-mono">/u/{handle}</span>
      </h1>
      <p className="opacity-70 mt-2">Viewer profile page placeholder.</p>
    </div>
  );
}
