"use client";
export const runtime="nodejs";
import { useUser } from "@clerk/nextjs";

export default function MePage() {
  const { user, isLoaded } = useUser();
  if (!isLoaded) return <p className="p-6 text-neutral-400">Loading...</p>;
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
      <div className="rounded-2xl bg-neutral-900/60 p-6 border border-neutral-800 shadow-lg">
        <div className="flex flex-col items-center text-center space-y-4">
          {user?.imageUrl && (
            <img
              src={user.imageUrl}
              alt="Profile"
              className="w-20 h-20 rounded-full ring-2 ring-[var(--laser-green,#00ff00)]"
            />
          )}
          <div>
            <p className="text-lg font-semibold">{user?.fullName}</p>
            <p className="text-neutral-400 text-sm">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
