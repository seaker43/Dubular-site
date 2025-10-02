"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    window.location.href = "/";
  };

  return (
    <main className="min-h-[100svh] bg-neutral-950 text-white flex flex-col items-center pt-16 pb-20">
      <div className="w-full max-w-md bg-neutral-900 rounded-xl shadow-lg p-6 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center">Sign in to Dubular</h1>
        <p className="text-neutral-400 text-center mt-3">Welcome back!</p>

        <a
          href="#"
          className="block w-full rounded-lg bg-[var(--laser-green,#00ff00)] text-black font-semibold py-3 mt-6 shadow hover:opacity-95 active:opacity-90 text-center"
        >
          Continue with Google
        </a>

        <div className="text-center text-neutral-400 my-4">or</div>

        <form className="space-y-3" onSubmit={(e) => onSubmit(e)}>
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 text-white p-3 focus:ring-2 focus:ring-[var(--laser-green,#00ff00)]/70"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-neutral-800 border border-neutral-700 text-white p-3 focus:ring-2 focus:ring-[var(--laser-green,#00ff00)]/70"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[var(--laser-green,#00ff00)] text-black font-semibold py-3 shadow hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-400">
          Don\u0027t have an account?{" "}
          <Link href="/sign-up" className="font-medium hover:opacity-90">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}
