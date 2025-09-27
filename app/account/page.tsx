"use client";

import { useState } from "react";
import Link from "next/link";

export default function AccountLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-[calc(100dvh-var(--header-h)-var(--bottombar-h))] w-full grid place-items-center px-4 pb-[var(--bottombar-h)]">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_0_0_2px_rgba(255,255,255,0.06),0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur">
          <h1 className="text-2xl font-extrabold tracking-wide text-white mb-1 text-center">
            Sign in to Dubular
          </h1>
          <p className="text-white/60 text-sm text-center mb-6">
            Welcome back! Enter your details to continue.
          </p>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Submit login");
            }}
          >
            <label className="block">
              <span className="block text-sm text-white/70 mb-1">Email</span>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl bg-zinc-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:border-white/30"
              />
            </label>
            <label className="block">
              <div className="flex items-center justify-between">
                <span className="block text-sm text-white/70 mb-1">Password</span>
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="text-xs text-dubular-green hover:text-emerald-300"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full rounded-xl bg-zinc-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:border-white/30"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-xl bg-dubular-green/90 hover:bg-dubular-green text-black font-semibold py-2 transition"
            >
              Sign in
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between text-xs text-white/60">
            <Link href="/forgot" className="hover:text-white/90">
              Forgot password?
            </Link>
            <Link href="/signup" className="text-dubular-green hover:text-emerald-300">
              Create account
            </Link>
          </div>
          <div className="mt-8 grid gap-3">
            <button className="w-full rounded-xl border border-white/10 bg-zinc-900/60 py-2 text-white/90 hover:bg-zinc-900">
              Continue with Google
            </button>
            <button className="w-full rounded-xl border border-white/10 bg-zinc-900/60 py-2 text-white/90 hover:bg-zinc-900">
              Continue with GitHub
            </button>
          </div>
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
