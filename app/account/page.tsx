"use client";
import { SignedIn, SignedOut, RedirectToSignIn, useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AccountPage() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    try { await signOut(); } finally { router.replace("/"); }
  };

  return (
    <>
      <SignedIn>
        <div className="mx-auto w-full max-w-3xl px-4 pb-24 pt-6 text-white">
          <div className="mb-6 flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800 px-3 py-2 hover:bg-neutral-900/60">
              <ArrowLeft size={18} /><span className="text-sm">Back</span>
            </Link>
            <h1 className="text-2xl font-semibold">Account</h1>
          </div>

          <div className="rounded-2xl bg-neutral-900/60 p-6 border border-neutral-800 shadow-lg">
            <div className="flex flex-col items-center text-center space-y-4">
              {user?.imageUrl && <img src={user.imageUrl} alt="Profile" className="w-20 h-20 rounded-full ring-2 ring-[var(--laser-green,#00ff00)]" />}
              <div>
                <p className="text-lg font-semibold">{user?.fullName}</p>
                <p className="text-neutral-400 text-sm">{user?.primaryEmailAddress?.emailAddress}</p>
              </div>
              <button className="mt-4 rounded-lg bg-[var(--laser-green,#00ff00)]/10 px-4 py-2 text-sm text-[var(--laser-green,#00ff00)] border border-[var(--laser-green,#00ff00)]/40">Profile</button>
            </div>

            <div className="mt-8 text-center">
              <button type="button" onClick={handleSignOut} className="text-sm text-neutral-400 hover:text-white underline">Sign out</button>
            </div>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn redirectUrl="/sign-in" afterSignInUrl="/account" />
      </SignedOut>
    </>
  );
}
