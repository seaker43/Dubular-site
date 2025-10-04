"use server";
import { signOut } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ServerSignOut() {
  await signOut();
  redirect("/");
}
