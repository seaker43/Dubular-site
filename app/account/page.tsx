"use client";
import { SignedIn, SignedOut, UserProfile, RedirectToSignIn } from "@clerk/nextjs";

export default function AccountPage() {
  return (
    <main className="min-h-[calc(100dvh-var(--header-h)-var(--bottombar-h))] px-4 pb-[var(--bottombar-h)]">
      <SignedIn>
        <UserProfile />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </main>
  );
}
