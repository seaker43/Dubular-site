"use server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ServerSignOut() {
  const { sessionId } = auth();
  if (sessionId) {
    await clerkClient.sessions.revokeSession(sessionId);
  }
  redirect("/");
}
