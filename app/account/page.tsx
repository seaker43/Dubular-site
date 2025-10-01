"use client";

import { UserProfile, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AccountPage() {
  return (
    <>
      <SignedIn>
        <div className="mx-auto w-full max-w-3xl px-4 pb-16 pt-6 text-white">
          <div className="mb-6 flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-800 px-3 py-2 hover:bg-neutral-900/60"
            >
              <ArrowLeft size={18} />
              <span className="text-sm">Back</span>
            </Link>
            <h1 className="text-2xl font-semibold">Account</h1>
          </div>

          <UserProfile
            appearance={{
              layout: { socialButtonsPlacement: "bottom" },
              variables: {
                colorBackground: "rgb(10,10,10)",
                colorText: "rgb(229,229,229)",
                colorInputBackground: "rgb(23,23,23)",
                borderRadius: "16px",
              },
            }}
            routing="hash"
          />
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn redirectUrl="/sign-in" afterSignInUrl="/account" />
      </SignedOut>
    </>
  );
}
