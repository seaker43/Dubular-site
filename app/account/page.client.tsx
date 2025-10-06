"use client";
import { useUser } from "@clerk/nextjs";
import SignOutBtn from "@/components/SignOutButton";

export default function AccountClient(){
  const { user, isLoaded } = useUser();
  if (!isLoaded) return null; // wait for Clerk before rendering

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-24 pt-6 text-white">
      <h1 className="text-2xl font-semibold mb-6">Account</h1>
      <div className="rounded-2xl bg-neutral-900/60 p-6 border border-neutral-800 shadow-lg">
        <div className="flex flex-col items-center text-center space-y-4">
          {user?.imageUrl && (
            <img src={user.imageUrl} alt="Profile" className="w-20 h-20 rounded-full ring-2 ring-[var(--laser-green,#00ff00)]" />
          )}
          <div>
            <p className="text-lg font-semibold">{user?.fullName ?? ""}</p>
            <p className="text-neutral-400 text-sm">{user?.primaryEmailAddress?.emailAddress ?? ""}</p>
          </div>
          <button className="mt-4 rounded-lg bg-[var(--laser-green,#00ff00)]/10 px-4 py-2 text-sm text-[var(--laser-green,#00ff00)] border border-[var(--laser-green,#00ff00)]/40">
            Profile
          </button>
        </div>
        <div className="mt-8 text-center">
          <SignOutBtn />
        </div>
      </div>
    </div>
  );
}
