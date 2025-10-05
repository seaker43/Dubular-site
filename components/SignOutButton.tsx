"use client";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
export default function SignOutBtn(){
  return (<SignedIn><SignOutButton redirectUrl="/sign-in"><button className="text-sm text-neutral-400 hover:text-white underline">Sign out</button></SignOutButton></SignedIn>);
}