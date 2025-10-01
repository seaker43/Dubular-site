"use client";
import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
export default function Page() {
  return (
    <main className="min-h-[calc(100svh-64px)] flex items-center justify-center bg-neutral-950">
      <div className="w-full max-w-md rounded-xl bg-neutral-900/80 border border-neutral-800 shadow-[0_0_20px_#00ff00] p-6 text-white">
        <h1 className="text-2xl font-bold mb-6">Create account</h1>
        <div className="mb-4">
          <SignUpButton mode="modal">
            <button className="w-full border border-[var(--laser-green)] text-black bg-[var(--laser-green)] hover:opacity-90 rounded-lg py-2 font-semibold">
              Continue with Google
            </button>
          </SignUpButton>
        </div>
        <div className="text-center text-neutral-400 text-sm mb-4">or</div>
        <form className="space-y-3">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--laser-green)]/60"
          />
          <button className="w-full rounded-lg bg-[var(--laser-green)] text-black font-semibold py-2 hover:opacity-90">
            Continue
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-neutral-400">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-[var(--laser-green)] hover:opacity-80"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
