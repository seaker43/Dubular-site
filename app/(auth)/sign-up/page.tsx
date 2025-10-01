"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [pending, setPending] = useState<null | "email" | "google" | "github">(null);
  const [redirectTo, setRedirectTo] = useState("/account");

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const r = url.searchParams.get("redirect_url");
      if (r) setRedirectTo(r);
    } catch {}
  }, []);

  async function handleEmailSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending("email");
    try {
      // TODO: replace with your real sign-up action
      alert("Create account (stub). Replace with your sign-up action.");
    } finally {
      setPending(null);
    }
  }

  async function oauth(provider: "google" | "github") {
    setPending(provider);
    try {
      // TODO: replace with your OAuth start action
      alert(`Start ${provider} OAuth (stub). Replace with your OAuth action.`);
    } finally {
      setPending(null);
    }
  }

  return (
    <main className="min-h-[calc(100dvh-var(--header-h)-var(--bottombar-h))] w-full grid place-items-start px-4 pb-[var(--bottombar-h)]">
      <div className="w-full max-w-md mt-2">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_0_0_2px_rgba(255,255,255,0.06),0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur">
          <h1 className="text-3xl font-extrabold tracking-wide text-white mb-1">
            Create account
          </h1>

          <form className="mt-4 space-y-4" onSubmit={handleEmailSignUp}>
            <label className="block">
              <span className="block text-sm text-white/70 mb-1">Email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl bg-zinc-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:border-white/30"
              />
            </label>

            <label className="block">
              <span className="block text-sm text-white/70 mb-1">Password</span>
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-xl bg-zinc-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:border-white/30"
              />
            </label>

            <button
              type="submit"
              disabled={pending !== null}
              className="w-full rounded-xl bg-dubular-green/90 hover:bg-dubular-green text-black font-semibold py-2 transition disabled:opacity-60"
            >
              {pending === "email" ? "Creating..." : "Create account"}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black/40 px-3 text-xs text-white/50">or continue with</span>
            </div>
          </div>

          <div className="grid gap-3">
            <button
              onClick={() => oauth("google")}
              disabled={pending !== null}
              className="w-full rounded-xl border border-white/10 bg-zinc-900/60 py-2 text-white/90 hover:bg-zinc-900 disabled:opacity-60"
            >
              {pending === "google" ? "Connecting Google…" : "Continue with Google"}
            </button>
            <button
              onClick={() => oauth("github")}
              disabled={pending !== null}
              className="w-full rounded-xl border border-white/10 bg-zinc-900/60 py-2 text-white/90 hover:bg-zinc-900 disabled:opacity-60"
            >
              {pending === "github" ? "Connecting GitHub…" : "Continue with GitHub"}
            </button>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Already have an account?{" "}
            <Link
              href={`/sign-in?redirect_url=${encodeURIComponent(redirectTo)}`}
              className="text-dubular-green hover:text-[var(--laser-green)]"
            >
              Sign in
            </Link>
          </p>
        </div>

        <p className="text-center text-xs text-white/40 mt-4">
          By continuing you agree to our{" "}
          <Link href="/terms" className="text-white/60 hover:text-white/80">Terms</Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-white/60 hover:text-white/80">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}
