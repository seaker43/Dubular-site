'use client';
import { useUser } from "@clerk/nextjs";

export default function DashboardClient() {
  const { user, isLoaded } = useUser();
  if (!isLoaded) return <div className="p-6 text-neutral-400">Loading...</div>;
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-24 pt-6 text-white">
      <h1 className="text-2xl font-semibold mb-6">Creator dashboard</h1>
      <div className="rounded-2xl bg-neutral-900/60 p-6 border border-neutral-800 shadow-lg">
        Welcome, {user?.fullName || user?.username}!
      </div>
    </div>
  );
}
