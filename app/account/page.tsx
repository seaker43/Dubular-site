"use client";
import { UserProfile, SignedIn } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Account · Dubular" };

export default function AccountPage() {
  return (
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
        <div className="rounded-3xl border border-neutral-800 bg-neutral-950/60 p-2 shadow-xl ring-1 ring-black/10">
          <UserProfile
            appearance={{
              layout: {
                logoPlacement: "none",
                socialButtonsPlacement: "bottom",
                shimmer: false,
                showOptionalFields: true,
              },
              variables: {
                colorBackground: "rgb(10,10,10)",
                colorText: "rgb(229,229,229)",
                colorTextSecondary: "rgb(163,163,163)",
                colorPrimary: "#22d3ee",
                colorInputBackground: "rgb(23,23,23)",
                colorInputText: "rgb(229,229,229)",
                colorInputBorder: "rgb(64,64,64)",
                borderRadius: "16px",
                fontSize: "14px",
              },
              elements: {
                rootBox: "w-full",
                card: "bg-transparent shadow-none border-0",
                headerTitle: "text-2xl font-semibold",
                headerSubtitle: "text-neutral-400",
                navbar: "hidden md:block",
                navbarItem: "data-[active=true]:bg-neutral-900 rounded-xl",
                formButtonPrimary: "bg-cyan-600 hover:bg-cyan-500 rounded-2xl px-4 py-2",
                profileSectionPrimaryButton: "bg-cyan-600 hover:bg-cyan-500 rounded-2xl",
                formFieldLabel: "text-neutral-300",
                formFieldInput: "bg-neutral-900 border-neutral-800 focus:ring-0 focus:border-cyan-600 rounded-xl",
                avatarBox: "ring-1 ring-neutral-800",
                cardBox: "rounded-3xl border border-neutral-800 bg-neutral-950",
                footer: "hidden",
                alert: "rounded-xl border-neutral-800",
              },
            }}
            routing="hash"
          />
        </div>
        <p className="mt-4 text-center text-xs text-neutral-500">
          You’re viewing the account settings powered by Clerk.
        </p>
      </div>
    </SignedIn>
  );
}
