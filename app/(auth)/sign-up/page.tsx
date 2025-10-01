"use client";
export const runtime = "edge";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignUpPage() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const qp = useSearchParams();
  const redirectTo = qp.get("redirect_url") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [awaitingCode, setAwaitingCode] = useState(false);

  if (!isLoaded) return null;

  async function start(e: React.FormEvent) {
    e.preventDefault();
    setPending(true); setError(null);
    try {
      await signUp!.create({ emailAddress: email, password });
      await signUp!.prepareEmailAddressVerification({ strategy: "email_code" });
      setAwaitingCode(true);
    } catch (err: any) {
      setError(err?.errors?.[0]?.longMessage || err?.message || "Sign up failed");
    } finally {
      setPending(false);
    }
  }

  async function verify(e: React.FormEvent) {
    e.preventDefault();
    setPending(true); setError(null);
    try {
      const res = await signUp!.attemptEmailAddressVerification({ code });
      if (res.status === "complete") {
        await setActive!({ session: res.createdSessionId });
        router.replace(redirectTo);
      } else {
        setError("Additional verification required.");
      }
    } catch (err: any) {
      setError(err?.errors?.[0]?.longMessage || err?.message || "Verification failed");
    } finally {
      setPending(false);
    }
  }

  return (
    <main className="mx-auto max-w-sm p-6">
      <h1 className="text-2xl font-semibold mb-4">Create account</h1>

      {!awaitingCode ? (
        <form onSubmit={start} className="space-y-3">
          <input
            className="w-full rounded-xl border px-3 py-2"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <input
            className="w-full rounded-xl border px-3 py-2"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-xl bg-black text-white py-2 font-medium disabled:opacity-60"
            aria-busy={pending}
          >
            {pending ? "Creating…" : "Create account"}
          </button>
        </form>
      ) : (
        <form onSubmit={verify} className="space-y-3">
          <p className="text-sm">We sent a 6-digit code to <strong>{email}</strong></p>
          <input
            className="w-full rounded-xl border px-3 py-2 text-center tracking-widest"
            placeholder="123456"
            inputMode="numeric"
            maxLength={6}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-xl bg-black text-white py-2 font-medium disabled:opacity-60"
            aria-busy={pending}
          >
            {pending ? "Verifying…" : "Verify & continue"}
          </button>
        </form>
      )}

      <p className="mt-4 text-sm">
        Already have an account?{" "}
        <a className="underline" href={`/sign-in?redirect_url=${encodeURIComponent(redirectTo)}`}>
          Sign in
        </a>
      </p>
    </main>
  );
}
