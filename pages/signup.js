"use client";

export const dynamic = "force-dynamic";
export const runtime = "edge";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
      <div className="w-full max-w-md rounded-2xl bg-neutral-900/80 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur">
        <h1 className="mb-6 text-center text-2xl font-bold tracking-tight text-cyan-400">
          Create your Dubular account
        </h1>
        <SignUp appearance={{ variables: { colorPrimary: "#06b6d4" } }} path="/signup" signInUrl="/signin" />
      </div>
    </div>
  );
}
