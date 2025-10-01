"use client";
export const runtime = "edge";

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignInPage() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const qp = useSearchParams();
  const redirectTo = qp.get("redirect_url") || "/";

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isLoaded) return null;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true); setError(null);
    try {
      const res = await signIn!.create({
        identifier,
        password,
        strategy: "password",
      });
      if (res.status === "complete") {
        await setActive!({ session: res.createdSessionId });
        router.replace(redirectTo);
      } else {
        setError("Additional verification required.");
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.longMessage || err?.message || "Sign in failed");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="mx-auto max-w-sm p-6">
      <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="w-full rounded-xl border px-3 py-2"
          placeholder="Email or username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          autoComplete="username"
          required
        />
        <input
          className="w-full rounded-xl border px-3 py-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-xl bg-black text-white py-2 font-medium disabled:opacity-60"
          aria-busy={pending}
        >
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <p className="mt-4 text-sm">
        New here?{" "}
        <a className="underline" href={`/sign-up?redirect_url=${encodeURIComponent(redirectTo)}`}>
          Create an account
        </a>
      </p>
    </main>
  );
}
