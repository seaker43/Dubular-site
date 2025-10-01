export const dynamic = "force-dynamic";
"use client";
import { SignUp } from "@clerk/nextjs";
export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
      <div className="w-full max-w-md rounded-2xl bg-neutral-900/80 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur">
        <h1 className="mb-6 text-center text-2xl font-bold tracking-tight text-cyan-400">Create your Dubular account</h1>
        <SignUp appearance={{elements:{formButtonPrimary:"bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl px-4 py-2",formFieldInput:"bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-400 rounded-lg",headerTitle:"hidden",headerSubtitle:"hidden",card:"bg-transparent shadow-none border-0"},variables:{colorPrimary:"#06b6d4",borderRadius:"12px"}}} path="/signup" routing="path" signInUrl="/signin"/>
      </div>
    </main>
  );
}
