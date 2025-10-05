"use client";
import { useClerk, ClerkLoaded } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignOutBtn() {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <ClerkLoaded>
      <button
        type="button"
        data-testid="signout-btn"
        className="mt-4 rounded-lg px-4 py-2 text-sm"
        onClick={() => signOut(() => router.push("/sign-in"))}
      >
        Sign out
      </button>
    </ClerkLoaded>
  );
}
