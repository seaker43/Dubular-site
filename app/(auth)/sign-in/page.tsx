"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useSignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const qp = useSearchParams();
  const redirectTo = qp.get("redirect_url") || "/account";

  async function handleEmailPassword(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded || !signIn) return;
    setError(null);
    setPending(true);
    try {
      const res = await signIn.create({
        identifier: email.trim(),
        password,
        redirectUrl: "/sign-in",             // where Clerk posts back mid-flow
        redirectUrlComplete: redirectTo,     // final destination
      });

      if (res.status === "complete" && res.createdSessionId) {
        await setActive?.({ session: res.createdSessionId });
        router.push(redirectTo);
      }
    } catch (err: any) {
      const msg =
        err?.errors?.[0]?.longMessage ||
        err?.message ||
        "Sign in failed. Please check your details.";
      setError(msg);
    } finally {
      setPending(false);
    }
  }

  async function oauth(provider: "oauth_google" | "oauth_github") {
    if (!isLoaded || !signIn) return;
    setError(null);
    setPending(true);
    try {
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sign-in",
        redirectUrlComplete: redirectTo,
      });
    } catch (err: any) {
      const msg =
        err?.errors?.[0]?.longMessage ||
        err?.message ||
        "Could not start OAuth.";
      setError(msg);
      setPending(false);
    }
  }

  return (
    <main className="min-h-[calc(100dvh-var(--header-h)-var(--bottombar-h))] w-full px-4 pb-[var(--bottombar-h)] grid place-items-start">
      <div className="w-full max-w-md mt-6">
        <h1 className="text-3xl font-extrabold text-white mb-2">Sign in</h1>

        <form onSubmit={handleEmailPassword} className="space-y-3">
          <input
            type="text"
            inputMode="email"
            autoComplete="username"
            placeholder="Email or username"
            className="w-full rounded-xl bg-zinc-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:border-white/30"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            className="w-full rounded-xl bg-zinc-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:border-white/30"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={pending}
            aria-busy={pending}
            className="w-full rounded-xl bg-dubular-green/90 hover:bg-dubular-green text-black font-semibold py-2 transition disabled:opacity-60"
          >
            {pending ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="relative my-5">
          <div className="absolute inset-0 border-t border-white/10" />
          <span className="relative mx-auto block w-fit bg-black px-3 text-xs text-white/50">
            or continue with
          </span>
        </div>

        <div className="grid gap-3">
          <button
            onClick={() => oauth("oauth_google")}
            disabled={pending}
            className="w-full rounded-xl border border-white/10 bg-zinc-900/60 py-2 text-white/90 hover:bg-zinc-900 disabled:opacity-60"
          >
            Continue with Google
          </button>
          <button
            onClick={() => oauth("oauth_github")}
            disabled={pending}
            className="w-full rounded-xl border border-white/10 bg-zinc-900/60 py-2 text-white/90 hover:bg-zinc-900 disabled:opacity-60"
          >
            Continue with GitHub
          </button>
        </div>

        <p className="mt-6 text-sm text-white/60">
          New here?{" "}
          <Link
            href={`/sign-up?redirect_url=${encodeURIComponent(redirectTo)}`}
            className="text-dubular-green hover:text-[var(--laser-green)]"
          >
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
