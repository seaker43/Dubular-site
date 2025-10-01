"use client";
import Link from "next/link";

export default function AccountLoginPage() {
  return (
    <main className="min-h-[calc(100dvh-var(--header-h)-var(--bottombar-h))] w-full grid place-items-center px-4 pb-[var(--bottombar-h)]">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_0_0_2px_rgba(255,255,255,0.06),0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur">
          <h1 className="text-2xl font-extrabold tracking-wide text-white mb-1 text-center">
            Sign in to Dubular
          </h1>
          <p className="text-white/60 text-sm text-center mb-6">
            Welcome back! Use the buttons below to continue.
          </p>

          <div className="grid gap-3">
            <Link
              href="/sign-in"
              className="w-full text-center rounded-xl bg-dubular-green/90 hover:bg-dubular-green text-black font-semibold py-2 transition"
              aria-label="Continue to Sign In"
            >
              Continue to Sign In
            </Link>

            <Link
              href="/sign-up"
              className="w-full text-center rounded-xl border border-white/10 bg-zinc-900/60 py-2 text-white/90 hover:bg-zinc-900 transition"
              aria-label="Create Account"
            >
              Create Account
            </Link>

            <Link
              href="/sign-in"
              className="w-full text-center rounded-xl border border-white/10 bg-zinc-900/60 py-2 text-white/90 hover:bg-zinc-900 transition"
              aria-label="Continue with Google"
            >
              Continue with Google
            </Link>

            <Link
              href="/sign-in"
              className="w-full text-center rounded-xl border border-white/10 bg-zinc-900/60 py-2 text-white/90 hover:bg-zinc-900 transition"
              aria-label="Continue with GitHub"
            >
              Continue with GitHub
            </Link>
          </div>

          <p className="text-center text-xs text-white/40 mt-4">
            By continuing you agree to our{" "}
            <Link href="/terms" className="text-white/60 hover:text-white/80">Terms</Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-white/60 hover:text-white/80">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
