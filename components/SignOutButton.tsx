"use client";
import { SignOutButton } from "@clerk/nextjs";

export default function SignOutBtn() {
  return (
    <SignOutButton redirectUrl="/sign-in">
      <button
        className="mt-4 rounded-lg bg-[var(--laser-green,#00ff00)]/10 px-4 py-2 text-sm"
        type="button"
        data-testid="signout-btn"
      >
        Sign out
      </button>
    </SignOutButton>
  );
}
