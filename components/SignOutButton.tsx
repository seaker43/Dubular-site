"use client";
import { SignOutButton } from "@clerk/nextjs";

export default function SignOutBtn() {
  return (
    <SignOutButton redirectUrl="/sign-in">
      <button
        type="button"
        data-testid="signout-btn"
        className="mt-4 rounded-lg px-4 py-2 text-sm border"
        onClick={() => console.log("[signout] click")}
      >
        Sign out
      </button>
    </SignOutButton>
  );
}
