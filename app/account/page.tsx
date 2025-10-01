"use client";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
export const runtime="edge"; export const dynamic="force-dynamic"; export const revalidate=0;
export default function AccountPage(){ const {user,isLoaded}=useUser(); if(!isLoaded) return null;
  return (<main className="min-h-[calc(100dvh-var(--header-h)-var(--bottombar-h))] px-4 pb-[var(--bottombar-h)]">
    <SignedOut><RedirectToSignIn redirectUrl="/account" /></SignedOut>
    <SignedIn><div className="mx-auto max-w-3xl py-10"><h1 className="text-2xl font-bold text-white">Signed in ✅</h1>
    <p className="text-white/70 mt-2">Hello {user?.firstName ?? "friend"} ({user?.primaryEmailAddress?.emailAddress ?? "—"})</p></div></SignedIn>
  </main>); }
